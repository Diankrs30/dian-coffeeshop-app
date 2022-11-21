// import { getProfile } from "../../utils/api";
import actionStrings from "./actionStrings";

const cartAction = (payload) => {
  return {
    type: actionStrings.cart,
    payload,
  };
};

export default cartAction;