import actionStrings from "../action/actionStrings";

const initialState = {
  sizeProduct: [],
  isLoading: false,
  isError: false,
  error: null,
};

const getSizeProductReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case actionStrings.getSizeProduct + actionStrings.pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case actionStrings.getSizeProduct + actionStrings.rejected:
      const errorResponse = action.payload;
      const errorMessage = errorResponse.data.msg;
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        error: errorMessage,
      };
    case actionStrings.getSizeProduct + actionStrings.fulfilled:
      const response = action.payload;
      const result = response.data.data;
      console.log('>>>>>>>>>>>>>>>>>>',result);
      return {
        ...prevState,
        isLoading: false,
        sizeProduct: result,
      };
    default:
        return prevState;
  }
};

export default getSizeProductReducer;