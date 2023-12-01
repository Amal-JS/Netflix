
import Display from './Display';
import { React, useState, useEffect } from 'react'
import { baseUrl } from '../API/api'
import axios from 'axios'

const Row = ({ moviesType, genre }) => {

    const [movies, setMovies] = useState([])


    //called on component mounting
    useEffect(() => {

        axios.get(baseUrl + genre).then(res => {
            const fetchedData = res.data.results
            //only getting the 10 movies on the each genre
            //setting the array of objects to the movies state
            setMovies(fetchedData.slice(1, 10))
        })
            .catch(err => console.log(err))


    }, [])

    return (



        <div className='w-full h-full '>
            <p className='text-2xl text-gray-200 px-12 mt-3'>{moviesType} Movies</p>
            <div className='w-full p-3 bg-black m-2 flex flex-wrap '>

                {
                    movies.map(data => {
                        
                        
                                        // passing the image url and movie id 
                        return <Display movieImgUrl={data.backdrop_path} key={data.id} movieId={data.id} />

                    })
                }


            </div>


        </div>
    )
}


export default Row;




