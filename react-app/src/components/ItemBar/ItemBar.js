import React from 'react';
import { NavLink } from 'react-router-dom';
import './ItemBar.css';

const ItemBar = () => {
  return (
    <nav id="bot-nav">
      <ul>
        <li>
          <NavLink to='/balls' exact={true} activeClassName='active'>
            Balls
          </NavLink>
        </li>
        <li>
          <NavLink to='/berries' exact={true} activeClassName='active'>
          <i class="fa-solid fa-strawberry">Berries</i>
          </NavLink>
        </li>
        <li>
          <NavLink to='/moves' exact={true} activeClassName='active'>
            TMs & HMs
          </NavLink>
        </li>
        <li>
          <NavLink to='/medicine' exact={true} activeClassName='active'>
            Medicine
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default ItemBar;
