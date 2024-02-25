import React from 'react'
import { RiShoppingCartLine } from "react-icons/ri";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const qty=useSelector((state)=>state.cart)
  return (
    <div className='w-full h-[60px] bg-blue-950'>
        <div className=' flex items-center max-w-[1080px]  justify-between mx-auto w-11/12 h-[60px]'>
            <NavLink to='/'><div><img src='https://upload.wikimedia.org/wikipedia/commons/e/e7/Shopify_logo.svg' className='w-[150px]'></img></div></NavLink>
            <div className='flex items-center gap-6 text-2xl text-white relative'>
                <NavLink to='/'><p className='text-xl'>Home</p></NavLink>
                <NavLink to="/cart"><div><RiShoppingCartLine />{qty.length>0&&<div className='absolute -top-1 -right-2
                 text-sm bg-green-600 text-white px-1 animate-bounce rounded-full'><span>{qty.length}</span></div>}</div></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar