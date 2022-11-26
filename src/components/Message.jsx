import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  return (
    <div className={`message owner`}>
      <div className="messageInfo">
        <img src="images/default_profile_pic.jpg" alt="user_photo" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Test Message</p>
        <img src="images/default_profile_pic.jpg" alt="user_photo" />
      </div>
    </div>
  );
};

export default Message;