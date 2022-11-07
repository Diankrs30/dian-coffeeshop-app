import actionStrings from "../action/actionStrings";

const initialState = {
  deliveryMethod: [],
  isLoading: false,
  isError: false,
  error: null,
};

const getDeliveryMethodReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case actionStrings.getDeliveryMethod + actionStrings.pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case actionStrings.getDeliveryMethod + actionStrings.rejected:
      const errorResponse = action.payload;
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>',errorResponse);
      const errorMessage = errorResponse.data.msg;
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        error: errorMessage,
      };
    case actionStrings.getDeliveryMethod + actionStrings.fulfilled:
      const response = action.payload;
      const result = response.data.data;
      console.log(response);
      return {
        ...prevState,
        isLoading: false,
        deliveryMethod: result,
      };
    default:
        return prevState;
  }
};

export default getDeliveryMethodReducer;