export const AddToCart = obj => ({
    type: 'ADD_TO_CART',
    payload: obj,
});
export const RemoveFromCart = id => ({
    type: 'REMOVE_FROM_CART',
    payload: id,
});
