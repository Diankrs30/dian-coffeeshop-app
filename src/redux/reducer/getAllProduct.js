import actionStrings from "../action/actionStrings";

const initialState = {
  allProduct: [],
  meta:{},
  isLoading: false,
  isError: false,
  error: null,
};

const getAllProductReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case actionStrings.getAllProduct + actionStrings.pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case actionStrings.getAllProduct + actionStrings.rejected:
      const errorResponse = action.payload;
      const errorMessage = errorResponse.data.msg;
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        error: errorMessage,
      };
    case actionStrings.getAllProduct + actionStrings.fulfilled:
      const response = action.payload;
      const result = response.data.data;
      const meta = response.data.meta 
      console.log(response);
      return {
        ...prevState,
        isLoading: false,
        allProduct: result,
        meta
      };
    default:
        return prevState;
  }
};

export default getAllProductReducer;