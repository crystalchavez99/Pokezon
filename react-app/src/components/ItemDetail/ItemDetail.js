import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneItemThunk } from '../../store/item';
import './ItemDetail.css';
function ItemDetail() {
    const { itemId } = useParams();
    const dispatch = useDispatch();
    const [quantity,setQuantity] = useState(1)
    const item = useSelector(state => state?.items[itemId])
    useEffect(() => {
        dispatch(getOneItemThunk(itemId))
    }, [dispatch, itemId])


    function reduce(){
        if(quantity > 0){
            setQuantity(quantity-1)
        }
    }
    function increment(){
        if(quantity < item?.quantity){
            setQuantity(quantity+1)
        }
    }
    return (
        <div id='item-detail-page'>
            <div id="location">
                <p>Home / Balls / {item?.name}</p>
            </div>
            <div className='item-display-flex'>
                <div className='item-image'>
                    <img src={item?.image_url} alt={item?.name} />
                </div>
                <div className='item-info'>
                    <p>{item?.name}</p>
                    <span>₽{item?.price}</span>
                    <p>Quantity: {item?.quantity}</p>
                    <div id="add-to-cart">
                        <button onClick={increment}><i class="fa-solid fa-plus"></i></button>
                        <input value={quantity} type="number" step={1}  min={1} max={item?.quantity} onChange={e => setQuantity(e.target.value)}/>
                        <button onClick={reduce}><i class="fa-solid fa-minus"></i></button>
                    </div>
                    <button type="button" id='cart'>Add To Cart</button>
                </div>
            </div>

            <div className='item-description'>
                <p>{item?.description}</p>
            </div>
        </div>
    )
}

export default ItemDetail;
