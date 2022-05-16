import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getAllItemsThunk, deleteOneItemThunk } from '../../store/item';
import { getAllUser } from '../../store/user';
import './User.css';

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const dispatch = useDispatch();
  const itemListing = useSelector(state => Object.values(state?.items))
  const sessionUser = useSelector(state => state?.session?.user);
  useEffect(() => {
    dispatch(getAllItemsThunk())
    dispatch(getAllUser())
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [dispatch, userId]);

  if (!user) {
    return null;
  }
  const ownedItems = itemListing?.filter(item => {
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
          <div>
            <li>{sessionUser?.id === user?.id &&
              <NavLink to={`/sell`}>Create Listing</NavLink>}
            </li>
            <li>{sessionUser?.id === user?.id &&
              <NavLink to={`/users/${user?.id}/edit`}>Edit Username</NavLink>}
            </li>
          </div>
        </ul>
      </div>
      <div id="owner-items">
        {ownedItems?.map(item => (
          <div className='item-sale'>
            <NavLink to={`/items/${item?.id}`}>
              <img src={item?.image_url} alt={item?.name} />
            </NavLink>
            <div className='edit-delete'>
              {sessionUser?.id === user?.id &&
                <>
                  <NavLink to={`/items/${item?.id}/edit`}>Edit</NavLink>
                  <button onClick={() => {
                    dispatch(deleteOneItemThunk(item))
                  }}>Delete</button>
                </>}

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
export default User;
