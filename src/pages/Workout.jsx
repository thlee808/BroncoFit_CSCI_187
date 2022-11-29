import React from 'react';
import WorkoutForm from "../components/WorkoutForm";

const Workout = () => {
  return (
    <div className="workoutPage">
      <nav class="bg-dark navbar-dark navbar">
        <div className="row col-12 d-flex justify-content-center text-white">
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