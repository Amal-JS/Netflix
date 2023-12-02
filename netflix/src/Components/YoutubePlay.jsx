import React, { useState ,useEffect } from 'react';
//library to play youtube video
import YouTube from 'react-youtube';
import {API_KEY} from '../API/api'

   
const YouTubePlay = ({movieId,onStopVideo}) => {

    //state to hold video id
    const [videoId,setVideoId] = useState('')

useEffect(()=>{

    async function dataCall () {
        const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`;
        
        const data = await fetch(apiUrl)
        const json = await data.json()
        setVideoId(json.results[0].key)
        
    }

    dataCall()


}, [movieId])
   
    

const opts = {
    height: '500',
    width: '700',
    playerVars: {
      
      autoplay: 1,
    }
   
}


  return (
    <div  className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5' style={{ zIndex: 9999 }} onMouseLeave={onStopVideo}>
     
      <YouTube videoId={videoId} opts={opts}  />
    </div>
  );
};

export default YouTubePlay;
