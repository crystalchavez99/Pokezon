import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllItemsThunk } from '../../store/item';
import './HomePage.css';

function HomePage(){
    const dispatch = useDispatch();
    const itemListing = useSelector(state =>Object.values(state?.items))
    useEffect(()=>{
        dispatch(getAllItemsThunk())
    },[dispatch])

    return (
        <div id="Home-Page">
            <div className='header'>
                <div>
                    <h1>All your item needs fulfilled</h1>
                </div>
            </div>
            <div className='listing'>
                {itemListing?.map(item =>(
                    <div className='item-listed'>
                        <NavLink key={item?.id} exact={true} to={`/items/${item?.id}`}>
                            <img src={item?.image_url} alt={item?.name}/>
                            <p>{item?.name}</p>
                            <NavLink key={item?.id} exact={true} to={`/items/${item?.id}`}  className="item-show">
                                Shop Now
                            </NavLink>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomePage;
