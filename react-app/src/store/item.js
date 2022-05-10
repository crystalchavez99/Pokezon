const GET_ITEMS = 'item/GET_ITEMS';
const GET_SINGLE_ITEM = 'item/GET_SINGLE_ITEM';

const getItems = (items) =>({
    type: GET_ITEMS,
    payload: items
})

const getOneItem = (item) => ({
    type: GET_SINGLE_ITEM,
    payload: item
})
