import { RestRequest } from "./RestRequest";
import { GET_ALL_WITHDRAWS } from "./types";

export const addNewWithdraw = (newValue) => (dispatch) =>
  RestRequest(
    "/api/withdraw",
    "POST",
    newValue,
    "Add new withdraw success"
  )(dispatch).catch((error) => {
    return Promise.reject(error);
  });

export const listAllWithdraws = () => (dispatch, getState) =>
  RestRequest(
    "/api/withdraw/",
    "GET",
    null,
    "get all withdraws success"
  )(dispatch, getState)
    .then((data) => {
      dispatch({
        type: GET_ALL_WITHDRAWS,
        payload: data,
      });
    })
    .catch((error) => {
      return Promise.reject(error);
    });
