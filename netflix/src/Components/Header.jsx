import {React } from 'react'

const Header =()=>{


    return(
       <div className='w-full bg-black p-3 my-4 '>
        <div className='flex justify-between'>
            <div className='flex items-center'>
            <p className='mx-5 text-2xl font-bold text-red-500'>Netflix</p>
            <p className='mx-2 text-sm text-gray-200'>Home</p>
            <p className='mx-2 text-sm text-gray-200'>Movies</p>
            <p className='mx-2 text-sm text-gray-200'>Recently Added</p>
            <p className='mx-2 text-sm text-gray-200'>My list</p>


            </div>
            <div className='flex pr-56 items-center'>
            <i className=" mx-3 fa-solid fa-magnifying-glass text-xl text-gray-200 " ></i>

            <p className='mx-3 text-sm text-gray-200'>Kids</p>
            <p className='mx-3 text-sm text-gray-200'>DVD</p>

            <i className="mx-3  fa-solid fa-gift text-xl text-gray-200 " ></i>
            <i className="mx-3  fa-solid fa-bell text-xl text-gray-200" ></i>
            </div>
        </div>
       </div>
    )
}


export default Header;