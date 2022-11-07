import actionStrings from "../action/actionStrings";

const intialState = {
  counter: 0,
};

const counterReducer = (prevState = intialState, action) => {
  if (action.type === actionStrings.counterUp)
    switch (action.type) {
      case actionStrings.counterUp:
        return {
          ...prevState,
          counter: prevState.counter + 1,
        };
      case actionStrings.counterDown:
        return {
          ...prevState,
          counter: prevState.counter - 1,
        };
      case actionStrings.counterReset:
        return {
          ...prevState,
          counter: intialState.counter,
        };
      default:
    }
};

export default counterReducer;
