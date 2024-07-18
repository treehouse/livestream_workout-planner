import React from "react";
import { useParams } from "react-router-dom";

const WorkoutPage = ({ workouts }) => {
  const { id } = useParams();
  const workout = workouts[parseInt(id, 10)];

  if (!workout) {
    return <div className="container mx-auto p-4">Workout not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-green mb-4">{workout.name}</h1>
        <div className="text-gray-600">
          <p>
            Sets:{" "}
            <span className="font-semibold text-pink">{workout.sets}</span>
          </p>
          <p>
            Reps:{" "}
            <span className="font-semibold text-magenta">{workout.reps}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPage;
