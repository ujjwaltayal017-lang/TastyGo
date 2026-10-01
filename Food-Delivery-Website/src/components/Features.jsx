

import React, { useContext } from "react";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { SlBag } from "react-icons/sl";
import { dataContext } from "../context/UserContext";

function Features() {
    const { input } = useContext(dataContext);

    return (
        <>
            {!input ? (
                <div className="relative w-[93%] min-h-[750px] lg:min-h-[650px] mx-auto bg-white">

                    {/* Tomato Top Right */}
                    <img
                        src="https://images.unsplash.com/photo-1587486938113-d6d38d424efa?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="hidden md:block w-12 h-12 lg:w-[60px] lg:h-[60px] absolute top-8 right-6 lg:right-20 rounded-full"
                    />

                    {/* Tomato Bottom Right */}
                    <img
                        src="https://www.shutterstock.com/image-photo/red-tomato-slice-side-view-260nw-1129206590.jpg"
                        alt=""
                        className="hidden lg:block w-[60px] h-[60px] absolute bottom-44 right-28 xl:right-40 rounded-full"
                    />

                    {/* Onion */}
                    <img
                        src="https://img.magnific.com/premium-photo/slice-onion_55883-11087.jpg?semt=ais_hybrid&w=740&q=80"
                        alt=""
                        className="hidden md:block w-12 h-12 lg:w-[60px] lg:h-[60px] absolute top-8 left-6 lg:left-32 rounded-full"
                    />

                    {/* Chili */}
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9H6_VjdyKvLUL93rCl5FqIefEI4PtZGDyPMGB6uSJlQ&s=10"
                        alt=""
                        className="hidden lg:block w-[50px] h-[70px] absolute top-52 left-20 xl:left-32"
                    />

                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
                        alt="Burger"
                        className="hidden md:block w-16 lg:w-24 absolute bottom-50 left-8 lg:left-24"
                    />

                    <img
                        src="https://cdn-icons-png.flaticon.com/512/6978/6978255.png"
                        alt="Pizza"
                        className="hidden md:block w-16 lg:w-24 absolute top-10 left-24 lg:left-56"
                    />

                    <img
                        src="https://cdn-icons-png.flaticon.com/512/5787/5787016.png"
                        alt="Momos"
                        className="hidden lg:block w-16 lg:w-24 absolute top-20 right-24 xl:right-40"
                    />

                    {/* Heading */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-24 md:top-28 w-[90%] sm:w-[450px] lg:w-[500px] text-center">
                        <h1 className="text-green-500 font-semibold text-3xl sm:text-4xl lg:text-5xl mb-4 leading-tight">
                            Better food for
                            <br />
                            more people
                        </h1>

                        <p className="text-gray-700 text-sm sm:text-base">
                            For over a decade, we’ve enabled our customers to discover new
                            tastes, delivered right to their doorstep.
                        </p>
                    </div>

                    {/* Stats Box */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[95%] lg:w-[80%] bg-green-300 rounded-xl shadow-xl border p-6">

                        <div className="flex flex-col md:flex-row justify-between items-center gap-10">

                            {/* Restaurants */}
                            <div className="flex items-center gap-5">
                                <div>
                                    <h1 className="font-semibold text-2xl lg:text-3xl">
                                        3,00,000+
                                    </h1>
                                    <p>Restaurants</p>
                                </div>

                                <SiHomeassistantcommunitystore className="text-[35px] lg:text-[45px]" />
                            </div>

                            {/* Cities */}
                            <div className="flex items-center gap-5">
                                <div>
                                    <h1 className="font-semibold text-2xl lg:text-3xl">800+</h1>
                                    <p>Cities</p>
                                </div>

                                <FaLocationDot className="text-[35px] lg:text-[45px]" />
                            </div>

                            {/* Orders */}
                            <div className="flex items-center gap-5">
                                <div>
                                    <h1 className="font-semibold text-2xl lg:text-3xl">
                                        3 Billion+
                                    </h1>
                                    <p>Orders Delivered</p>
                                </div>

                                <SlBag className="text-[35px] lg:text-[45px]" />
                            </div>

                        </div>
                    </div>

                </div>
            ) : null}
        </>
    );
}

export default Features;