import React from 'react';
import './DeadEnd.css';
import { NavLink } from 'react-router-dom';
function DeadEnd (){
    return (
        <div id="dead-end">
            <h1>404 PAGE NOT FOUND</h1>
            <i className="fa-solid fa-triangle-exclamation"></i>
            <p>Sorry, Trainer! We're not able to find the page you're looking for.</p>
            <p>You can check out our items <NavLink to={`/`}>here</NavLink>!</p>
        </div>
    )
}

export default DeadEnd;
