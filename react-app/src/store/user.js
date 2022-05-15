const GET_ALL_USER = 'user/GET_ALL_USER';
const UPDATE_USER = 'user/UPDATE_USER'
const getUser = (users) => ({
    type: GET_ALL_USER,
    payload: users
  });

const updateUser = (user) => ({
    type: UPDATE_USER,
    payload: user
  });
  export const getAllUser = () => async dispatch =>{
    const response = await fetch(`/api/users/`)
    if(response.ok){
      const users = await response.json();
      dispatch(getUser(users.users))
      return users
  }
  return response;
  }

  export const getOneUserThunk = (user) => async dispatch =>{
    const response = await fetch(`/api/users/${user.id}`,{
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
  })
  if (response.ok) {
      const updatedUser = await response.json();
      await dispatch(updateUser(updatedUser));
    }else if (response.status < 500) {
      const data = await response.json();
      return data
    }
    return response;
  }
  const initialState = {};

  export default function userReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
      case GET_ALL_USER:
        newState = {...state}
        action.payload.forEach(user => newState[user.id] = user)
        return {...newState,...state}
      case UPDATE_USER:
        newState = {[action.payload.id]: action.payload}
        return newState;
      default:
        return state;
    }
  }
