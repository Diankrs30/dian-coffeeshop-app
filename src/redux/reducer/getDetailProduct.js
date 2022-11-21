import actionStrings from "../action/actionStrings";

const initialState = {
  detailProduct: {},
  isLoading: false,
  isError: false,
  error: null,
};

const getDetailProductReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case actionStrings.getDetailProduct + actionStrings.pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case actionStrings.getDetailProduct + actionStrings.rejected:
      const errorResponse = action.payload;
      const errorMessage = errorResponse.response.data.status;
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        error: errorMessage,
      };
    case actionStrings.getDetailProduct + actionStrings.fulfilled:
      const response = action.payload;
      const result = response.data.data[0];
      console.log(response);
      return {
        ...prevState,
        isLoading: false,
        detailProduct: result,
      };
    default:
        return prevState;
  }
};

export default getDetailProductReducer;