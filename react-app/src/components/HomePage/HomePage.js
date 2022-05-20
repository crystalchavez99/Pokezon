import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllItemsThunk } from '../../store/item';
import './HomePage.css';
import banner from '../../images/Banner.png'
function HomePage(){
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state?.session?.user);
    const itemListing = useSelector(state =>Object.values(state?.items))
    useEffect(()=>{
        dispatch(getAllItemsThunk())
    },[dispatch])

    return (
        <div id="Home-Page" key={'home-page'}>
            <div id="promo">
                <strong>Free Shipping For Orders Over ₽200.</strong>
            </div>
            {/* <img src={banner} id="promo-time"/> */}
            <h1>All your item needs fulfilled</h1>
            <div className='listing'>
                {itemListing?.map(item =>(
                    <div className='item-listed'>
                        <NavLink key={item?.id} exact={true} to={`/items/${item?.id}`}>
                            <img src={item?.image_url} alt={item?.name}/>
                            <div id="item-shop">
                            <p>{item?.name}</p>
                            <NavLink key={item?.id} exact={true} to={`/items/${item?.id}`}  className="item-show">
                                Shop Now
                            </NavLink>
                            </div>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomePage;
