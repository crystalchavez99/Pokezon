import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect,useParams } from 'react-router-dom';
import { signUp } from '../../store/session';
import './User.css';

const EditProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState(user?.username);
  const [email, setEmail] = useState(user?.email);
  const [bio, setBio] = useState(user?.bio);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);



  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateBio = (e) => {
    setBio(e.target.value);
  };

  if (!user) {
    return <Redirect to='/' />;
  }

  return (
    <div id="auth-form-page">
      <div id="display-auth-form">
        <form>
          <div id="errors">
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div>
            <label>User Name</label>
            <input
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div>
            <label>Email</label>
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
          <button className="btn-login" type='submit'>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
