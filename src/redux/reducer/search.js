import actionStrings from "../action/actionStrings";

const intialState = {
  params: {},
};

const searchReducer = (prevState = intialState, action) => {
    switch (action.type) {
      case actionStrings.search:
        console.log( prevState, action);
        const data= action.payload
        return {
          ...prevState,
          params: {...prevState.params,...data},
        };
      default :
            return prevState;
    }
};

export default searchReducer;
