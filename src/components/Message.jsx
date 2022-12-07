import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { UserAuth } from '../context/AuthContext';
import { auth } from '../firebase'

const Message = ({ message }) => {

  console.log(message);

  const { user } = UserAuth(auth);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === user.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === user.uid
              ? user.photoURL
              : data.user.photoURL
          }
          alt=""
          referrerPolicy="no-referrer"
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" referrerPolicy="no-referrer"/>}
      </div>
    </div>
  );
};

export default Message;