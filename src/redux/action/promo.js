import { createPromo, editPromo } from "../../utils/api";
import actionStrings from "./actionStrings";

const createPromoAction = (body) => {
  return {
    type: actionStrings.createPromo,
    payload: createPromo(body),
  };
};

const editPromoAction = (body, id) => {
  return {
    type: actionStrings.editPromo,
    payload: editPromo(body, id),
  };
};

const promoAction = {
  createPromoAction,
  editPromoAction,
};

export default promoAction;
