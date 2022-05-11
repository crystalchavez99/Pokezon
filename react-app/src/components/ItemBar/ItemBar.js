import React from 'react';
import { NavLink } from 'react-router-dom';
import './ItemBar.css';

const ItemBar = () => {
  return (
    <nav id="bot-nav">
      <ul>
        <li>
          <NavLink to='/balls' exact={true} activeClassName='active'>
          <i className="fa-solid fa-circle">Balls</i>
          </NavLink>
        </li>
        <li>
          <NavLink to='/berries' exact={true} activeClassName='active'>
          <i className="fa-solid fa-seedling">Berries</i>
          </NavLink>
        </li>
        <li>
          <NavLink to='/moves' exact={true} activeClassName='active'>
          <i className="fa-solid fa-compact-disc">TMs & HMs</i>

          </NavLink>
        </li>
        <li>
          <NavLink to='/medicine' exact={true} activeClassName='active'>
          <i className="fa-solid fa-capsules">Medicine</i>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default ItemBar;
