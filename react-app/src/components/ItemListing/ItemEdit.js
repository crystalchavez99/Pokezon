import React, { useState ,useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory,useParams } from "react-router-dom";
import { getOneItemThunk,updateOneItemThunk } from '../../store/item';

function ItemEdit({item}) {
    const { itemId } = useParams();
    item = useSelector(state => state?.items[itemId])
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState(item?.name)
    const [image_url, setImage_url] = useState(item?.image_url)
    const [description, setDescription] = useState(item?.description)
    const [price, setPrice] = useState(item?.price)
    const [quantity, setQuantity] = useState(item?.quantity);
    const [errors, setErrors] = useState([]);

    const itemSubmit = async e => {
        e.preventDefault();
        let updateItem = {
            ...item,
            name,
            image_url,
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

    return (
        <div>
            <h1>Edit A Listing</h1>
            <div>
                <form id="add-item-form" onSubmit={itemSubmit}>
                    <div>
                        {errors?.length > 0 && errors?.map((error, ind) => (
                            <div key={ind}>{error}</div>
                        ))}
                    </div>
                    <label>
                        Name:
                    </label>
                    <input
                        id="add-item-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>
                        Image Upload:
                    </label>
                    <input
                        id="add-item-image"
                        type="url"
                        value={image_url}
                        onChange={(e) => setImage_url(e.target.value)}
                    />
                    <label>
                        Description:
                    </label>
                    <input
                        id="add-item-description"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <label>
                        Price:
                    </label>
                    <input
                        id="add-item-description"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <label>
                        Quantity:
                    </label>
                    <input
                        id="add-item-description"
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <button type='submit' id="submit-button">Edit Item</button>
                </form>
            </div>
        </div>
    )
}

export default ItemEdit;
