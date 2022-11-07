import {
  getProduct,
  getProductById,
  getSizeProduct,
  getDeliveryMethod,
  createProduct,
  editProduct,
  getCategory,
  deleteProduct,
} from "../../utils/api";
import actionStrings from "./actionStrings";

const getAllProductAction = (param) => {
  return {
    type: actionStrings.getAllProduct,
    payload: getProduct(param),
  };
};

const getDetailProductAction = (param) => {
  return {
    type: actionStrings.getDetailProduct,
    payload: getProductById(param),
  };
};

const getSizeProductAction = () => {
  return {
    type: actionStrings.getSizeProduct,
    payload: getSizeProduct(),
  };
};

const getDeliveryMethodAction = () => {
  return {
    type: actionStrings.getDeliveryMethod,
    payload: getDeliveryMethod(),
  };
};

const getCategoryAction = () => {
  return {
    type: actionStrings.getCategory,
    payload: getCategory(),
  };
};

const createProductAction = (body) => {
  return {
    type: actionStrings.createProduct,
    payload: createProduct(body),
  };
};

const editProductAction = (body, id) => {
  return {
    type: actionStrings.editProduct,
    payload: editProduct(body, id),
  };
};

const deleteProductAction = (id) => {
  return {
    type: actionStrings.deleteProduct,
    payload: deleteProduct(id),
  };
};

const searchAction = (param) => {
  return {
    type: actionStrings.search,
    payload: param,
  };
};

const productAction = {
  getAllProductAction,
  getDetailProductAction,
  getSizeProductAction,
  getDeliveryMethodAction,
  createProductAction,
  editProductAction,
  searchAction,
  getCategoryAction,
  deleteProductAction,
};

export default productAction;
