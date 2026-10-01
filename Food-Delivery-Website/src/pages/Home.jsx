import React, { useContext, useState } from "react";
import Nav from '../components/Nav';
import Category from '../components/Category';
import Card from '../components/Card.jsx';
import Card2 from "../components/Card2.jsx";
import Features from "../components/Features.jsx";
import Footer from "../components/Footer.jsx";
import { food_items } from '../data/food.js';
import { dataContext } from "../context/UserContext.jsx";
import { useSelector } from "react-redux";


function Home() {
    // const [dishCategory, setDishCategory] = useState(food_items);
    let { dishCategory, setDishCategory, input } = useContext(dataContext);
    const [activeCategory, setActiveCategory] = useState("All");

    function filter(category) {
        setActiveCategory(category);
        if (category === "All") {
            setDishCategory(food_items);
        } else {
            const newList = food_items.filter((item) => item.food_category === category);
            setDishCategory(newList);
        }
    }
    let items = useSelector(state => state.cart)

    return (

        <div className='bg-slate-200 w-full min-h-screen'>
            <Nav />

            <Category filter={filter} activeCategory={activeCategory} />

            <Card dishCategory={dishCategory} />

            <Features />

            <Footer />

        </div>

    )
}

export default Home