import React from 'react'
import UserList from "../components/UserList";
import Chat from "../components/Chat";

const ChatPage = () => {
    return (
        <div className="chatpage">
            <div className="chatContainer">
                <UserList></UserList>
                <Chat></Chat>
            </div>
        </div>
    )
}

export default ChatPage