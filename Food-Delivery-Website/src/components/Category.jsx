import Categories from '../data/Categories.jsx';
// import { food_items } from '../data/food';
import { useState } from 'react';
import { dataContext } from "../context/UserContext.jsx";
import { useContext } from "react";

export default function Category({ filter, activeCategory }) {
    let { input } = useContext(dataContext);

    return (
        <div className='flex flex-wrap justify-center items-center gap-5'>

{!input ?  ( <>
            {Categories.map((item) => {
                return (
                    <div
                        key={item.id}
                        onClick={() => filter(item.name)}
                        className={`w-[100px] h-[100px] flex flex-col items-center justify-center gap-5 p-3 rounded-lg shadow-xl cursor-pointer transition-all duration-200
        ${activeCategory === item.name
                                ? "bg-green-200 text-black"
                                : "bg-white text-gray-600 hover:bg-green-200"
                            }`}
                    >
                        {item.icon}
                        {item.name}
                    </div>
                )
            })}
            </>  ): null}

            
        </div>
    )
}