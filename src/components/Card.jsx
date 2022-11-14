import React from 'react';

const Card = ({post}) => {
    return (
        <div className="card">
            <span className="title">{post.title}</span><br />
            <span className="user">{post.user}</span>
            <img src={post.img} alt="" className="img" />
            <form className="commentBox">
                <label className="desc" for="fname">Leave a comment: </label><br />
                <input className="textBox" type="text" id="fname" name="fname"></input><br />
                <input className="submitButton" type="submit" value="Submit"></input>
            </form>
        </div>
    );
};

export default Card;