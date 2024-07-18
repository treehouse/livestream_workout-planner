import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import WorkoutPage from "./pages/WorkoutPage";

// Helper functions for local storage
const loadWorkoutsFromLocalStorage = () => {
  const workouts = localStorage.getItem("workouts");
  return workouts ? JSON.parse(workouts) : [];
};

const saveWorkoutsToLocalStorage = (workouts) => {
  localStorage.setItem("workouts", JSON.stringify(workouts));
};

const App = () => {
  const [workouts, setWorkouts] = useState(loadWorkoutsFromLocalStorage());

  useEffect(() => {
    saveWorkoutsToLocalStorage(workouts);
  }, [workouts]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage addWorkout={addWorkout} workouts={workouts} />}
        />
        <Route
          path="/workout/:id"
          element={<WorkoutPage workouts={workouts} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
