import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './Auth.css';
import logo from '../../images/logo.png'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [bio, setBio] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    //if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password,repeatPassword,bio));
      if (data) {
        setErrors(data)
      }
    // }else{
    //   setErrors(["Password: Passwords do not match!"])
    //   setPassword("")
    //   setRepeatPassword("")
    // }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };
  const updateBio = (e) => {
    setBio(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div id="auth-form-page">
      <img src={logo}/>
      <div id="display-auth-form">
        <form onSubmit={onSignUp}>
          <div id="errors">
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div>
            <label>User Name <span>*</span></label>
            <input
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div>
            <label>Email <span>*</span></label>
            <input
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div>
            <label>Bio</label>
            <textarea
              type='text'
              name='bio'
              onChange={updateBio}
              value={bio}
            ></textarea>
          </div>
          <div>
            <label>Password <span>*</span></label>
            <input
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div>
            <label>Repeat Password <span>*</span></label>
            <input
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
            ></input>
          </div>
          <button className="btn-login" type='submit'>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
