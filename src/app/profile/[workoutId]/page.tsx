"use client";

import Text from "@/components/Text";
import { useMFit } from "@/contexts/MFitContext";
import { useParams } from "next/navigation";
import { useEffect } from "react";

interface ExerciseItem {
  name: string;
  series: string;
  repeticoes: string;
}

interface IntervalItem {
  duration: number;
}

type CarouselItem = ExerciseItem | IntervalItem;

function isIntervalItem(item: CarouselItem): item is IntervalItem {
  return "duration" in item;
}

function isExerciseItem(item: CarouselItem): item is ExerciseItem {
  return "name" in item;
}

export default function Profile() {
  const { workoutId } = useParams();
  const { loadWorkoutDetails, workoutDetails } = useMFit();

  useEffect(() => {
    if (typeof workoutId === "string") {
      loadWorkoutDetails(workoutId);
    }
  }, []);

  const carousel: (ExerciseItem | IntervalItem)[] = [];

  if (workoutDetails) {
    workoutDetails.exercs.forEach((exerc) => {
      exerc.exercises.forEach((exercise) => {
        if (exercise.series.length === 1) {
          const repeticaoConfig = exercise.series[0].repeticao ?? "";
          const intervalo = exercise.series[0].intervalo ?? 0;
          const [repeticoes, series] = repeticaoConfig
            .trim()
            .split("/")
            .reverse();

          if (!series) {
            carousel.push({
              name: exercise.name,
              series: "1",
              repeticoes,
            });

            if (intervalo)
              carousel.push({
                duration: intervalo,
              });
          } else {
            Array.from({ length: Number(series) }).forEach((_, i) => {
              carousel.push({
                name: exercise.name,
                series: String(i + 1),
                repeticoes,
              });

              if (intervalo)
                carousel.push({
                  duration: intervalo,
                });
            });
          }
        }
      });
    });
  }

  return (
    <main>
      <div className="flex overflow-x snap-mandatory snap-x">
        {carousel.map((item, i) => {
          if (isIntervalItem(item)) {
            return (
              <div
                className="bg-gray-light snap-center w-[450px] h-screen"
                key={`exercise-${i}`}
              >
                <Text>Intervalo</Text>
                <Text>Duração: {item.duration}</Text>
              </div>
            );
          }

          if (isExerciseItem(item)) {
            return (
              <div
                className="bg-gray-medium snap-center w-[450px] h-screen"
                key={`exercise-${i}`}
              >
                <Text>{item.name}</Text>
                <Text>Serie: {item.series}</Text>
                <Text>Repetições: {item.repeticoes}</Text>
              </div>
            );
          }

          return null;
        })}
      </div>
    </main>
  );
}
