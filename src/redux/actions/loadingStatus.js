import { SET_LOADING_STATUS } from "./actionType";

export const setLoading = (status) => ({
  type: SET_LOADING_STATUS,
  status: status,
});
