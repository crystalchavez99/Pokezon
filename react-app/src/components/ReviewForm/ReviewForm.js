import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addOneReviewThunk } from '../../store/review';
import './ReviewForm.css';

function ReviewForm({ item, setModal }) {
    const dispatch = useDispatch();
    const [content, setContent] = useState("");
    const user_id = useSelector(state => state?.session?.user?.id);
    const [errors, setErrors] = useState([]);



    const reviewSubmit = async e => {
        e.preventDefault();
        let newReview = {
            content,
            user_id,
            item_id: item?.id,
            created_at: new Date()
        }
        await dispatch(addOneReviewThunk(item?.id,newReview))
            .then((res) => {
                if (!res?.ok) {
                    setErrors(res?.errors)
                } else {
                    setContent("")
                    setErrors([])
                }
            })
    }

    return (
        <div id="review-display">
            <h3>Create a Review</h3>
            <form id="add-review-form" onSubmit={reviewSubmit}>
                <div id="add-errors">
                    {errors?.length > 0 && errors?.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <label>Content: </label>
                <textarea
                        id="add-item-name"
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                <button type='submit' id="submit-button">Add Review</button>
            </form>
        </div>
    )
}
export default ReviewForm;
