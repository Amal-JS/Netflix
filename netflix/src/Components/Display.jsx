import {React ,useState} from 'react'

// for playing the youtube video

import './Display.css'

const Display = ({ movieImgUrl, movieId }) => {

    // on click open the video 
    const [playVideo, setPlayVideo] = useState(false);
    //play the video on click
    const handlePlayVideo = () => setPlayVideo(true);
    //stop the video on mouseleave
    const handleStopVideo = () => setPlayVideo(false);
  
    return (
      <div
        className=' bg-black  grow-on-hover w-10/1 '
        //stop video
        onMouseLeave={handleStopVideo}
        //play video
        onClick={handlePlayVideo}
      >
        {/* image url + image path */}
        <img className='rounded h-56 w-72' src={`${imageUrl}/${movieImgUrl}`} alt="Movie Poster" />
        {/* when click return the youtube play content */}
        {/* passing the movieId with video stoping function */}
        {playVideo && <YouTubePlay movieId={movieId} onStopVideo={handleStopVideo} />}
      </div>
    );
  };
  
  export default Display;