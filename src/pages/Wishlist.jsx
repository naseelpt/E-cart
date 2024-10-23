import React from 'react'
import { faCartShopping, faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/slices/WishlistSlice'
import { addItemToCart } from '../redux/slices/cartSlice'

function Wishlist() {
 const wishlistArray = useSelector((state)=>state.wishlist)
 console.log(wishlistArray);
 const dispatch = useDispatch()

 const whishes = (item)=>{
  dispatch (addItemToCart(item))
  dispatch (removeWishlistItem(item.id))
}
    
    
    
 
  
 
  return (
  <>
      <h1 className='pt-32 text-center text-4xl text-violet-600'>Wishlist</h1>
      
   {wishlistArray?.length>0?
      <div className='mt-3 pt-32 mb-10 px-10 md:grid grid-cols-4'>
{wishlistArray?.map((item)=>(
  <div className="border border-black p-2">
  <div className='p-3 rounded'>
    <img src={item?.image} alt="no image"  className='w-full h-52 ' />
    <p>{item?.title.slice(0,25)}</p>
    <p>{item?.description.slice(0,120)}...</p>
    <p className='text-2xl'>price <span className='text-green-400'>{item?.price}</span></p>
    <div className='flex justify-between'>
      <button onClick={()=>dispatch(removeWishlistItem(item?.id))} className='p-3 rounded bg-red-600 text-white'><FontAwesomeIcon icon={faTrashCan} /></button>
      <button onClick={()=>dispatch(whishes(item))} className='p-3 rounded bg-yellow-600 text-white' ><FontAwesomeIcon icon={faCartShopping} /></button>
    </div>
  </div>
</div>

))
      }
      
    </div>
:
  <div className='flex justify-center'>
    <img src="https://cookhouse.prayagrajxport.com/front_assets/images/empty_wishlist.png" alt="no image" />
  </div>
}

  </>
  )
}

export default Wishlist