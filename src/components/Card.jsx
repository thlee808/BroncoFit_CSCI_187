import React from 'react';

const Card = ({post}) => {
    return (
        <div className="card">
            <span className="title">{post.title}</span><br />
            <span className="user">{post.user}</span>
            <img src={post.img} alt="" className="img" />
        </div>
    );
};

export default Card;