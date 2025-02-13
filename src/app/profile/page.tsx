"use client";

import Button from "@/components/Button";
import Text from "@/components/Text";
import { useMFit } from "@/contexts/MFitContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Profile() {
  const router = useRouter();
  const { loadMyWorkouts, myWorkouts } = useMFit();

  useEffect(() => {
    loadMyWorkouts();
  }, []);

  return (
    <main>
      <Text>Treinos</Text>
      {myWorkouts?.workouts.map((workout, i) => {
        return (
          <Button
            key={`workout-${i}`}
            onClick={() => router.push(`/profile/${workout.id}`)}
          >
            {workout.nome}
          </Button>
        );
      })}
    </main>
  );
}
