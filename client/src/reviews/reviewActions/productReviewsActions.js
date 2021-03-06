import axios from 'axios';

const BASE_URL = '/proxy/api/fec2/hratx';

// Get reviews from API
const getProductReviews = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/reviews?product_id=${id}`);

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

// Get reviews metadata from API
const getProductReviewsMeta = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/reviews/meta?product_id=${id}`);

    dispatch({
      type: 'GET_PRODUCT_REVIEWS_META',
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: 'PRODUCT_REVIEWS_META_ERROR',
      payload: err
    });
  }
};

const addProductReview = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${BASE_URL}/reviews/`, data);

    dispatch({
      type: 'CREATE_PRODUCT_REVIEW',
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: 'PRODUCT_REVIEWS_ERROR',
      payload: err
    });
  }
};

const getProductRatings = (id) => {};

const addProductRating = (id) => {};

export {
  getProductReviews,
  getProductReviewsMeta,
  addProductReview,
  getProductRatings,
  addProductRating
};
