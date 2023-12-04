import {React, useState} from 'react'
import Footer from './Footer'
import Header from './Header'
import Row from './Row'
//urls for getting the movie data
import {action,comedy,horror,animation} from '../API/url'

const Netflix =()=>{

    return(
        <div >
            {/* header component */}
        <Header />
      
        <div className=' m-3'>

        <Row moviesType={'Action'} genre={action}/>
        <Row moviesType={'Comedy'} genre={comedy}/>
        <Row moviesType={'Horror'} genre={horror}/>
        <Row moviesType={'Animation'} genre={animation}/>

        
        </div>
        {/* footer component */}
        <Footer />

        </div>
    )
}


export default Netflix;