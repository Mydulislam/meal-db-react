import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Meal.css'
const Meal = (props) => {
    const {mealFood , addCart} = props
    const {idMeal, strMeal, strMealThumb} = mealFood;

    return (
        <div className='meals-content'>
                <div className='meals-info'>
                    <img src={strMealThumb} alt="" />
                    <h3>Meals Name: {strMeal}</h3>
                    <h4>Id: {idMeal}</h4>
                </div>
                <button onClick={() => addCart(mealFood)} className='cart-btn'>
                    <span className='btn-text'>Add Cart</span>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> 
                </button>
        </div>
    );
};

export default Meal;