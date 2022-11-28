import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { collection, doc, getDoc } from "firebase/firestore";
import db from "../firebase";

const Profile = () => {
  const { user } = UserAuth();
  const [open, setOpen] = React.useState(false);
  const [ans, setAns] = React.useState("", "");

  const handleOpen = () => {
    setOpen(!open);
  };

  async function getData() {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      //console.log("Document data:", docSnap.data());
    } else {
      //console.log("No such document!");
    }
    return docSnap;
  }


  getData().then(result => { setAns(result.data()) } );



  return (
    <div class='profileContainer'>
      <h1 className='text-center text-2xl font-bold pt-12'>Your Profile</h1>
      <div>
        <p>Welcome, {user?.displayName}</p>
      </div>
      <div className="imgContainer">
                  <img src={user.photoURL} alt="userphoto" referrerPolicy="no-referrer"/>
                </div>
      <h1 className='text-center text-2xl font-bold pt-12'>Personal Details</h1>
      <div>
        <p>Height: { ans.Height? (ans.Height) : "Not yet set"}</p>
        <p>Weight: { ans.Weight? (ans.Weight) : "Not yet set" }</p>
      </div>
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
      <a href="/EditProfile">Edit Profile</a>
    </div>
  );
};

export default Profile;
