import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneItemThunk } from '../../store/item';
import { getAllReviewsThunk, deleteOneReviewThunk } from '../../store/review';
import ReviewEdit from '../ReviewForm/ReviewEdit';
import ReviewForm from '../ReviewForm/ReviewForm';
import { Modal } from '../../context/Modal';
import './ItemDetail.css';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import { getAllUser } from '../../store/user';
function ItemDetail() {
    const { itemId } = useParams();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1)
    const item = useSelector(state => state?.items[itemId])
    const reviews = useSelector(state => Object.values(state?.reviews))
    const user = useSelector(state => state?.session?.user);
    const listedUsers = useSelector(state => Object.values(state?.users))

    const [display, setDisplay] = useState(false)

    const [modal, setModal] = useState(false)

    const itemReviews = reviews?.filter(review => {
        return review?.item_id === item?.id
    })
    useEffect(() => {
        dispatch(getOneItemThunk(itemId))
        dispatch(getAllReviewsThunk())
        dispatch(getAllUser())
    }, [dispatch, itemId])


    function reduce() {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }
    function increment() {
        if (quantity < item?.quantity) {
            setQuantity(quantity + 1)
        }
    }
    return (
        <div id='item-detail-page'>
            <div id="location">
                <p>Home / {item?.name}</p>
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
                        <button onClick={increment}><i className="fa-solid fa-plus"></i></button>
                        <input value={quantity} type="number" step={1} min={1} max={item?.quantity} onChange={e => setQuantity(e.target.value)} />
                        <button onClick={reduce}><i className="fa-solid fa-minus"></i></button>
                    </div>
                    <button type="button" id='cart'>Add To Cart</button>
                </div>
            </div>



            <div className='item-desc-review'>
                <TabsUnstyled defaultValue={0}>
                    <TabsListUnstyled id="tabs-box">
                        <TabUnstyled className='tab'>Description</TabUnstyled>
                        <TabUnstyled className='tab'>Reviews</TabUnstyled>
                    </TabsListUnstyled>
                    <TabPanelUnstyled value={0}>
                        < div className="item-description">
                            <p>{item?.description}</p>
                            {listedUsers?.map(list =>{
                                        if(list?.id === item?.user_id){
                                            return(<p>Sold By: {list?.username}</p>)
                                        }
                                    })}
                        </div>
                    </TabPanelUnstyled>
                    <TabPanelUnstyled value={1}>
                        <div className='item-reviews'>
                            <h4>Customer Reviews</h4>
                            {user && <ReviewForm item={item} />}
                            {itemReviews?.map(review => (
                                <>
                                    <p>{review?.content}</p>
                                    {listedUsers?.map(list =>{
                                        if(list?.id === review?.user_id){
                                            return(<p>{list?.username}</p>)
                                        }
                                    })}
                                    {user?.id === review?.user_id && (<><button onClick={() => setModal(true)}>Edit</button>
                                        {modal &&
                                            (<Modal onClose={() => setModal(false)}>
                                                <ReviewEdit setModal={setModal} review={review} />
                                            </Modal>)}
                                        <button onClick={() => dispatch(deleteOneReviewThunk(review))}>Delete</button></>)}
                                </>
                            ))}
                        </div>
                    </TabPanelUnstyled>
                </TabsUnstyled>
            </div>
        </div>
    )
}

export default ItemDetail;
