import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LogoutButton from './auth/LogoutButton';
import logo from '../images/Pokezon.png'

const NavBar = () => {
  const user = useSelector(state => state.session.user);
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            <img src={logo}/>
          </NavLink>
        </li>
        <form action="/action_page.php">
          <input type="text" placeholder="Search.." name="search"/>
          <button type="submit">Submit</button>
        </form>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to={`/users/${user?.username}`} exact={true} activeClassName='active'>
            Profile
          </NavLink>
        </li>
        <li>
        <NavLink to='/cart' exact={true} activeClassName='active'>
            Cart
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
