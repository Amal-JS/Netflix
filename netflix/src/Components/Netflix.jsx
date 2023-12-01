import {React, useState} from 'react'
import Footer from './Footer'
import Header from './Header'
import Row from './Row'
import {action,comedy,horror,animation} from '../API/url'

const Netflix =()=>{

  

    // async function call () {
    //     const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`;

    //     const get = await fetch(apiUrl)
    //     const json = await get.json()

    //     set(json.results[0].key)
    // }



    // call()
    


    return(
        <div >


        <Header />
      
        <div className=' m-5'>

        <Row moviesType={'Action'} genre={action}/>
        <Row moviesType={'Comedy'} genre={comedy}/>
        <Row moviesType={'Horror'} genre={horror}/>
        <Row moviesType={'Animation'} genre={animation}/>

        
        </div>
        <Footer />


        

        </div>
    )
}


export default Netflix;