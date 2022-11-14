import React, { useContext } from 'react';
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div class="navHeader">
          <div class="imgContainer">
            <img src="images/barbell.png" alt="barbell" />
          </div>
          <div class="logoContainer">
            <a href='/home'>
              <h1 class="logo">BroncoFit</h1>
            </a>
          </div>
          <div class="imgContainer">
            <img src="images/barbell.png" alt="barbell" />
          </div>
      </div>

      <div class="navContainer">
        <div class="menu">
          <h1>Menu</h1>
        </div>

        <div class="navButtons">
          {user?.displayName ? (
            <div class="buttons">
              <button class="logoutButton" onClick={ handleSignOut }>Logout</button>
              <a class="profileButton" href='/profile'>
                <div className="imgContainer">
                  <img src="images/default_profile_pic.jpg" alt="userphoto" />
                </div>
              </a>
              <span className="username">{user.displayName}</span>
            </div>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;