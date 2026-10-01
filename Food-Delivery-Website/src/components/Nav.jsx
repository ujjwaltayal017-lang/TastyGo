import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { RiShoppingBag3Fill } from "react-icons/ri"
import { dataContext } from '../context/UserContext';
import { food_items } from '../data/food';
import { useSelector } from 'react-redux';
// import image1 from "../assets/image1.avif";
import logo from "../assets/website-logo.png.png";

function Nav() {
    let {input, setInput, dishCategory, setDishCategory, showCart, setShowCart} = useContext(dataContext);
    useEffect(() =>{
        let new_list = food_items.filter((item) => item.food_name.toLowerCase().includes(input) 
    || item.food_name.includes(input))
        setDishCategory(new_list)
    },[input])
   
      let items = useSelector(state => state.cart)
    return (
        <div className='w-full h-[100px] flex items-center px-5 justify-between md:px-8'>
            {/* <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
                <MdFastfood className='w-[30px] h-[30px] text-green-500 shadow-xl'/>
                <img src="./assets/website-logo.png.png" alt="" />
            </div> */}
            <img src={logo} alt="" className='w-[150px] h-[150px] mt-15'/>

            <form className='w-[40%] h-[60%] bg-white flex items-center px-5 gap-5 rounded-4xl shadow-xl md:w-[70%]' onSubmit={(e)=> e.preventDefault()}>
                <IoMdSearch className='text-green-500 text-[30px]'/>
                <input type="text" placeholder={window.innerWidth < 500 ? "Search..." : "Search Items..."} className='flex-1 outline-none text-xs sm:text-sm md:text-[20px]' onChange={(e)=>setInput(e.target.value)} value={input} />
            </form>

             <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer' onClick={()=>{
                setShowCart(true)
             }}>
                <span className='absolute top-0 right-2 text-green-500 font-bold text-[18px]'>{items.length}</span>
                <RiShoppingBag3Fill className='w-[30px] h-[30px] text-green-500'/>
            </div>

        </div>
    )
}

export default Nav