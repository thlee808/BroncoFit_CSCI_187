import React from 'react';
import Card from '../components/Card';
import { posts } from "../data";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="feedContainer">
        <h1>BroncoFit Feed</h1>
        {posts.map(post => (
          <Card key={post.id} post={post} />
        ))}
      </div>
      <div className="recommendationContainer">
        Recommended users
        <img className="pcard" src="images/default_profile_pic.jpg" alt="userphoto" />
        <img className="pcard" src="images/default_profile_pic.jpg" alt="userphoto" />
        <img className="pcard" src="images/default_profile_pic.jpg" alt="userphoto" />
      </div>
    </div>
  )
}

export default Home;