import React from "react";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutList from "../components/WorkoutList";

const HomePage = ({ addWorkout, workouts }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-green mb-8">My Workouts</h1>
      <WorkoutForm addWorkout={addWorkout} />
      <WorkoutList workouts={workouts} />
    </div>
  );
};

export default HomePage;
