import React from 'react'
import image1 from "../assets/image1.avif"
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { IncrementQty, RemoveItem, DecrementQty } from "../redux/cartSlice";


function Card2({name, id, price, image, qty}) {
    let dispatch = useDispatch();
  return (
    <div className='w-[95%] h-[120px] p-2 shadow-lg flex justify-between ml-3 rounded-lg bg-green-100 border-2 border-green-400'>
        <div className='w-[75%] h-full flex gap-x-6 '>
            <div className='w-[40%] h-full overflow-hidden rounded-lg'> <img src={image} alt="" className='object-cover' /></div>
            <div className='w-[60%] h-full flex flex-col gap-5 '>
                <div className='text-lg text-gray-600 font-semibold'> {name} </div>

                <div className='w-[100px] h-[40px] bg-gray-200 flex rounded-lg overflow-hidden shadow-lg border-2 border-green-400'>
                    <button className='w-[30%] h-full bg-white flex justify-center items-center cursor-pointer font-semibold text-green-400 hover:bg-gray-100' onClick={
                        ()=>{
                            if(qty > 1){
                                dispatch(DecrementQty({id:id}))
                            } else{
                                dispatch(RemoveItem(id))
                            }
                        }
                    }>-</button>
                    <span className='w-[40%] h-full bg-red flex justify-center items-center text-green-400'>{qty}</span>
                    <button className='w-[30%] h-full bg-white flex justify-center items-center cursor-pointer font-semibold text-green-400 hover:bg-gray-100' onClick={()=>{
                        dispatch(IncrementQty({id:id}))
                    }}>+</button>
                </div>

            </div>
        </div>

        <div className='flex flex-col justify-start items-end gap-6'>
            <span className='text-xl text-green-400 font-semibold'>Rs {price}/-</span>
            <RiDeleteBin6Line className='w-[30%] h-[30%] text-red-400 cursor-pointer mt-4' onClick={()=>dispatch(RemoveItem(id))}/>
        </div>
    </div>
  )
}

export default Card2