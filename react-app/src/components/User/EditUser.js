import {React} from 'react'
import { useState,useEffect } from 'react';
import { useParams,useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneUser, updateUserThunk } from '../../store/user';
function EditProfile (){
    const { userId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory()
    const user = useSelector(state => state?.users[userId])
    const [errors, setErrors] = useState([]);
    const [username, setUsername] = useState(user?.username);
    const [bio, setBio] = useState(user?.bio);

    useEffect(()=>{
        dispatch(getOneUser(userId))
    },[dispatch])
    const updateUsername = (e) => {
        setUsername(e.target.value);
    };
    const updateBio = (e) => {
        setBio(e.target.value);
    };



    const editUser = async e =>{
        e.preventDefault();
        let updatedUser = {
            ...user,
            username,
        }
        dispatch(updateUserThunk(updatedUser))
        .then((res)=>{
          console.log(res.errors)
            if(!res?.ok){
              setErrors(res?.errors)
            }else{
              setErrors([])
              history.push(`/users/${user?.id}`)
            }
        })
    }

    return(
        <div id="auth-form-page">
      <div id="display-auth-form">
        <form onSubmit={editUser}>
          <div id="errors">
            {errors?.map((error, ind) => (
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
          <button className="btn-login" type='submit'>Edit Profile</button>
        </form>
      </div>
    </div>
    )
}

export default EditProfile;
