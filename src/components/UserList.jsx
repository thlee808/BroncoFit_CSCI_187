import React from 'react'
import Search from "./Search";
import Chats from "./Chats";

const UserList = () => {
  return (
    <div className='userlist'>
      <Search></Search>
      <Chats></Chats>
    </div>
  )
}

export default UserList