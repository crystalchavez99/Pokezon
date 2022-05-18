import React from 'react';
import './Cart.css';
import { NavLink } from 'react-router-dom';
function Cart (){
    return (
        <div id="cart-wip">
            <h1>THIS IS A WORK IN PROGRESS</h1>
            <i className="fa-solid fa-triangle-exclamation"></i>
            <p>Sorry, Trainer! We're not able to find the page you're looking for.</p>
            <p>You can check out our items <NavLink to={`/`}>here</NavLink>!</p>
        </div>
    )
}

export default Cart;
