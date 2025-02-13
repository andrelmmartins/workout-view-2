"use client";

import { createContext, useContext, useEffect, useState } from "react";

import * as service from "@/services/mfit";
import {
  MyWorkouts,
  Profile,
  SignInData,
  WorkoutDetails,
} from "@/interfaces/mfit";
import { useRouter } from "next/navigation";

interface IContextProps {
  isAuthenticated: boolean;
  signIn: (data: SignInData) => Promise<void>;

  loadMyWorkouts: () => Promise<void>;
  myWorkouts: MyWorkouts | undefined;

  loadWorkoutDetails: (id: number | string) => Promise<void>;
  workoutDetails: WorkoutDetails | undefined;
}

const MFitContext = createContext({} as IContextProps);

export function MFitProvider(props: { children: React.ReactNode }) {
  const router = useRouter();

  const [profile, setProfile] = useState<Profile>();
  const isAuthenticated = !!profile;

  const [myWorkouts, setMyWorkouts] = useState<MyWorkouts>();
  const [workoutDetails, setWorkoutDetails] = useState<WorkoutDetails>();

  async function login(token: string) {
    service.api.defaults.headers.common.Authorization = token;
    localStorage.setItem("token", token);
    await getProfile();
  }

  function logout() {
    service.api.defaults.headers.common.Authorization = "";
    localStorage.removeItem("token");
    setProfile(undefined);
  }

  async function signIn(data: SignInData) {
    try {
      const response = await service.signIn(data);
      await login(response.data.token);
    } catch (e) {
      console.log("signIn", e);
      logout();
    }
  }

  async function getProfile() {
    try {
      const response = await service.getProfile();
      const profile = response.data?.[0];
      if (profile) {
        setProfile(profile);
      } else {
        logout();
      }
    } catch (e) {
      console.log("getProfile", e);
      logout();
    }
  }

  async function loadMyWorkouts() {
    if (profile) {
      try {
        const response = await service.getWorkouts(profile.id);
        setMyWorkouts(response.data);
      } catch (e) {
        console.log("getWorkouts", e);
      }
    } else {
      logout();
    }
  }

  async function loadWorkoutDetails(id: number | string) {
    try {
      const response = await service.getWorkoutDetails(id);
      setWorkoutDetails(response.data);
    } catch (e) {
      console.log("loadWorkoutDetails", e);
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/profile");
    } else {
      router.push("/");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) login(token);
  }, []);

  return (
    <MFitContext.Provider
      value={{
        isAuthenticated,
        signIn,
        loadMyWorkouts,
        myWorkouts,
        loadWorkoutDetails,
        workoutDetails,
      }}
    >
      {props.children}
    </MFitContext.Provider>
  );
}

export const useMFit = () => useContext(MFitContext);
