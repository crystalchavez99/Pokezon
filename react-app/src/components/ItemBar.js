import React from 'react';
import { NavLink } from 'react-router-dom';

const ItemBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/balls' exact={true} activeClassName='active'>
            Balls
          </NavLink>
        </li>
        <li>
          <NavLink to='/berries' exact={true} activeClassName='active'>
            Berries
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
