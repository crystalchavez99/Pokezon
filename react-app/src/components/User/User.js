import React, { useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import {getAllItemsThunk,deleteOneItemThunk} from '../../store/item';
import './User.css';

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const dispatch = useDispatch();
  const itemListing = useSelector(state =>Object.values(state?.items))
  useEffect(() => {
    dispatch(getAllItemsThunk())
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [dispatch,userId]);

  if (!user) {
    return null;
  }
  const ownedItems = itemListing?.filter(item =>{
    return item?.user_id === user?.id;
  })

  return (
    <div id="user-page">
      <div className='owner'>
        <ul>
          <li>
            <strong>Username</strong> {user.username}
          </li>
          <li>
            <strong>Email</strong> {user.email}
          </li>
          <li>
            <strong>Bio</strong> {user.bio}
          </li>
          <li>
          <NavLink to={`/sell`}>Create Listing</NavLink>
          </li>
        </ul>
      </div>
      <div id="owner-items">
        {ownedItems?.map(item => (
          <div className='item-sale'>
          <img src={item?.image_url} alt={item?.name}/>
          <div className='edit-delete'>
          <NavLink to={`/items/${item?.id}/edit`}>Edit</NavLink>
          <button  onClick={() => {
            dispatch(deleteOneItemThunk(item))
          }}>Delete</button>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default User;
