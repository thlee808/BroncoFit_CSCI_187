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

    const [exercises, setExercise] = useState([{
        name:"",
        sets:0,
        reps:0,
        weight:0,
    }]);

    const { user } = UserAuth();

    const handleInputChange = (index, e, selected) => {
        const {id , value} = e.target;
        if(selected === "workoutName"){
            setWorkoutName(value);
        }
        else if(selected === "lengthHours"){
            setLengthHours(value);
        }
        else if(selected === "lengthMinutes"){
            setLengthMinutes(value);
        }
        else {
            let temp = [...exercises];
            temp[index][selected] = e.target.value;
            setExercise(temp);
        }
    }

    const handleNewRow = () => {
        setExercise([...exercises,{
            name:"",
            sets:0,
            reps:0,
            weight:0,
        }])
    }

    const handleRemoveRow = () => {
        setExercise([...exercises.slice(0, -1)
        ]);
    }

    const handleSubmit = async (e) => {
        let workoutObj = {
            workoutName:workoutName,
            lengthHours:lengthHours,
            lengthMinutes:lengthMinutes,
        }
        for (let i in exercises) {
            workoutObj["exercise" + i] = exercises[i];
        }
        console.log(workoutObj);
        e.preventDefault();

        //generate date for document title
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
    }

    return (
        <form className="form">
            <div className="form-body">
                <div className="workoutName">
                    <label className="form__label" for="workoutName">Workout Name: </label>
                    <input className="form__input" type="text" id="workoutName" value={workoutName} onChange = {(e) => handleInputChange(0, e, "workoutName")} placeholder="Chest, Back, Legs, etc..."/>
                </div>
                {/*Might not need an input field for date of workout and just take a timestamp when form submitted */}
                <div className="workoutLength">
                    <p className="form__text">Length of Workout: </p>

                    <label className="form__label" id="hours" for="lengthHours">Number of Hours: </label>
                    <input className="form__input" type="number" min="0" max="24" id="lengthHours" value={lengthHours} onChange = {(e) => handleInputChange(0, e, "lengthHours")} placeholder=""/>

                    <label className="form__label" id="minutes" for="lengthMinutes">Number of Minutes: </label>
                    <input className="form__input" type="number" min="0" max="59" id="lengthMinutes" value={lengthMinutes} onChange = {(e) => handleInputChange(0, e, "lengthMinutes")} placeholder=""/>
                </div>
                {
                    exercises.map((details, index) => (
                        <>
                        <div className="Exercise" id="ex1">
                            <p className="form__text">Exercise {index + 1}: </p>

                            <label className="form__label" for="nameExercise1">Name of Exercise: </label>
                            <input className="form__input" type="text" id="nameExercise1" value={details.name} onChange = {(e) => handleInputChange(index, e, "name")} placeholder=""/>

                            <label className="form__label" id="numSets1" for="numSetsInput1">Number of Sets: </label>
                            <input className="form__input" type="number" min="0" id="numSetsInput1" value={details.sets} onChange = {(e) => handleInputChange(index, e, "sets")} placeholder=""/>

                            <label className="form__label" id="numReps1" for="numRepsInput1">Number of Reps per Set: </label>
                            <input className="form__input" type="number" min="0" id="numRepsInput1" value={details.reps} onChange = {(e) => handleInputChange(index, e, "reps")} placeholder=""/>

                            <label className="form__label" for="weightInput1">Weight used: </label>
                            <input className="form__input" type="number" min="0" id="weightInput1" value={details.weight} onChange = {(e) => handleInputChange(index, e, "weight")} placeholder=""/>
                            
                        </div>
                </>
                ))}
                <div className="buttonContainer">
                    <div className="rowButton skyblue" onClick={ handleNewRow }>Add new exercise</div>
                    <div className="rowButton red" onClick={ handleRemoveRow }>Remove last row</div>
                </div>
            </div>
            <div class="footer">
                <button onClick={ handleSubmit } type="submit" class="btn">Submit Workout</button>
            </div>
      </form>      
    )
}

export default WorkoutForm;