import { createTransaction, deleteHistory, getHistory } from "../../utils/api";
import actionStrings from "./actionStrings";

const createTransactionAction = (body) => {
  return {
    type: actionStrings.transaction,
    payload: createTransaction(body),
  };
};

const getHistoryAction = (param) => {
  return {
    type: actionStrings.getHistory,
    payload: getHistory(param),
  }
}
const deleteHistoryAction = (id) => {
  return {
    type: actionStrings.deleteHistory,
    payload: deleteHistory(id),
  }
}

const transactionAction = {
    createTransactionAction,
    getHistoryAction,
    deleteHistoryAction
};

export default transactionAction;
