import React, { useState ,useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory,useParams ,NavLink} from "react-router-dom";
import { getOneItemThunk,updateOneItemThunk } from '../../store/item';
import './ItemForm.css';
function ItemEdit({item}) {
    const { itemId } = useParams();
    item = useSelector(state => state?.items[itemId])
    const sessionUser = useSelector(state => state?.session?.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState(item?.name)
    const [image, setImage] = useState(item?.image_url)
    const [description, setDescription] = useState(item?.description)
    const [price, setPrice] = useState(item?.price)
    const [quantity, setQuantity] = useState(item?.quantity);
    const [errors, setErrors] = useState([]);



    const itemSubmit = async e => {
        e.preventDefault();
        let updateItem = {
            ...item,
            name,
            image,
            description,
            price,
            quantity
        }
        await dispatch(updateOneItemThunk(updateItem))
        .then((res)=>{
            if(!res?.ok){
              setErrors(res?.errors)
            }else{
              setErrors([])
              history.push(`/items/${item?.id}`)
            }
        })
    }
    useEffect(() => {
        dispatch(getOneItemThunk(itemId))
    }, [dispatch,itemId])

    if(sessionUser?.id !== item?.user_id){
        history.push(`/items/${itemId}`)
    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    return (
        <div id="item-new-form-page">

            <div id="display-form">
                <form id="add-item-form" onSubmit={itemSubmit}>
                <h1>Edit A Listing</h1>
                    <div id="errors">
                        {errors?.length > 0 && errors?.map((error, ind) => (
                            <div key={ind}>{error}</div>
                        ))}
                    </div>
                    <label>
                        Name: <span>*</span>
                    </label>
                    <input
                        id="add-item-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <ul className='signup-ol'>
                        <li>Minimum Characters: 4</li>
                        <li>Maximum Characters: 25</li>
                    </ul>
                    <label>
                        Image Upload: <span>*</span>
                    </label>
                    <input
                        id="url-input"
                        type="file"
                        onChange={updateImage}
                    />
                    <label>
                        Description: <span>*</span>
                    </label>
                    <textarea
                        id="add-item-description"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <ul className='signup-ol'>
                        <li>Minimum Characters: 10</li>
                        <li>Maximum Characters: 500</li>
                    </ul>
                    <label>
                        Price: <span>*</span>
                    </label>
                    <input
                        id="add-item-description"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}

                    />
                    <ul className='signup-ol'>
                        <li>Can Not Be Negative</li>
                    </ul>
                    <label>
                        Quantity: <span>*</span>
                    </label>
                    <input
                        id="add-item-description"
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <ul className='signup-ol'>
                        <li>Can Not Be Negative</li>
                    </ul>
                    <button type='submit' id="submit-button">Edit Item</button>
                    <NavLink to={`/`}>Cancel</NavLink>
                </form>
            </div>
        </div>
    )
}

export default ItemEdit;
