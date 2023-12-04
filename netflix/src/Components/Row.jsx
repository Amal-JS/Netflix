
import { React, useState, useEffect } from 'react'
import { baseUrl } from '../API/api'
import axios from 'axios'
import './Row.css'
import {API_KEY} from '../API/api'
import {imageUrl} from '../API/api'
//library to play youtube video
import YouTube from 'react-youtube';



const opts = {
    height: '400',
    width: '1920',
    playerVars: {
      
      autoplay: 1,
    }
}



const Row = ({ moviesType, genre }) => {

    const [movies, setMovies] = useState([])

    // on click open the video 
    const [playVideo, setPlayVideo] = useState(false);
    //play the video on click
    const handlePlayVideo = () => setPlayVideo(true);
    //stop the video on mouseleave
    const handleStopVideo = () => setPlayVideo(false);
    //video id
    const [videoId,setVideoId] = useState(0)



    

    //called on component mounting
    useEffect(() => {

        axios.get(baseUrl + genre).then(res => {
            const fetchedData = res.data.results
            //only getting the 10 movies on the each genre
            //setting the array of objects to the movies state
            setMovies(fetchedData)
        })
            .catch(err => console.log(err))


    }, [])


    const handleOnClick =(id)=>{
        
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
        .then((response)=>{

            setVideoId(response.data.results[0].key)
            console.log(response.data.results[0].key)
            setPlayVideo(true)
        })
        .catch((err)=>{
          console.log(err)
        }
        )
        
    }

    
    



    return (



        <div className=' '>
            <p className='text-2xl text-gray-200 px-12 mt-3'>{moviesType} Movies</p>
            <div className=' p-3 bg-black m-2    flex  overflow-x-scroll posters' style={{width:'4000px'}}>

                {
                    movies.map(data => {
                        
                        
                                        // passing the image url and movie id 
                        return (

                            <div
                             key={data.id}
                             className=' bg-black  grow-on-hover  mx-2 w-vh'
                            //play video
                            onClick={()=>{
                                handleOnClick(data.id)
                            }} >

                            {/* image url + image path */}
                            <img className='rounded h-56 w-72' src={`${imageUrl}/${data.backdrop_path}`} alt="Movie Poster" />
                            </div> ) })}


                            </div>

                            { playVideo && (

                                <div className='w-100vh bg-white' style={{height:'400px'}}
                                //stop video
                                onMouseLeave={handleStopVideo}>
                                
                                <YouTube videoId={videoId} opts={opts}  />
                                </div>
                            )}

            
            

        </div>
    )
}


export default Row;




