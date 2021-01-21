import axios from 'axios';

import token from '../../../config/config.js';

const BASE_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hratx';

// Get reviews from API
const getProductReviews = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/reviews?product_id=${id}`, {
      headers: {
        Authorization: token
      }
    });

    dispatch({
      type: 'GET_PRODUCT_REVIEWS',
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: 'PRODUCT_REVIEWS_ERROR',
      payload: err
    });
  }
};

const addProductReview = (id) => {};

const getProductRatings = (id) => {};

const addProductRating = (id) => {};

export {
  getProductReviews,
  addProductReview,
  getProductRatings,
  addProductRating
};
