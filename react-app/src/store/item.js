const GET_ITEMS = 'item/GET_ITEMS';
const GET_SINGLE_ITEM = 'item/GET_SINGLE_ITEM';
const ADD_ITEM = 'item/ADD_ITEM';

const getItems = (items) =>({
    type: GET_ITEMS,
    payload: items
})

const getOneItem = (item) => ({
    type: GET_SINGLE_ITEM,
    payload: item
})

const addOneItem = (item) =>({
    type: ADD_ITEM,
    payload: item
})


export const getAllItemsThunk = () => async dispatch =>{
    const response = await fetch('/api/items/')
    if(response.ok){
        const items = await response.json()
        dispatch(getItems(items.items))
        return items
    }
    return response;
}

export const getOneItemThunk = (itemId) => async dispatch =>{
    const response = await fetch(`/api/items/${itemId}`)
    if(response.ok){
        const item = await response.json();
        dispatch(getOneItem(item))
        return item
    }
    return response;
}

export const addOneItemThunk = (item) => async dispatch =>{
    const response = await fetch('/api/items/add_item',{
        method: 'POST',
        body: item
    })
    if (response.ok) {
        const newItem = await response.json();
        dispatch(addOneItem(newItem));
      }else if (response.status < 500) {
        const data = await response.json();
        return data
      }
      return response;
}

const initialState = {};

const itemsReducer = (state = initialState, action) =>{
    let newState;
    switch(action.type){
        case GET_ITEMS:
            newState = {...state}
            action.payload.forEach(item => newState[item.id] = item)
            return {...newState,...state}
        case GET_SINGLE_ITEM:
            newState = {...state}
            newState[action.payload.id] = action.payload;
            return newState;
        case ADD_ITEM:
            newState = {[action.payload.id]: action.payload,...state}
            return newState;
        default:
            return state;
    }
}

export default itemsReducer;
