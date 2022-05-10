import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getOneItemThunk } from '../../store/item';

function ItemDetail(){
    const item_id = useParams();
    const dispatch = useDispatch();
    const item = useSelector(state => Object.values(state?.item))
    console.log('item detail', item)
    useEffect(()=>{
        dispatch(getOneItemThunk(item_id?.itemId))
    },[dispatch])

    return (
        <div>
            <h1>Items</h1>
            {item?.map(im =>(
                <>
                    <img src={im?.image_url}/>
                    <p>{im?.name}</p>
                <>
                    <p>{im?.description}</p>
                </>
                </>
            ))}
        </div>
    )
}

export default ItemDetail;
