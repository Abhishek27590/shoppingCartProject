import React, { useState } from 'react'
import  {useDispatch, useSelector}  from 'react-redux'
import { add,remove } from '../redux/slices/CartSlice'
import toast from 'react-hot-toast'


const Cards = ({product}) => {
    const cart=useSelector((state)=>state.cart)
    const dispatch=useDispatch()
    const addItem = () =>{
        dispatch(add(product))
        toast.success('Added to Cart')
    }
    function removeItem(){
        dispatch(remove(product.id))
        toast.error('Removed from Cart')
    }

  return (
    <div className='flex flex-col items-center justify-between p-2 border-2 rounded-2xl hover:scale-110 
     transition duration-150 ease-in min-h-[350px] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>
        <div className='truncate font-semibold text-[17px]'>{product.title.substring(0,20)+('...')}</div>
        <div className='text-[10px]'>{product.description.split(" ").slice(0,10).join(' ')+('...')}</div>
        <div className='h-[180px]'><img className='h-full w-full' src={product.image}/></div>
        <div className='flex gap-10 items-center'>
            <div className='text-green-600 font-bold '>${product.price}</div>
            {
                cart.some((p)=>(p.id==product.id))?<button onClick={removeItem} className='
                p-1 px-3 border-2 rounded-full font-semibold uppercase border-black
                 hover:bg-gray-800 hover:text-white transition duration-300 ease-in'>
                 <p className='text-sm'>Remove Item</p></button>:<button onClick={addItem} className='
                p-1 px-3 border-2 rounded-full font-bold uppercase border-black hover:bg-gray-800 
                hover:text-white transition duration-150 ease-in'><p className='text-sm'>Add to Cart</p></button>
            }
        </div>
    </div>
  )
}

export default Cards