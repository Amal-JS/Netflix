import React, { useState ,useEffect } from 'react';
import YouTube from 'react-youtube';
import {API_KEY} from '../API/api'

   
const YouTubePlay = ({movieId,onStopVideo}) => {

    const [videoId,setVideoId] = useState('')

useEffect(()=>{

    async function call () {
        const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`;
            
        const get = await fetch(apiUrl)
        const json = await get.json()
        setVideoId(json.results[0].key)
        
    }

    call()


}, [movieId])
   
    

const opts = {
    height: '500',
    width: '700',
    playerVars: {
      
      autoplay: 1,
    }
   
}
// style={{height:'400px',width:'700px'}}



  return (
    <div  className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5' style={{ zIndex: 9999 }} onMouseLeave={onStopVideo}>
      <YouTube videoId={videoId} opts={opts}  />
    </div>
  );
};

export default YouTubePlay;
