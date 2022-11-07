import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import logger from "redux-logger";
import rpm from "redux-promise-middleware";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// import counterReducer from "./reducer/counter";
import getProfileReducer from "./reducer/getProfile";
import getAllProductReducer from "./reducer/getAllProduct";
import getDetailProductReducer from "./reducer/getDetailProduct";
import getSizeProductReducer from "./reducer/getSizeProduct";
import getDeliveryMethodReducer from "./reducer/getDeliveryMethod";
import searchReducer from "./reducer/search";
import cartReducer from "./reducer/cart";
import getHistoryReducer from "./reducer/getHistory";
import getCategoryReducer from "./reducer/getCategory";

const persistConfig = {
  key: "root",
  storage: storage,
};

const middleware = applyMiddleware(rpm, logger);
const reducers = combineReducers({
  //   counter: counterReducer,
  getProfile: getProfileReducer,
  getAllProduct: getAllProductReducer,
  getDetailProduct: getDetailProductReducer,
  getSizeProduct: getSizeProductReducer,
  getDeliveryMethod: getDeliveryMethodReducer,
  search: searchReducer,
  cart: cartReducer,
  getHistory: getHistoryReducer,
  getCategory: getCategoryReducer,
});

const pReducer = persistReducer(persistConfig, reducers);
const store = createStore(pReducer, middleware);

export default store;
export const persistor = persistStore(store);
