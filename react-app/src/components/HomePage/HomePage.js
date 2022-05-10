import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllItemsThunk } from '../../store/item';

function HomePage(){
    const dispatch = useDispatch();
    const itemListing = useSelector(state =>Object.values(state?.item))
    useEffect(()=>{
        dispatch(getAllItemsThunk())
    },[dispatch])

    return (
        <div>
            <div>
                <div>
                    <h1>Pokezon</h1>
                </div>
                <div>
                    {/*Nav Bar would go here */}
                </div>
            </div>
            <div>
                {itemListing?.map(item =>(
                    <>
                    <p>{item.name}</p>
                    <img src={item?.image_url}/>
                    </>
                ))}
            </div>
        </div>
    )
}

export default HomePage;
