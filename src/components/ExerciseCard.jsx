import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise, index }) => {
  return (
    <Link
      to={`/workout/${index}`}
      className="transform transition-transform hover:scale-105"
    >
      <div className="bg-white shadow-lg rounded-lg p-6 mb-4 border-l-4 border-tomato hover:border-teal">
        <h2 className="text-2xl font-bold text-green mb-2">{exercise.name}</h2>
        <div className="text-gray-600">
          <p>
            Sets:{" "}
            <span className="font-semibold text-pink">{exercise.sets}</span>
          </p>
          <p>
            Reps:{" "}
            <span className="font-semibold text-magenta">{exercise.reps}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ExerciseCard;
