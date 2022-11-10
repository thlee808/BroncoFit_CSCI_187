import React from 'react';
import { UserAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = UserAuth();


  return (
    <div className='w-[300px] m-auto'>
      <h1 className='text-center text-2xl font-bold pt-12'>Profile</h1>
      <div>
        <p>Welcome, {user?.displayName}</p>
      </div>
    </div>
  );
};

export default Profile;
