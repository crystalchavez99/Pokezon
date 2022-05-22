import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../../images/Pokezon(2).png'
import LogoutButton from '../auth/LogoutButton';
import { Button, Menu, MenuItem } from '@mui/material';
import './NavBar.css';
const NavBar = () => {
  const user = useSelector(state => state.session.user);
  const [anchor, setAnchor] = useState(null)
  const open = Boolean(anchor)


  const handleOpen = e => {
    setAnchor(e.currentTarget)
  }
  const handleClose = e => {
    setAnchor(null)
  }
  return (
    <nav id="top-nav">
      <ul>
        <li>
          <img src={logo} />
        </li>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            <i className="fa-solid fa-house">Home</i>
          </NavLink>
        </li>
        {/* <form action="/action_page.php">
          <input type="text" placeholder="Search.." name="search" id="search"/>
          <button type="submit" id="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
        </form> */}
        {!user &&
          <>
            <li id="login-ui">
              <NavLink to='/login' exact={true} activeClassName='active'>
                <i className="fa-solid fa-right-to-bracket">Login</i>
              </NavLink>
            </li><li id="signup-ui">
              <NavLink to='/sign-up' exact={true} activeClassName='active'>
                <i className="fa-solid fa-user-plus">Sign Up</i>
              </NavLink>
            </li>
          </>}
        {/* <li>
          <NavLink to='/cart' exact={true} activeClassName='active'>
            <i className="fa-solid fa-cart-shopping">Cart</i>
          </NavLink>
        </li> */}
        {user && <><li>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleOpen}>
            <i className="fa-solid fa-user">
                Profile
            </i>
            {/* <NavLink to={`/users/${user?.id}`} exact={true} activeClassName='active'>

          </NavLink> */}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchor}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}>
            <MenuItem onClick={handleClose}>
              <NavLink to={`/users/${user?.id}`} exact={true} activeClassName='active'>
                <i className="fa-solid fa-user">
                  My Profile
                </i>
              </NavLink>

            </MenuItem>
            <MenuItem onClick={handleClose}><LogoutButton /></MenuItem>
          </Menu>
        </li>
        </>}
      </ul>
    </nav>
  );
}

export default NavBar;
