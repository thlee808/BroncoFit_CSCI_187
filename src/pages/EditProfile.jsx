import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { useState } from "react";
import { storage } from "../firebase";
import db from "../firebase";
import { doc, setDoc, updateDoc } from "firebase/firestore"; 
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const EditProfile = () => {

  
  const getInitialState = () => {
    const userGender = "Not Specified";
    return userGender;
  };
  
  const { user } = UserAuth();
  const [userWeight, setUserWeight] = useState("");
  const [userHeight, setUserHeight] = useState("");
  const [userLift, setUserLift] = useState("");
  const [userSquat, setUserSquat] = useState("");
  const [userGender, setUserGender] = useState(getInitialState);

  let [update, setUpdate] = React.useState(false);

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpdate = () => {
    setUpdate(update = true);
  };

  const submitHeight = async (e) => {
    handleUpdate();
    e.preventDefault();
    const data = {
      Height: userHeight,
    };
    setUserHeight("");
    try {
    await updateDoc(doc(db, "users", user.uid), data);
    } catch {
      setDoc(doc(db, "users", user.uid), data);
    }
  }
  
  const submitGender = async (e) => {
    console.log(userGender);
    handleUpdate();
    e.preventDefault();
    const data = {
      Gender: userGender,
    };
    setUserGender("");
    try {
    await updateDoc(doc(db, "users", user.uid), data);
    } catch {
      setDoc(doc(db, "users", user.uid), data);
    }
  }

  const submitWeight = async (e) => {
    handleUpdate();
    e.preventDefault();
    const data = {
      Weight: userWeight,
    };
    setUserWeight("");
    try {
    await updateDoc(doc(db, "users", user.uid), data);
    } catch {
      updateDoc(doc(db, "users", user.uid), data);
    }
  }

  const submitLift = async (e) => {
    handleUpdate();
    e.preventDefault();
    const data = {
      Lift: userLift,
    };
    setUserLift("");
    try {
    await updateDoc(doc(db, "users", user.uid), data);
    } catch {
      updateDoc(doc(db, "users", user.uid), data);
    }
  }

  const submitSquat = async (e) => {
    handleUpdate();
    e.preventDefault();
    const data = {
      Squat: userSquat,
    };
    setUserSquat("");
    try {
    await updateDoc(doc(db, "users", user.uid), data);
    } catch {
      updateDoc(doc(db, "users", user.uid), data);
    }
  }

  const genderChange = (e) => {
    setUserGender(e.target.value);
  };

  const handleSubmit = () => {
    const imageRef = ref(storage, "image");
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className='profileContainer'>
      <nav class="navbar">
        <div className="header">
          <h3>Editing Your Profile</h3>
        </div>
      </nav>
      <div>
        <p>{user?.displayName}</p>
        <div className="imgContainer">
             <img src={user.photoURL} alt="userphoto" referrerPolicy="no-referrer"/>
        </div>
        <p>Change profile picture:</p>
      </div>
      <div className="App">
      <img src={url} sx={{ width: 150, height: 150 }} />
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
    <p>Update Gender:</p>
    <div>
      <select value={userGender} onChange = {genderChange} >  
        <option value="Not Specified"> Not Specified </option>  
        <option value="Male"> Male </option>  
        <option value="Female"> Female </option>  
        <option value="Other"> Other </option>   
      </select>  
      <button onClick={submitGender}>Submit</button>
      </div>

    <p>Update height and weight:</p>
    <div className="HeightForm">
        <input
          type="text"
          placeholder="Height"
          value={userHeight}
          onChange={(e) => setUserHeight(e.target.value)}
        />
                <button onClick={submitHeight}>Submit</button>
        </div>
        <div className="WeightForm">

        <input
          type="text"
          placeholder="Weight"
          value={userWeight}
          onChange={(e) => setUserWeight(e.target.value)}
        />
        <button onClick={submitWeight}>Submit</button>
      </div>
      <p>Update Personal Bests:</p>
      <div className="LiftForm">
        <input
          type="text"
          placeholder="Deadlift"
          value={userLift}
          onChange={(e) => setUserLift(e.target.value)}
        />
                <button onClick={submitLift}>Submit</button>
        </div>
        <div className="SquatForm">
        <input
          type="text"
          placeholder="Squats"
          value={userSquat}
          onChange={(e) => setUserSquat(e.target.value)}
        />
                <button onClick={submitSquat}>Submit</button>
        </div>
      <div className="success">
      <p >{ update? ("Profile Successfully Updated") : "" }</p>
      </div>
    </div>
  );
};

export default EditProfile;
