import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneItemThunk } from '../../store/item';
import './ItemDetail.css';
function ItemDetail() {
    const { itemId } = useParams();
    const dispatch = useDispatch();
    const item = useSelector(state => state?.items[itemId])
    useEffect(() => {
        dispatch(getOneItemThunk(itemId))
    }, [dispatch, itemId])

    return (
        <div id='item-detail-page'>
            <div>
                <p>Home / Balls / {item?.name}</p>
            </div>
            <div className='item-display-flex'>
                <div className='item-image'>
                    <img src={item?.image_url} alt={item?.name} />
                </div>
                <div className='item-info'>
                    <p>{item?.name}</p>
                    <p>₽{item?.price}</p>
                    <p>Quantity: {item?.quantity}</p>
                    <div>
                        <button><i class="fa-solid fa-plus"></i></button>
                        <input type="number" min={1} max={item?.quantity}/>
                        <button><i class="fa-solid fa-minus"></i></button>
                    </div>
                    <button>Add To Cart</button>
                </div>
            </div>

            <>
                <p>{item?.description}</p>
            </>
        </div>
    )
}

export default ItemDetail;
