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
      <div className="navHeader">
          <div className="imgContainer">
            <img src="images/barbell.png" alt="barbell" />
          </div>
          <div className="logoContainer">
            <Link className="logo" to="/home">BroncoFit</Link>
          </div>
          <div className="imgContainer">
            <img src="images/barbell.png" alt="barbell" />
          </div>
      </div>

      <div className="navbar">
        
        {/*Button to open sidenav */}
        <div className="menuButtonContainer" onClick={ openNav }>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        {/*Elements in sidenav menu*/}
        <div id="mySidenav" className="sidenav">
          <div className="closebtn" onClick={ closeNav }>&times;</div>
          <a href='/home'>Home</a>
          <a href='/profile'>Profile</a>
          <a href='/chatpage'>Chatpage</a>
          <a href='/workout'>Workout</a>
        </div>
        

        <div className="navButtons">
          {user?.displayName ? (
            <div className="buttons">
              <button className="logoutButton" onClick={ handleSignOut }>Logout</button>
              <a className="profileButton" href='/profile'>
                <div className="imgContainer">
                  <img src={user.photoURL} alt="userphoto" referrerPolicy="no-referrer" />
                </div>
              </a>
              <span className="username">{user.displayName}</span>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;