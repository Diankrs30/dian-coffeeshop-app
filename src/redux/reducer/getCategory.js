import actionStrings from "../action/actionStrings";

const initialState = {
  category: [],
  isLoading: false,
  isError: false,
  error: null,
};

const getCategoryReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case actionStrings.getCategory + actionStrings.pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case actionStrings.getCategory + actionStrings.rejected:
      const errorResponse = action.payload;
      const errorMessage = errorResponse.data.msg;
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        error: errorMessage,
      };
    case actionStrings.getCategory + actionStrings.fulfilled:
      const response = action.payload;
      const result = response.data.data;
      console.log('>>>>>>>>>>>>>>>>>>',result);
      return {
        ...prevState,
        isLoading: false,
        category: result,
      };
    default:
        return prevState;
  }
};

export default getCategoryReducer;