import { getProfile } from "../../utils/api";
import actionStrings from "./actionStrings";;

const getProfileAction = () => {
  return {
    type: actionStrings.getProfile,
    payload: getProfile(),
  };
};

const userAction = {
    getProfileAction,
};

export default userAction;