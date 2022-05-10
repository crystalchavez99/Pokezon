import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {addOneItemThunk} from '../../store/item'
function ItemListing(){
    const dispatch = useDispatch();
    const [name,setName] = useState("")
    const [image_url,setImage_url] = useState("")
    const [description,setDescription] = useState("")
    const [price,setPrice] = useState(0)
    const [quantity,setQuantity] = useState(0);
    const [errors, setErrors] = useState([]);
    const user_id = useSelector(state => state.session.user.id);

    return(
        <div>
            <h1>Create A Listing</h1>
            <div>
                <form>
                    <label>
                        Name:
                    </label>
                    <input
                    id="add-item-name"
                    type="text"
                    value={name}
                    onChange={(e) =>setName(e.target.value)}
                    />
                    <label>
                        Image Upload:
                    </label>
                    <input
                    id="add-item-image"
                    type="url"
                    value={image_url}
                    onChange={(e) =>setImage_url(e.target.value)}
                    />
                    <label>
                        Description:
                    </label>
                    <input
                    id="add-item-description"
                    type="text"
                    value={description}
                    onChange={(e) =>setDescription(e.target.value)}
                    />
                    <label>
                        Price:
                    </label>
                    <input
                    id="add-item-description"
                    type="number"
                    value={price}
                    onChange={(e) =>setPrice(e.target.value)}
                    />
                    <label>
                        Quantity:
                    </label>
                    <input
                    id="add-item-description"
                    type="number"
                    value={price}
                    onChange={(e) =>setPrice(e.target.value)}
                    />
                </form>
            </div>
        </div>
    )
}

export default ItemListing;
