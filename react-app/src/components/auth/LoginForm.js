import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './Auth.css';
import logo from '../../images/logo.png'
const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const demoUser = (e) => {
    e.preventDefault();
    dispatch(login("demo@aa.io", "password"));
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div id="auth-form-page">

      <div id="display-auth-form">
      <img src={logo}/>
        <form onSubmit={onLogin}>
          <div id="errors">
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
            <div id="form-btns">
            <button className="btn-login" type='submit'>Login</button>
            <button className="btn-demo" onClick={demoUser}>Demo</button>
            </div>
          </div>
          <p>Don't have an account? <NavLink to={`/sign-up`}>Sign Up</NavLink>
          </p>
        </form>
      </div>
      <div>
        <img src="https://res.cloudinary.com/dreambssd/image/upload/v1653071380/bulbasaur_1_f6u2sm.png" className='pokemon'/>
        <img src="https://res.cloudinary.com/dreambssd/image/upload/v1653071467/mudkip_1_usbey5.png" className='pokemon'/>
        <img src="https://res.cloudinary.com/dreambssd/image/upload/v1653071744/bulbasaurs_1_x135xb.png" className='pokemon'/>
        <img src="https://res.cloudinary.com/dreambssd/image/upload/v1653071783/mudkips_1_gqhxjy.png" className='pokemon'/>
      </div>
    </div>
  );
};

export default LoginForm;
