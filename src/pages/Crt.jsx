import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { MdAutoDelete } from "react-icons/md";
import { remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

const Crt = () => {
    const items=useSelector((state)=>state.cart)
    const totalPrice=items.reduce((acc,item)=>acc+item.price,0)
    const dispatch=useDispatch()
    function removeItem(id){
        dispatch(remove(id))
        toast.error('You are Broke')
    }
  return (
    <div>
        {
            items.length>0?(
                <div className='flex mx-auto w-11/12 max-w-[1080px] gap-6 mt-10 mb-6 flex-wrap '>
                    <div className='md:w-[60%]'>
                        {
                            items.map((item)=>(
                                
                                <div key={item.id} className='flex gap-6 border-b-4 border-gray-500 p-4 justify-evenly'>
                                
                                    <div className='h-[180px] '><img src={item.image} className='h-full w-full'/></div>
                                    <div className='flex flex-col max-w-[60%] justify-between'>
                                        <div>{item.title}</div>
                                        <div>{item.description.split(' ').slice(0,12).join(' ')+('...')}</div>
                                        <div className='flex justify-between'>
                                            <p>${item.price}</p>
                                            <button  onClick={()=>removeItem(item.id)} className='
                                            bg-red-200 p-2 hover:bg-red-400 rounded-full flex 
                                            justify-center items-center' ><MdAutoDelete /></button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex flex-col md:h-[500px] md:justify-between '>
                        <div>
                            <div className='uppercase font-bold text-3xl text-green-500 '>Your Cart</div>
                            <div className='uppercase font-bold text-5xl text-green-700 '>Summary</div>
                            <div className='text-2xl font-semibold uppercase text-green-950'>Total Items: {items.length}</div>
                        </div>
                        <div>
                            <div  className='text-2xl font-semibold text-green-950'>Total Amount: ${totalPrice}</div>
                            <button className='p-4
                             bg-green-800 text-white px-6 rounded-2xl hover:scale-105
                             transition duration-150 ease-in' onClick={()=>toast.success('Thanks for Shopping With Us!')}>Checkout</button>
                        </div>
                    </div>
                    
                </div>
            ):(<div className='flex flex-col items-center justify-center gap-6 mt-10'>
                <div className='text-2xl font-semibold '>It Looks like a Desert!!</div>
                <img className='w-[300px] rounded-xl'src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/65acddb0-6969-4d87-acf8-30deb59c843b/de3ek2l-a44f231d-d8a5-434e-a51b-4690479a7ae4.png/v1/fill/w_1280,h_1714,q_80,strp/nothing_but_an_empty_desert__except_benny__by_brendandoesart_de3ek2l-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcxNCIsInBhdGgiOiJcL2ZcLzY1YWNkZGIwLTY5NjktNGQ4Ny1hY2Y4LTMwZGViNTljODQzYlwvZGUzZWsybC1hNDRmMjMxZC1kOGE1LTQzNGUtYTUxYi00NjkwNDc5YTdhZTQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Ns9hhnZAOqf4EIlyZG8VGtR09DOJ2DLIlDTomlM5jc4'></img>
                <NavLink to='/'><button className='bg-green-500 p-4 rounded-2xl hover:bg-green-600
                transition duration-100 ease-in font-bold animate-bounce'>Start Shopping</button></NavLink>
            </div>)
        }
    </div>
  )
}

export default Crt