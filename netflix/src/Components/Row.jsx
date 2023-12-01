
import Display from './Display';
import {React, useState , useEffect } from 'react'
import {baseUrl} from '../API/api'
import axios from 'axios'

const Row =({moviesType,genre})=>{

    const [movies,setMovies] = useState([])
    
        useEffect(()=>{

            axios.get(baseUrl+genre).then(res=>{
                const fetchedData =res.data.results
                setMovies(fetchedData.slice(1,10))
            })
            .catch(err=>console.log(err))
    
    
        },[])

    return(

        

<div className='w-full h-full '>
<p className='text-2xl text-gray-200 px-12 mt-3'>{moviesType} Movies</p>
<div className='w-full p-3 bg-black m-2 flex flex-wrap '>

{
    movies.map(data=>{
        console.log(data.id)
        
        return <Display movieImgUrl={data.backdrop_path} key={data.id} movieId={data.id}/>
       
    })
}


</div>


</div>
    )
}


export default Row;




