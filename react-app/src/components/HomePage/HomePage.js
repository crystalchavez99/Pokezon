import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllItemsThunk } from '../../store/item';
import './HomePage.css';

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
            <div id="banner">
                <img src="https://res.cloudinary.com/dreambssd/image/upload/v1652845446/7c3d88f4bbe7a02a0fec8dc0ed7863bdd6369e97_h5dxvk.jpg"/>
                <img src="https://res.cloudinary.com/dreambssd/image/upload/v1652846819/pokemon-go-berries_ogqnul.jpg"/>
                <img src="https://res.cloudinary.com/dreambssd/image/upload/v1652846260/3934977-poke-ball_jwpme1.jpg"/>
                <img src="https://res.cloudinary.com/dreambssd/image/upload/v1652846595/images_p3t7hn.jpg"/>
            </div>
            <h1>All your item needs fulfilled</h1>
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
