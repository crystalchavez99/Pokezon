import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllItemsThunk } from '../../store/item';

function HomePage(){
    const dispatch = useDispatch();
    const itemListing = useSelector(state =>Object.values(state?.items))
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
                    <div className='item-listed'>
                        <NavLink key={item?.id} exact={true} to={`/items/${item?.id}`}>
                            <p>{item?.name}</p>
                            <img src={item?.image_url} alt={item?.name}/>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomePage;
