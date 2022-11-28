import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { useState } from "react";
import { storage } from "../firebase";
import db from "../firebase";
import { doc, setDoc, updateDoc } from "firebase/firestore"; 
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const EditProfile = () => {
  const { user } = UserAuth();

  const [userWeight, setUserWeight] = useState("");
  const [userHeight, setUserHeight] = useState("");

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    const data = {
      Height: userHeight,
      Weight: userWeight,
    };
    setUserHeight("");
    setUserWeight("");
    await updateDoc(doc(db, "users", user.uid), data);
  }


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
    <div className='w-[300px] m-auto'>
      <h1 className='text-center text-2xl font-bold pt-12'>Your Profile</h1>
      <div>
        <p>{user?.displayName}</p>
        <p>Change profile picture:</p>
      </div>
      <div className="App">
      <img src={url} sx={{ width: 150, height: 150 }} />
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
    <div className="App__form">
        <input
          type="text"
          placeholder="Height"
          value={userHeight}
          onChange={(e) => setUserHeight(e.target.value)}
        />
        <input
          type="text"
          placeholder="Weight"
          value={userWeight}
          onChange={(e) => setUserWeight(e.target.value)}
        />
        <button onClick={submit}>Submit</button>
      </div>

    </div>
  );
};

export default EditProfile;
