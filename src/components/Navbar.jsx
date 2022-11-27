import React, { useContext } from 'react';
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { UserAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { user, logOut } = UserAuth(auth);

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  //shows the sideNav menu by changing the value of the sideNav's width
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "200px";
  }

  //close sideNav by setting width value back to 0
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0px";
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
        
        {/*Button to open sidenav */}
        <div class="menuButtonContainer" onClick={ openNav }>
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>

        {/*Elements in sidenav menu*/}
        <div id="mySidenav" class="sidenav">
          <div class="closebtn" onClick={ closeNav }>&times;</div>
          <a href='/home'>Home</a>
          <a href='/profile'>Profile</a>
          <a href='/chatpage'>Chatpage</a>
          <a href='/workout'>Workout</a>
        </div>
        

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