import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  RETRIEVE_PRODUCTS
} from './types';

import ProductService from '../services/ProductService';

export const retrieveProducts = () => async (dispatch) => {
  try {
    const res = await ProductService.getAll();

    dispatch({
      type: RETRIEVE_PRODUCTS,
      payload: res.data,
    });

    console.log(res.data)

  } catch (err) {
    console.log(err);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await ProductService.remove(id);
    dispatch({
      type: DELETE_PRODUCT,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const createProduct = (product) => async (dispatch) => {
  try {
    const res = await ProductService.create(product);

    dispatch({
      type: CREATE_PRODUCT,
      payload: res.data,
    });

  } catch (err) {
    console.log(err);
  }
};
