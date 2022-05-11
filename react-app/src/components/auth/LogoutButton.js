import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <a onClick={onLogout}><i class="fa-solid fa-circle-xmark">Logout</i></a>;
};

export default LogoutButton;
