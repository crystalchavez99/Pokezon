import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateOneReviewThunk,getOneReviewThunk } from '../../store/review';

function ReviewEdit({ review }) {
    const dispatch = useDispatch();
    const [content, setContent] = useState(review?.content);
    const user_id = useSelector(state => state.session.user.id);
    const [errors, setErrors] = useState([]);


    const reviewSubmit = async e => {
        e.preventDefault();
        let updatedReview = {
            ...review,
            content,
            updated_at: new Date()
        }
        await dispatch(updateOneReviewThunk(updatedReview))
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
        <>
            <h1>Edit a Review</h1>
            <form id="edit-review-form" onSubmit={reviewSubmit}>
                <div>
                    {errors?.length > 0 && errors?.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <label>Content: </label>
                <input
                        id="add-item-name"
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                <button type='submit' id="submit-button">Edit Review</button>
            </form>
        </>
    )
}
export default ReviewEdit;
