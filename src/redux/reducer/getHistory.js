import actionStrings from "../action/actionStrings";

const initialState = {
  history: [],
  meta:{},
  isLoading: false,
  isError: false,
  err: null,
};

const getHistoryReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case actionStrings.getHistory + actionStrings.pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case actionStrings.getHistory + actionStrings.rejected:
      const errorResponse = action.payload;
      const errorMessage = errorResponse.data.msg;
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        err: errorMessage,
      };
    case actionStrings.getHistory + actionStrings.fulfilled:
      const response = action.payload;
      const result = response.data.data;
      const meta = response.data.meta;
      return {
        ...prevState,
        isLoading: false,
        history: result,
        meta,
      };
    default:
      return prevState;
  }
};

export default getHistoryReducer;