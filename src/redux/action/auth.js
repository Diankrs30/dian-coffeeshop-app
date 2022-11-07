import { login, signup } from "../../utils/api";
import actionStrings from "./actionStrings";

const loginAction = (body) => {
  return {
    type: actionStrings.login,
    payload: login(body),
  };
};

const signUpAction = (body) => {
  return {
    type: actionStrings.signUp,
    payload: signup(body),
  };
};

const authAction = {
  loginAction,
  signUpAction,
};

export default authAction;
