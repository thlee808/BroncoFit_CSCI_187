import React from 'react'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
        <div className="chatInfo">
            <span>John Doe</span>
            <div className="chatIcons">
                <img src="images/default_profile_pic.jpg" alt="" />
                <img src="images/default_profile_pic.jpg" alt="" />
                <img src="images/default_profile_pic.jpg" alt="" />
            </div>
        </div>
        <Messages></Messages>
        <Input></Input>
    </div>
  )
}

export default Chat;