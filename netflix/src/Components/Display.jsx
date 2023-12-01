import {React ,useState} from 'react'
import {imageUrl} from '../API/api'
import './Display.css'
import YouTubePlay from './YoutubePlay';
const Display = ({ movieImgUrl, movieId }) => {
    const [playVideo, setPlayVideo] = useState(false);
  
    const handlePlayVideo = () => setPlayVideo(true);
    const handleStopVideo = () => setPlayVideo(false);
  
    return (
      <div
        className='p-3 bg-black m-2 w-72 relative'
        onMouseLeave={handleStopVideo}
        onClick={handlePlayVideo}
      >
        <img className='rounded h-56 w-72' src={`${imageUrl}/${movieImgUrl}`} alt="Movie Poster" />
        
        {playVideo && <YouTubePlay movieId={movieId} onStopVideo={handleStopVideo} />}
      </div>
    );
  };
  
  export default Display;