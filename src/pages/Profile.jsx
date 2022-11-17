import React from 'react';
import { UserAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = UserAuth();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className='w-[300px] m-auto'>
      <h1 className='text-center text-2xl font-bold pt-12'>Your Profile</h1>
      <div>
        <p>Welcome, {user?.displayName}</p>
      </div>
      <img src={'images/default_profile_pic.jpg'}></img>
      <h1 className='text-center text-2xl font-bold pt-12'>Personal Details</h1>
      <div>
        <p>Height:</p>
        <p>Weight:</p>
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
