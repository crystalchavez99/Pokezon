import React, { useEffect,useState } from 'react';
import { useDispatch } from "react-redux";
import { updateOneReviewThunk,getOneReviewThunk } from '../../store/review';
import './ReviewForm.css';

function ReviewEdit({review, setModal}) {
    const dispatch = useDispatch();
    const [content, setContent] = useState(review?.content);
    const [errors, setErrors] = useState([]);



    useEffect(()=>{
        dispatch(getOneReviewThunk(review))
    },[dispatch,review])

    const reviewSubmit = async e => {
        e.preventDefault();
        let updatedReview = {
            ...review,
            content,
            updated_at: new Date()
        }
        dispatch(updateOneReviewThunk(updatedReview))
            .then((res) => {
                if (!res?.ok) {
                    setErrors(res?.errors)
                } else {
                    setContent("")
                    setErrors([])
                    setModal(false)
                }
            })
    }

    return (
            <form id="edit-review-form" onSubmit={reviewSubmit}>
                <div id="edit-errors">
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
                <button type='submit' id="submit-button">Edit Review</button>
            </form>
    )
}
export default ReviewEdit;
