import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LogoutButton from '../auth/LogoutButton';
import logo from '../../images/Pokezon.png'
import './NavBar.css';
const NavBar = () => {
  const user = useSelector(state => state.session.user);
  return (
    <nav id="bot-nav">
      <ul>
        {/* <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            <img src={logo} alt='logo' />
          </NavLink>
        </li> */}
        <form action="/action_page.php">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">Submit</button>
        </form>
        <li id="login-ui">
            <NavLink to='/login' exact={true} activeClassName='active'>
            <i class="fa-solid fa-right-to-bracket">Login</i>
            </NavLink>
        </li>
        <li id="signup-ui">
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
          <i class="fa-solid fa-user-plus">Sign Up</i>
          </NavLink>
        </li>
        <li>
          <NavLink to={`/users/${user?.id}`} exact={true} activeClassName='active'>
          <i class="fa-solid fa-user">Profile</i>
          </NavLink>
        </li>
        <li>
          <NavLink to='/cart' exact={true} activeClassName='active'>
          <i class="fa-solid fa-cart-shopping">Cart</i>
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
