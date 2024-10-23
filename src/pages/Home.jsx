import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import useFetch from '../hooks/usefetch'
import { useDispatch } from 'react-redux'
import { addWishlistItem } from '../redux/slices/WishlistSlice'
import { addItemToCart } from '../redux/slices/cartSlice'

function Home() {
const data = useFetch('https://fakestoreapi.com/products')
console.log(data);
const dispatch = useDispatch()

  return (
    <div className='pt-32 mb-10 px-10 md:grid grid-cols-4'>
{data?.length>0 &&
data?.map((item)=>(<div className="  p-2">
  <div className=' rounded bg-gray-200 p-3 '>
    <img src={item?.image} alt="no image"  className='w-full h-52 ' />
    <h1 className='text-center text-2xl'>{item?.title.slice(0,25)}</h1>
    <p>{item?.description.slice(0,120)}...</p>
    <p className='text-2xl'>price<span className='text-green-400'>{item?.price}</span></p>
    <div className='flex justify-between'>
      <button onClick={()=>dispatch(addWishlistItem(item))} className='p-3 rounded bg-red-600 text-white'><FontAwesomeIcon icon={faHeart} /></button>
      <button className='p-3 rounded bg-yellow-600 text-white' onClick={()=>dispatch(addItemToCart (item))} ><FontAwesomeIcon icon={faCartShopping} /></button>
    </div>
  </div>
</div>))
      
      
      
      }
      
    </div>
  )
}

export default Home