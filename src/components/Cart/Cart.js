import React from 'react';

const Cart = (props) => {
    console.log(props.cart.strMeal)
    return (
        <div>
            <h3>Name: {props.cart.strMeal}</h3> 
        </div>
    );
};

export default Cart;