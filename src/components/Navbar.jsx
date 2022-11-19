import React, { useContext } from 'react';
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { UserAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';


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
            <Link className="logo" to="/home">BroncoFit</Link>
          </div>
          <div class="imgContainer">
            <img src="images/barbell.png" alt="barbell" />
          </div>
      </div>

      <div class="navContainer">
        <Sidebar></Sidebar>
        <div class="navButtons">
          {user?.displayName ? (
            <div class="buttons">
              <button class="logoutButton" onClick={ handleSignOut }>Logout</button>
              <a class="profileButton" href='/profile'>
                <div className="imgContainer">
                  <img src={user.photoURL} alt="userphoto" />
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