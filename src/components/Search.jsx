import React from 'react'

const Search = () => {
  return (
    <div className="search">
        <div className="searchForm">
            <input type="text" placeholder='Find a user...'/>
        </div>
        <div className="userChat">
            <img src="images/default_profile_pic.jpg" alt="user_photo" />
            <div className="userChatInfo">
                <span>John Doe</span>
            </div>
        </div>
    </div>
  )
}

export default Search