import { faBackward, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeCartItem } from '../redux/slices/cartSlice'

function Cart() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
 
  const[totel,setTotel]=useState(0)
  const cartItem=useSelector(state=>state.cart)
  console.log(cartItem)
  

  const getTotel = ()=>{
    if(cartItem.length>0){
    setTotel(cartItem.map((item)=>item.price).reduce((n1,n2)=>n1+n2))
  }
}

   const handleCheckout = ()=>{
    alert('order placed successfully')
    dispatch(emptyCart())
    navigate('/')
   }


  useEffect(()=>{
    getTotel()
  })

  
  return (
    <> 
    <div className='pt-32 '>
      <h1 className=' text-center text-4xl text-violet-900 '>cart</h1>

     { cartItem.length>0?
      <div className='md:grid grid-cols-[2fr_1fr] my-10'>
        <div className='md:py-5 md:px-20  '>
          <table className='w-full'>
            <thead>
              <tr>
                <th className='border border-gray-100 p-3 bg-gray-400 text-white'>#</th>
                <th className='border border-gray-100 p-3 bg-gray-400 text-white'>Title</th>
                <th  className='border border-gray-100 p-3 bg-gray-400 text-white'>Image</th>
                <th  className='border border-gray-100 p-3 bg-gray-400 text-white'>Price</th>
                <th  className='border border-gray-100 p-3 bg-gray-400 text-white'>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItem.map((item,index)=>(
              <tr>
              <td className='border border-gray-100 p-3'>{index+1}</td>
              <td  className='border border-gray-100 p-3'>{item.title}</td>
              <td  className='border border-gray-100 p-3 flex justify-center'><img src={item.image} alt="no image" style={{width:'100px',height:'100px'}} /></td>
              <td  className='border border-gray-100 p-3'> {item.price}</td>
              <td  className='border border-gray-100 p-3 text-center'><button onClick={()=>dispatch(removeCartItem(item.id))} className='bg-red-700 p-3 text-white rounded'><FontAwesomeIcon icon={faTrash}  /></button></td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='pt-5 px-10'>
          <div className='p-5 shadow-lg'>
         <h1 className='text-3xl text-center'> Cart summary</h1>
         <p className='mt-4 text-xl'>Totel number of product : {cartItem?.length}</p>
         <p className='mt-2 text-xl'>GrandTotel : $ {totel}</p>
         <button onClick={handleCheckout} className='w-full bg-green-600 text-white mt-4 p-3 hover:bg-white hover:border hover:border-green-600 hover:text-green-600'>checkout</button>

          </div>
        </div>

      </div>
:
      <div className='flex justify-center'>
    <div className='flex justify-center items-center flex-col my-10'>
      <img src="https://cookhouse.prayagrajxport.com/front_assets/images/empty_wishlist.png" alt="no image" />
      <p className='text-violet-800 text-3xl'>your cart is empty </p>
     <Link to={"/"}> <button className='bg-green-700 text-white p-3 rounded mt-3'><FontAwesomeIcon icon={faBackward} />Back home</button></Link>
    </div>
  </div>
}

    </div>
    
    </>
  )
}

export default Cart
