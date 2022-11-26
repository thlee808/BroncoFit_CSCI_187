import React from 'react'

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...'/>
      <div className="send">
        <img src="images/default_profile_pic.jpg" alt="user_photo" />
        <input type="file" style={{display: "none"}} id="file" />
        <label htmlFor="file">
          <img src="images/default_profile_pic.jpg" alt="user_photo" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input