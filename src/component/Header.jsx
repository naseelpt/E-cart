
import React, { useState } from 'react'

import { faBars, faCartShopping,faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'



   


function Header() {
  const wishlistArray = useSelector((state)=>state.wishlist)
  const cartArray = useSelector((state)=>state.cart)
  const [show,setShow]= useState(false)
const change=()=>{
  setShow(!show)
}

  return (
    <div className='w-full m-h-20 bg-violet-900 p-2 w-100 text-white md:flex items-center fixed'>
          


      
        <div className=' p-2'>
                <div className='flex items-center mb-3'>
                    <FontAwesomeIcon icon={faCartShopping} className=' fa-2x' />
                    <Link to={"/"}>
                      <h1 className='text-3xl  ms-3'>E-KART</h1>
                     <button onClick={change} className='border border-white p-2 rounded ms-auto md:hidden'> <FontAwesomeIcon icon={faBars} /></button>
                    </Link>
                </div>
              
            </div>

          {show &&  <div className='flex  md:hidden'>

  
              <Link to={"/wishlist"}><button className='px-4 py-3 border border-white rounded me-4 hover:bg-white hover:text-violet-900' ><FontAwesomeIcon icon={faHeart} className='me-2 ' style={{color:'red'}}/>whishlist<span className='px-2 border-slate-500 bg-slate-400 rounded ms-2'>{wishlistArray.length}</span></button></Link>

            <Link to={"/cart"}><button className='px-4 py-3  border border-white rounded me-4 hover:bg-white hover:text-violet-900' ><FontAwesomeIcon icon={faCartShopping}  className='me-2 ' style={{color:'green'}}/>cart<span className='px-2 border-slate-500 bg-slate-400 rounded ms-2'>{cartArray.length}</span></button></Link>
            </div>}
          
            <div className='md:flex ms-auto hidden'>

               <Link to={"/wishlist"}> <button className='px-4 py-3 border border-white rounded me-4 hover:bg-white hover:text-violet-900' ><FontAwesomeIcon icon={faHeart} className='me-2 ' style={{color:'red'}}/>whishlist<span className='px-2 border-slate-500 bg-slate-400 rounded ms-2'>{wishlistArray.length}</span></button></Link>
                <Link to={"/cart"}><button className='px-4 py-3  border border-white rounded me-4 hover:bg-white hover:text-violet-900' ><FontAwesomeIcon icon={faCartShopping}  className='me-2 ' style={{color:'green'}}/>cart<span className='px-2 border-slate-500 bg-slate-400 rounded ms-2'>{cartArray.length}</span></button></Link>
                </div>
        </div>



      
    
    
  )
}

export default Header

     

    
    
