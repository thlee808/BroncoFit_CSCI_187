import React from 'react';
import WorkoutForm from "../components/WorkoutForm";

const Workout = () => {
  return (
    <div className="workoutPage">
      <nav class="navbar">
        <div className="header">
          <h3>Workout Form</h3>
        </div>
      </nav>
      <div className="workoutFormContainer">
        <WorkoutForm></WorkoutForm>
      </div>
    </div>
    
  )
}

export default Workout;