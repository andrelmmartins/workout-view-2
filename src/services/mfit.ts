import {
  MyWorkouts,
  Profile,
  SignInData,
  SignInResponse,
  WorkoutDetails,
} from "@/interfaces/mfit";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.mfitpersonal.com.br",
});

export function signIn(payload: SignInData) {
  return api.post<SignInResponse>("/auth/client", payload);
}

export function getProfile() {
  return api.get<Profile[]>("/client/workout/all");
}

export function getWorkouts(id: number | string) {
  return api.get<MyWorkouts>("/client/workout/", {
    params: {
      id,
    },
  });
}

export function getWorkoutDetails(id: number | string) {
  return api.get<WorkoutDetails>("/client/workout/session", {
    params: {
      id,
    },
  });
}
