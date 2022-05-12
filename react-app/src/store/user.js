const GET_ALL_USER = 'session/GET_ALL_USER'
const getUser = (users) => ({
    type: GET_ALL_USER,
    payload: users
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
  const initialState = {};

  export default function userReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
      case GET_ALL_USER:
        newState = {...state}
        action.payload.forEach(user => newState[user.id] = user)
        return {...newState,...state}
      default:
        return state;
    }
  }
