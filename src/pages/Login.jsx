import React from 'react'
import { UserAuth } from "../context/AuthContext";
import { GoogleButton } from "react-google-button";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

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
  
    useEffect(() => {
      if (user != null) {
        navigate('/home');
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