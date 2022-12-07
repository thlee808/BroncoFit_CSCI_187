import React from 'react'
import { UserAuth } from "../context/AuthContext";
import { GoogleButton } from "react-google-button";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {
  getRedirectResult,
  getAdditionalUserInfo,
} from "firebase/auth";
import { collection, doc, setDoc, query, where, getDocs, get } from "firebase/firestore"; 
import { auth, db } from "../firebase";
import { nouns } from "../nouns";
import { adjectives } from "../adjectives";

const Login = () => {

    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();
  
    const handleGoogleSignIn = async () => {
      try {
        await googleSignIn();
      } catch (error) {
        console.log(error);
      }
    };
  
    
    function generateUsername() {
      let username = "";

      username += adjectives[Math.floor(Math.random() * adjectives.length)];
      username += nouns[Math.floor(Math.random() * nouns.length)];
      return username;
    }

    useEffect(() => {
      if (user != null){
        navigate('/home');
        getRedirectResult(auth)
        .then((res)=>{
          if(res!=null){
            const details = getAdditionalUserInfo(res);
            if (details.isNewUser){
              console.log("isnewuser");


              const displayName = res.user.displayName;
              const email = res.user.email;
              const photoURL = res.user.photoURL;

              setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                username: res.user.uid,
                displayName,
                email,
                photoURL,
                createdAt: new Date()
              });




              navigate('/editprofile');
              setDoc(doc(db, "userChats", res.user.uid), {});
              alert("Please add profile information as a new user!");
            }
          }
        })
      }
    }, [user]);


    return (
        <div className="formContainer">
            <div className="formWrapper">
                <div className="title">
                    <span className="header-1">SIGN IN</span>
                    <span className="header-2">To</span>
                    <span className="logo">BroncoFit</span>
                </div>
                <div>
                    <GoogleButton onClick={handleGoogleSignIn}></GoogleButton>
                </div>
                <div className="title">
                    <span className="header-3">(Please use your school email!)</span>
                </div>
            </div>
        </div>
    );
};

export default Login;