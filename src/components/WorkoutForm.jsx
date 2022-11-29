import React, {useState,setState} from 'react';
import {database} from '../firebase';
import { UserAuth } from '../context/AuthContext';
import { storage } from "../firebase";
import db from "../firebase";
import { doc, setDoc, updateDoc } from "firebase/firestore"; 
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const WorkoutForm = () => {

    const [workoutName, setWorkoutName] = useState(null);
    const [lengthHours, setLengthHours] = useState(null);
    const [lengthMinutes, setLengthMinutes] = useState(null);

    const [nameExercise1, setNameExercise1] = useState(null);
    const [numSetsInput1, setNumSetsInput1] = useState(null);
    const [numRepsInput1, setNumRepsInput1] = useState(null);
    const [weightInput1, setWeightInput1] = useState(null);

    const [nameExercise2, setNameExercise2] = useState(null);
    const [numSetsInput2, setNumSetsInput2] = useState(null);
    const [numRepsInput2, setNumRepsInput2] = useState(null);
    const [weightInput2, setWeightInput2] = useState(null);

    const [nameExercise3, setNameExercise3] = useState(null);
    const [numSetsInput3, setNumSetsInput3] = useState(null);
    const [numRepsInput3, setNumRepsInput3] = useState(null);
    const [weightInput3, setWeightInput3] = useState(null);

    const [nameExercise4, setNameExercise4] = useState(null);
    const [numSetsInput4, setNumSetsInput4] = useState(null);
    const [numRepsInput4, setNumRepsInput4] = useState(null);
    const [weightInput4, setWeightInput4] = useState(null);

    const { user } = UserAuth();

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "workoutName"){
            setWorkoutName(value);
        }
        if(id === "lengthHours"){
            setLengthHours(value);
        }
        if(id === "lengthMinutes"){
            setLengthMinutes(value);
        }
        if(id === "nameExercise1"){             //exercise 1
            setNameExercise1(value);
        }
        if(id === "numSetsInput1"){
            setNumSetsInput1(value);
        }
        if(id === "numRepsInput1"){
            setNumRepsInput1(value);
        }
        if(id === "weightInput1"){
            setWeightInput1(value);
        }
        if(id === "nameExercise2"){             //exercise 2
            setNameExercise2(value);
        }
        if(id === "numSetsInput2"){
            setNumSetsInput2(value);
        }
        if(id === "numRepsInput2"){
            setNumRepsInput2(value);
        }
        if(id === "weightInput2"){
            setWeightInput2(value);
        }
        if(id === "nameExercise3"){             //exercise 3
            setNameExercise3(value);
        }
        if(id === "numSetsInput3"){
            setNumSetsInput3(value);
        }
        if(id === "numRepsInput3"){
            setNumRepsInput3(value);
        }
        if(id === "weightInput3"){
            setWeightInput3(value);
        }
        if(id === "nameExercise4"){             //exercise 4
            setNameExercise4(value);
        }
        if(id === "numSetsInput4"){
            setNumSetsInput4(value);
        }
        if(id === "numRepsInput4"){
            setNumRepsInput4(value);
        }
        if(id === "weightInput4"){
            setWeightInput4(value);
        }
    }

    const handleSubmit = async (e) => {
        let workoutObj = {
            workoutName:workoutName,
            lengthHours:lengthHours,
            lengthMinutes:lengthMinutes,
            nameExercise1:nameExercise1,
            numSetsInput1:numSetsInput1,
            numRepsInput1:numRepsInput1,
            weightInput1:weightInput1,
            nameExercise2:nameExercise2,
            numSetsInput2:numSetsInput2,
            numRepsInput2:numRepsInput2,
            weightInput2:weightInput2,
            nameExercise3:nameExercise3,
            numSetsInput3:numSetsInput3,
            numRepsInput3:numRepsInput3,
            weightInput3:weightInput3,
            nameExercise4:nameExercise4,
            numSetsInput4:numSetsInput4,
            numRepsInput4:numRepsInput4,
            weightInput4:weightInput4,
        }
        e.preventDefault();

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '_' + dd + '_' + yyyy;

        try {
            //creates a collection of workout documents for each user using their uid to name collection
            //date is the name of the document for the workout
            await updateDoc(doc(db, user.uid, today), workoutObj);    //only fails if doc doesn't exist
        } catch {                                                   
            setDoc(doc(db, user.uid, today), workoutObj);
        }

        if(workoutObj) {
            console.log("exists");
        }

        console.log(user.uid);

        console.log(workoutName,lengthHours,lengthMinutes,
            nameExercise1,numSetsInput1,numRepsInput1,weightInput1,
            nameExercise2,numSetsInput2,numRepsInput2,weightInput2,
            nameExercise3,numSetsInput3,numRepsInput3,weightInput3,
            nameExercise4,numSetsInput4,numRepsInput4,weightInput4);
    }

    return (
        <div className="form">
            <div className="form-body">
                <div className="workoutName">
                    <label className="form__label" for="workoutName">Workout Name: </label>
                    <input className="form__input" type="text" id="workoutName" value={workoutName} onChange = {(e) => handleInputChange(e)} placeholder=""/>
                </div>
                {/*Might not need an input field for date of workout and just take a timestamp when form submitted */}
                <div className="workoutLength">
                    <p className="form__text">Length of Workout: </p>

                    <label className="form__label" id="hours" for="lengthHours">Number of Hours: </label>
                    <input className="form__input" type="number" min="0" max="24" id="lengthHours" value={lengthHours} onChange = {(e) => handleInputChange(e)} placeholder=""/>

                    <label className="form__label" id="minutes" for="lengthMinutes">Number of Minutes: </label>
                    <input className="form__input" type="number" min="0" max="59" id="lengthMinutes" value={lengthMinutes} onChange = {(e) => handleInputChange(e)} placeholder=""/>
                </div>
                <div className="Exercise" id="ex1">
                    <p className="form__text">Exercise 1: </p>

                    <label className="form__label" for="nameExercise1">Name of Exercise: </label>
                    <input className="form__input" type="text" id="nameExercise1" value={nameExercise1} onChange = {(e) => handleInputChange(e)} placeholder=""/>

                    <label className="form__label" id="numSets1" for="numSetsInput1">Number of Sets: </label>
                    <input className="form__input" type="number" min="0" id="numSetsInput1" value={numSetsInput1} onChange = {(e) => handleInputChange(e)} placeholder=""/>

                    <label className="form__label" id="numReps1" for="numRepsInput1">Number of Reps per Set: </label>
                    <input className="form__input" type="number" min="0" id="numRepsInput1" value={numRepsInput1} onChange = {(e) => handleInputChange(e)} placeholder=""/>

                    <label className="form__label" for="weightInput1">Weight used: </label>
                    <input className="form__input" type="number" min="0" id="weightInput1" value={weightInput1} onChange = {(e) => handleInputChange(e)} placeholder=""/>
                </div>
                <div className="Exercise" id="ex2">
                    <p className="form__text">Exercise 2: </p>

                    <label className="form__label" for="nameExercise2">Name of Exercise: </label>
                    <input className="form__input" type="text" id="nameExercise2" value={nameExercise2} onChange = {(e) => handleInputChange(e)} placeholder=""/>

                    <label className="form__label" id="numSets2" for="numSetsInput2">Number of Sets: </label>
                    <input className="form__input" type="number" min="0" id="numSetsInput2" value={numSetsInput2} onChange = {(e) => handleInputChange(e)} placeholder=""/>

                    <label className="form__label" id="numReps2" for="numRepsInput2">Number of Reps per Set: </label>
                    <input className="form__input" type="number" min="0" id="numRepsInput2" value={numRepsInput2} onChange = {(e) => handleInputChange(e)} placeholder=""/>

                    <label className="form__label" for="weightInput2">Weight used: </label>
                    <input className="form__input" type="number" min="0" id="weightInput2" value={weightInput2} onChange = {(e) => handleInputChange(e)} placeholder=""/>
                </div>
                <div className="Exercise" id="ex3">
                    <p className="form__text">Exercise 3: </p>

                    <label className="form__label" for="nameExercise3">Name of Exercise: </label>
                    <input className="form__input" type="text" id="nameExercise3" value={nameExercise3} onChange = {(e) => handleInputChange(e)} placeholder=""/>

                    <label className="form__label" id="numSets3" for="numSetsInput3">Number of Sets: </label>
                    <input className="form__input" type="number" min="0" id="numSetsInput3" value={numSetsInput3} onChange = {(e) => handleInputChange(e)} placeholder=""/>

                    <label className="form__label" id="numReps3" for="numRepsInput3">Number of Reps per Set: </label>
                    <input className="form__input" type="number" min="0" id="numRepsInput3" value={numRepsInput3} onChange = {(e) => handleInputChange(e)} placeholder=""/>

                    <label className="form__label" for="weightInput3">Weight used: </label>
                    <input className="form__input" type="number" min="0" id="weightInput3" value={weightInput3} onChange = {(e) => handleInputChange(e)} placeholder=""/>
                </div>
                <div className="Exercise" id="ex4">
                    <p className="form__text">Exercise 4: </p>

                    <label className="form__label" for="nameExercise4">Name of Exercise: </label>
                    <input className="form__input" type="text" id="nameExercise4" value={nameExercise4} onChange = {(e) => handleInputChange(e)} placeholder=""/>

                    <label className="form__label" id="numSets4" for="numSetsInput4">Number of Sets: </label>
                    <input className="form__input" type="number" min="0" id="numSetsInput4" value={numSetsInput4} onChange = {(e) => handleInputChange(e)} placeholder=""/>

                    <label className="form__label" id="numReps4" for="numRepsInput4">Number of Reps per Set: </label>
                    <input className="form__input" type="number" min="0" id="numRepsInput4" value={numRepsInput4} onChange = {(e) => handleInputChange(e)} placeholder=""/>

                    <label className="form__label" for="weightInput4">Weight used: </label>
                    <input className="form__input" type="number" min="0" id="weightInput4" value={weightInput4} onChange = {(e) => handleInputChange(e)} placeholder=""/>
                </div>
            </div>
            <div class="footer">
                <button onClick={ handleSubmit } type="submit" class="btn">Submit Workout</button>
            </div>
      </div>      
    )
}

export default WorkoutForm;