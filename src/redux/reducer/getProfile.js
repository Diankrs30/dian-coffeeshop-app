import actionStrings from "../action/actionStrings";

const initialState = {
  profile: [],
  isLoading: false,
  isError: false,
  err: null,
};

const getProfileReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case actionStrings.getProfile + actionStrings.pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case actionStrings.getProfile + actionStrings.rejected:
      const errorResponse = action.payload;
      const errorMessage = errorResponse.data.msg;
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        err: errorMessage,
      };
    case actionStrings.getProfile + actionStrings.fulfilled:
      const response = action.payload;
      const result = response.data.data[0];
      return {
        ...prevState,
        isLoading: false,
        profile: result,
      };
    default:
      return prevState;
  }
};

export default getProfileReducer;