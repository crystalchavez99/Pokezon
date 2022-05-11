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
