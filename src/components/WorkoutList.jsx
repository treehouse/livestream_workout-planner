import React from "react";
import ExerciseCard from "./ExerciseCard";

const WorkoutList = ({ workouts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {workouts.map((workout, index) => (
        <ExerciseCard key={index} index={index} exercise={workout} />
      ))}
    </div>
  );
};

export default WorkoutList;
