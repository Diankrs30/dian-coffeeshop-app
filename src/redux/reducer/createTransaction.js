import actionStrings from "../action/actionStrings";

const initialState = {
  transaction: [],
  isLoading: false,
  isError: false,
  error: null,
};

const createTransactionReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case actionStrings.transaction + actionStrings.pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case actionStrings.transaction + actionStrings.rejected:
      const errorResponse = action.payload;
      const errorMessage = errorResponse.data.msg;
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        error: errorMessage,
      };
    case actionStrings.transaction + actionStrings.fulfilled:
      const response = action.payload;
      const result = response.data.data;
      console.log(response);
      return {
        ...prevState,
        isLoading: false,
        transaction: result,
      };
    default:
        return prevState;
  }
};

export default createTransactionReducer;