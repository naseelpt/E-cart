import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='min-h-80 bg-violet-900 p-10 w-100 grid md:grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)] '>

     <div className=''>
     <div className='flex fa-2x items-center'>
       <FontAwesomeIcon icon={faCartShopping} style={{color: "#f1f2f4",}} className='fa-2x p-5'  /> 
       <h2 className='text-white'>E-cart</h2>
     </div>
     
   <div className='text-white' style={{textAlign:'justify'}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni et minima iste quis quam, quibusdam ipsum eaque necessitatibus ad officiis amet tempora architecto possimus iusto ab eos nulla mollitia saepe?</div>
     </div>
     <div className=''>
        <div><h1 className='my-4 text-white fa-3x mx-5'>Links</h1></div>
        <div className='my-5 mx-5 text-white  '>
          <Link to={"/"}>  <h3>Home</h3></Link>
            <Link to={"/wishlist"}><h3>Wishlist</h3></Link>
           <Link to={"/cart"}> <h3>cart</h3></Link>
        </div>

     </div>
     <div className=' '>
     <div><h1 className='my-4 text-white fa-3x mx-5'>Guides</h1></div>
     <div className='my-5 mx-5 text-white  '>
            <h3>React</h3>
            <h3>React Bootstrap</h3>
            <h3>Bootswatch</h3>
        </div>
     </div>
     <div className=''>
     <div><h1 className='my-4 text-white fa-2x mx-5 fa-3x'>Contact us</h1></div>
     <input type="text" className='form-control my-5 mx-5 rounded' placeholder='email id' style={{ height:'45px', width:"300px"}}/>
     <button type="button" className='bg-orange-500 rounded text-center' style={{width:'70px', height:'45px'}}>Danger</button>
     
     <div className=' flex justify-between   fa-2x mx-5'>
     <FontAwesomeIcon icon={faLinkedinIn} style={{color: "#e8eaed",}} />
     <FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",}} />
     <FontAwesomeIcon icon={faFacebook} style={{color: "#f9fafa",}} />
     <FontAwesomeIcon icon={faInstagram} style={{color: "#ededed",}} />
     </div>
     </div>
     
    </div>
  )
}

export default Footer