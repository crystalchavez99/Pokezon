const GET_REVIEWS = 'review/GET_REVIEWS';
const GET_SINGLE_REVIEW = 'review/GET_SINGLE_REVIEW';
const ADD_REVIEW = 'review/ADD_REVIEW';
const UPDATE_REVIEW = 'review/ADD_REVIEW';
const DELETE_REVIEW = 'review/DELETE_REVIEW';

const getReviews = (reviews) =>({
    type: GET_REVIEWS,
    payload: reviews
})

const getOneReview = (review) => ({
    type: GET_SINGLE_REVIEW,
    payload: review
})

const addOneReview = (review) =>({
    type: ADD_REVIEW,
    payload: review
})

const updateReview = (review) =>({
    type: UPDATE_REVIEW,
    payload: review
})
const deleteReview = (review) =>({
    type: DELETE_REVIEW,
    payload: review
})


export const getAllReviewsThunk = () => async dispatch =>{
    const response = await fetch('/api/reviews/')
    if(response.ok){
        const reviews = await response.json()
        dispatch(getReviews(reviews.reviews))
        return reviews
    }
    return response;
}

const initialState = {};

const reviewsReducer = (state = initialState, action) =>{
    let newState;
    switch(action.type){
        case GET_REVIEWS:
            newState = {...state}
            action.payload.forEach(review => newState[review.id] = review)
            return {...newState,...state}
        default:
            return state;
    }
}

export default reviewsReducer;
