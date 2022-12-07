import React from 'react';
import Card from '../components/Card';
import { posts } from "../data";
import YoutubeEmbed from "../context/YoutubeEmbed";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="feedContainer">
        <h1>BroncoFit Feed</h1>
          <h2>Recommended Workouts</h2>
            <h3>Videos</h3>
              <div className="Videos">
                <h1>Warmups for you:</h1>
                  <h1>5 min warmup</h1>
                    <YoutubeEmbed embedId="CSrBaHX3HxQ" />
                  <h1>Warmup Infographics</h1>
                    <Card post={posts[3]} />
                    <Card post={posts[4]} />
                  <h1>10 min warmup</h1>
                    <YoutubeEmbed embedId="awBQVJ39sKM" />
                  <h1>15 min warmup</h1>
                    <YoutubeEmbed embedId="E23w7vmidHE" />
                <h1>Deadlift for you:</h1>
                <h1>Proper form for doing Deadlifts</h1>
                <Card post={posts[0]} />
                  <h1>Basics</h1>
                    <YoutubeEmbed embedId="vRKDvt695pg" />
                  <h1>Growth</h1>
                    <YoutubeEmbed embedId="ytGaGIn3SjE" />
                  <h1>Perfect your Form</h1>
                    <YoutubeEmbed embedId="r4MzxtBKyNE" />
                  <h1>How much weight?</h1>
                    <YoutubeEmbed embedId="_5z6j-AE17E" />
                <h1>Squats for you:</h1>
                  <h1>Proper form for doing Squats</h1>
                    <Card post={posts[1]} />
                  <h1>Basics</h1>
                    <YoutubeEmbed embedId="sPej2dr2J5s" />
                  <h1>Squat with Dumbell</h1>
                    <YoutubeEmbed embedId="3PRwtVpyslo" />
                  <h1>Use a Squat Rack</h1>
                    <YoutubeEmbed embedId="kaO7Yw1hlcM" />
                <h1>Bench for you:</h1>
                  <h1>Proper form for doing Bench</h1>
                    <Card post={posts[2]} />
                  <h1>Tutorial and Proper Form</h1>
                    <YoutubeEmbed embedId="gRVjAtPip0Y" />
                  <h1>Benching Checklist</h1>
                    <YoutubeEmbed embedId="vthMCtgVtFw" />
                  <h1>Growth</h1>
                    <YoutubeEmbed embedId="vcBig73ojpE" />
                <h1>Free Weights for you:</h1>
                  <h1>Dumbell Exercises Infographics</h1>
                    <Card post={posts[5]} />
                    <Card post={posts[6]} />
                  <h1>How to use</h1>
                    <YoutubeEmbed embedId="KUJSm4DznM8" />
                  <h1>8 Dumbell Exercises</h1>
                    <YoutubeEmbed embedId="y1r9toPQNkM" />
                  <h1>Example Dumbell Workout</h1>
                    <YoutubeEmbed embedId="y1r9toPQNkM" />
                <h1>Cardio for you:</h1>
                  <h1>30 min HIIT Cardio</h1>
                    <YoutubeEmbed embedId="6uLRtubw3ws" />
                  <h1>Cardio vs. Strength</h1>
                    <YoutubeEmbed embedId="YvrKIQ_Tbsk" />
            </div>
      </div>
    </div>
  )
}

export default Home;