import actionStrings from "./actionStrings";

const counterUp = () => {
  return {
    type: actionStrings.counterUp,
  };
};

const counterDown = () => {
  return {
    type: actionStrings.counterDown,
  };
};

const counterReset = () => {
  return {
    type: actionStrings.counterReset,
  };
};

const counterActions = {
  counterUp,
  counterDown,
  counterReset,
};

export default counterActions;
