import React, { useContext, useState } from 'react'
// import image1 from "../assets/image1.avif";
import { LuLeafyGreen } from "react-icons/lu";
import { food_items } from '../data/food';
import { GiChickenOven } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { dataContext } from '../context/UserContext';
import Card2 from './Card2';
import { AddItem } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import NoDishFound from "../assets/NoDishFound.png";

import { ToastContainer, toast } from 'react-toastify';

function Card({ id, food_name, food_category, food_type, food_quantity, food_image, price, dishCategory }) {

    let dispatch = useDispatch()
    let { showCart, setShowCart } = useContext(dataContext);
    const cartItems = useSelector((state) => state.cart);


    let subtotal = cartItems.reduce((total, item) => total + item.qty * item.price, 0);
    let deliveryFee = 20;
    let taxes = subtotal * 0.5 / 100;
    let total = Math.floor(subtotal + deliveryFee + taxes);

    return (
        <div className='flex flex-wrap justify-center items-center'>
            {dishCategory.length > 1 ?
                dishCategory.map((item) => (
                    <div key={item.id} className=' w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 m-[10px] hover:border-2 border-green-300'>
                        <div className='w-[100%] h-[60%] overflow-hidden rounded-lg shadow-lg'>
                            <img src={item.food_image} alt={item.food_name} className='object-cover' />
                        </div>

                        <div className='text-2xl font-semibold'>
                            {item.food_name}
                        </div>

                        <div className='w-full flex justify-between items-center'>
                            <div className='text-lg font-bold text-green-500'>
                                Rs {item.price}/-
                            </div>

                            <div className='flex justify-center items-center gap-2 text-lg font-semibold'>
                                {item.food_type === "veg" ?
                                    (<> <LuLeafyGreen className='text-green-500' /> <span className='text-green-500'>{item.food_type}</span> </>) :
                                    (<> <GiChickenOven className='text-red-500' /> <span className='text-red-500'>{item.food_type}</span> </>)}
                            </div>
                        </div>

                        <button
                            className="w-full font-semibold bg-green-500 rounded-lg p-3 text-white hover:bg-green-400 cursor-pointer"
                            onClick={() => {
                                dispatch(
                                    AddItem({
                                        id: item.id,
                                        name: item.food_name,
                                        price: item.price,
                                        image: item.food_image,
                                        qty: 1,
                                    })
                                );
                                toast.success("Item added");
                            }
                            }
                        >
                            Add to dish
                        </button>
                    </div>
                )) : 
                <img src={NoDishFound} alt="No Dish Found" className='w-[900px] h-[500px]'/> 
            }

            <div className={` w-full md:w-[40vw] h-full fixed top-0 right-0 bg-white flex flex-col items-center shadow-xl transition-all duration-500 ${showCart ? "translate-x-0" : "translate-x-full"} overflow-auto`}>
                <header className='w-full flex justify-between items-center p-6'>
                    <span className='text-green-400 text-[18px] font-semibold'>Order items</span>
                    <RxCross1 className=' w-[25px] h-[25px] text-green-400 text-[18px] font-semibold cursor-pointer hover:text-gray-600' onClick={() => setShowCart(false)} />
                </header>
                {/* <Card2 /> */}
                <div className='w-full mt-9 flex flex-col gap-6'>
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <Card2
                                key={item.id}
                                {...item}
                            />
                        ))
                    ) : (
                        <p className="text-center mt-5 text-gray-500">
                            Your cart is empty
                        </p>
                    )}
                </div>
                <div className='w-[95%] border-t-2 border-b-2 border-gray-400 ml-4 mt-5 flex flex-col gap-2 p-8 items-center'>

                    <div className='w-[95%] flex justify-between items-center'>
                        <span className=' text-gray-600 font-semibold'>SubTotal </span>
                        <span className='text-green-500 font-semibold'>Rs {subtotal}/-</span>
                    </div>

                    <div className='w-[95%] flex justify-between items-center'>
                        <span className=' text-gray-600 font-semibold'>Delivery Fee</span>
                        <span className='text-green-500 font-semibold'>Rs {deliveryFee}/-</span>
                    </div>

                    <div className='w-[95%] flex justify-between items-center'>
                        <span className=' text-gray-600 font-semibold'>Taxes</span>
                        <span className='text-green-500 font-semibold'>Rs {taxes}/-</span>
                    </div>

                </div>

                <div className='w-[95%] flex justify-between items-center px-10 mt-4'>
                    <span className=' text-gray-600 font-semibold text-xl'>Total</span>
                    <span className='text-green-500 font-semibold'>Rs {total}/-</span>
                </div>

                <button className="w-[80%] mt-6 font-semibold bg-green-500 rounded-lg p-3 text-white hover:bg-green-400 cursor-pointer" onClick={()=>{
                    toast.success("Your Order is placed.")
                }}>Place Order</button>
            </div>
        </div >
    )
}

export default Card
