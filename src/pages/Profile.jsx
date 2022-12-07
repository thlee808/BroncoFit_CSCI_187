import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { collection, doc, getDoc } from "firebase/firestore";
import db from "../firebase";

const Profile = () => {
  const { user } = UserAuth();
  const [open, setOpen] = React.useState(false);
  const [ans, setAns] = React.useState("", "");
  const [gotData, setGotData] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  async function getData() {
    if(!gotData){
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()      ) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
    setGotData(true);
    return docSnap;
  } 
  }
  getData().then(result => { setAns(result.data()) } );




  return (
    <div class='profileContainer'>
       <nav class="navbar">
        <div className="header">
          <h3>Your Profile</h3>
        </div>
      </nav>
      <div>
        <p>Welcome, {user?.displayName}</p>
      </div>
      <div>
        <p>@{ans?.username}</p>
      </div>
      <div className="imgContainer">
                  <img src={ans? ans.photoURL : user.photoURL} alt="userphoto" referrerPolicy="no-referrer"/>
                </div>
      <h1 className='text-center text-2xl font-bold pt-12'>Personal Details</h1>
      <div>
        <p>Gender: { ans? (ans.Gender) : "Not yet set"}</p>
        <p>Height: { ans? (ans.Height) : "Not yet set"}</p>
        <p>Weight: { ans? (ans.Weight) : "Not yet set" }</p>
      </div>
      <h1 className='text-center text-2xl font-bold pt-12'>Personal Bests</h1>
      <div>
        <p>Deadlift: { ans? (ans.Lift) : "Not yet set"}</p>
        <p>Squats: { ans? (ans.Squat) : "Not yet set" }</p>
        <p>Bench: { ans? (ans.Bench) : "Not yet set" }</p>
      </div>
      {/*
      <h1 className='text-center text-2xl font-bold pt-12'>Interests</h1>
      
       <div>
      <button onClick={handleOpen}>Show All Interests</button>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button>Interest 1</button>
          </li>
          <li className="menu-item">
            <button>Interest 2</button>
          </li>
        </ul>
      ) : null}
    </div>
      */}
      <a href="/EditProfile">Edit Profile</a>
    </div>
  );
};

export default Profile;
