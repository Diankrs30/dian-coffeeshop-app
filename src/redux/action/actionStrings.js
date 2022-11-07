import { ActionType } from "redux-promise-middleware";

const actionStrings = {
  counterUp: "COUNTER_UP",
  counterDown: "COUNTER_DOWN",
  counterReset: "COUNTER_RESET",
  getProfile: "GET_PROFILE",
  getProduct: "GET_PRODUCT",
  getAllProduct: "GET_ALL_PRODUCT",
  getDetailProduct: "GET_DETAIL_PRODUCT",
  getSizeProduct: "GET_SIZE_PRODUCT",
  getDeliveryMethod: "GET_DELIVERY_METHOD",
  getHistory: "GET_HISTORY",
  getCategory: "GET_CATEGORY",
  transaction: "POST_TRANSACTION",
  login: "POST_LOGIN",
  signUp: "POST_SIGNUP",
  search: "SEARCH",
  cart: "CART",
  createProduct: "POST_PRODUCT",
  editProduct: "PATCH_PRODUCT",
  createPromo: "POST_PROMO",
  editPromo: "PATCH_PROMO",  
  deleteHistory: "DELETE_HISTORY",
  deleteProduct: "DELETE_PRODUCT",
  pending: `_${ActionType.Pending}`,
  fulfilled: `_${ActionType.Fulfilled}`,
  rejected: `_${ActionType.Rejected}`,
};

export default actionStrings;
