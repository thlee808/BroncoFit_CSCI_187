import React, { useContext } from 'react'
import Messages from './Messages'
import Input from './Input'
import { UserAuth } from '../context/AuthContext';
import { auth } from '../firebase'
import userEvent from '@testing-library/user-event';
import { ChatContext } from "../context/ChatContext";

const Chat = () => {

  const { data } = useContext(ChatContext);


  return (
    <div className='chat'>
        <div className="chatInfo">
            <span>{data.user?.displayName}</span>
            <div className="chatIcons">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>
        <Messages></Messages>
        <Input></Input>
    </div>
  )
}

export default Chat;