import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneItemThunk } from '../../store/item';

function ItemDetail() {
    const { itemId } = useParams();
    console.log(itemId)
    const dispatch = useDispatch();
    const item = useSelector(state => state?.items[itemId])
    console.log('item detail', item)
    useEffect(() => {
        dispatch(getOneItemThunk(itemId))
    }, [dispatch])

    return (
        <div>
            <h1>Items</h1>
            <>
                <img src={item?.image_url} />
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
