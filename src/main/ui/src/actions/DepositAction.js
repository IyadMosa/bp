import { RestRequest } from "./RestRequest";
import { GET_ALL_DEPOSIT } from "./types";

export const addNewDeposit = (newDeposit) => (dispatch) =>
  RestRequest(
    "/api/deposit",
    "POST",
    newDeposit,
    "Add new deposit success"
  )(dispatch).catch((error) => {
    return Promise.reject(error);
  });

export const listAllDeposits = () => (dispatch, getState) =>
  RestRequest(
    "/api/deposit/",
    "GET",
    null,
    "get all deposits success"
  )(dispatch, getState)
    .then((data) => {
      dispatch({
        type: GET_ALL_DEPOSIT,
        payload: data,
      });
    })
    .catch((error) => {
      return Promise.reject(error);
    });

export const deleteDeposit = (value) => (dispatch) =>
  RestRequest(
    "/api/deposit",
    "DELETE",
    value,
    "Delete deposit success"
  )(dispatch).catch((error) => {
    return Promise.reject(error);
  });

export const deleteDeposits = () => (dispatch, getState) =>
  RestRequest(
    "/api/deposit/all",
    "DELETE",
    null,
    "Delete deposits success"
  )(dispatch, getState).catch((error) => {
    return Promise.reject(error);
  });
