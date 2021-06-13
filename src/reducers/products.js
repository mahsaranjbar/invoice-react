import {
    CREATE_PRODUCT,
    DELETE_PRODUCT,
    RETRIEVE_PRODUCTS
  } from '../actions/types';
  
const initialState = [];

const productReducer = (products = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_PRODUCT:
            return [...products, payload];

        case RETRIEVE_PRODUCTS:
            return payload;

        case DELETE_PRODUCT:
            return products.filter(({ id }) => id !== payload.id);

        default:
            return products;
    }
};

export default productReducer;