import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Meals.css'
const Meals = () => {
    const [mealFoods , setMealsFood] = useState([])

    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(response => response.json())
        .then(data => setMealsFood(data.meals))
    },[])

    const [carts , setCarts] = useState([])

    const addCart = (meals)=>{
        const newCarts = [...carts , meals];
        setCarts(newCarts)
    }
    return (
        <div className='meals-container'>
            <div className="meals-area">
                {
                    mealFoods.map(mealFood => <Meal
                        key = {mealFood.idMeal}
                        mealFood = {mealFood}
                        addCart = {addCart}
                    >
                    </Meal>)
                }
            </div>
            
            <div className="order-summary">
                {
                    carts.map(cart =><Cart
                        key = {cart.idMeal} 
                        cart={cart}
                        >     
                        </Cart>
                        )
                }
            </div>
        </div>
    );
};

export default Meals;