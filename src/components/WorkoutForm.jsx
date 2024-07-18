import React, { useState } from "react";

const WorkoutForm = ({ addWorkout }) => {
  const [name, setName] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addWorkout({ name, sets, reps });
    setName("");
    setSets("");
    setReps("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-lg p-6 mb-6"
    >
      <h2 className="text-2xl font-bold text-green mb-4">Add New Workout</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Exercise Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Sets"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-teal text-white p-2 rounded hover:bg-green"
      >
        Add Workout
      </button>
    </form>
  );
};

export default WorkoutForm;
