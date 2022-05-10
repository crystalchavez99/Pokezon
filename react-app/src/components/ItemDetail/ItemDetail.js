import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneItemThunk } from '../../store/item';

function ItemDetail() {
    const { itemId } = useParams();
    const dispatch = useDispatch();
    const item = useSelector(state => state?.items[itemId])
    useEffect(() => {
        dispatch(getOneItemThunk(itemId))
    }, [dispatch,itemId])

    return (
        <div>
            <h1>Items</h1>
            <>
                <img src={item?.image_url} alt={item?.name}/>
                <p>{item?.name}</p>
            </>
            <>
            <p>₽{item?.price}</p>
            <p>Quantity: {item?.quantity}</p>
            </>
            <>
                <p>{item?.description}</p>


            </>
        </div>
    )
}

export default ItemDetail;
