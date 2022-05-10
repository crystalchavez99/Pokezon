import React, { useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import {getAllItemsThunk} from '../store/item';

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const dispatch = useDispatch()
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
    console.log('item',item?.user_id)
    console.log('user',user)
    if(item?.user_id === user?.id){
      console.log('FOUND',item)
      return item;
    }
  })

  return (
    <div>
      <div>
        <ul>
          <li>
            <strong>User Id</strong> {userId}
          </li>
          <li>
            <strong>Username</strong> {user.username}
          </li>
          <li>
            <strong>Email</strong> {user.email}
          </li>
        </ul>
      </div>
      <div>
        <h2>Items for Sale</h2>
        {ownedItems?.map(item => (
          <>
          <img src={item?.image_url}/>
          <NavLink to={`/items/${item?.id}/edit`}>Edit</NavLink>
          <button>Delete</button>
          </>
        ))}
      </div>
    </div>
  );
}
export default User;
