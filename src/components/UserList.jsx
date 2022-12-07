import React from 'react'
import Search from "./Search";
import Chats from "./Chats";

const UserList = () => {
  return (
    <div className='userlist'>
      <div className='headerContainer'>
        <span className='logo'>BroncoFit Chat</span>
      </div>
      <Search></Search>
      <Chats></Chats>
    </div>
  )
}

export default UserList