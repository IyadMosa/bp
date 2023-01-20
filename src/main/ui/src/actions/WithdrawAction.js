import { RestRequest } from "./RestRequest";
import {
  GET_ALL_WITHDRAWS,
  GET_ALL_WITHDRAWS_POINTS_BY_REASON,
  GET_WITHDRAW_POINT,
} from "./types";

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
    "get withdraws success"
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

export const listPointsByReason = () => (dispatch, getState) =>
  RestRequest(
    "/api/withdraw/points-by-reason",
    "GET",
    null,
    "get withdraws points success"
  )(dispatch, getState)
    .then((data) => {
      dispatch({
        type: GET_ALL_WITHDRAWS_POINTS_BY_REASON,
        payload: data,
      });
    })
    .catch((error) => {
      return Promise.reject(error);
    });

export const getWithdrawPoint = () => (dispatch, getState) =>
  RestRequest(
    "/api/withdraw/point",
    "GET",
    null,
    "get withdraw point success"
  )(dispatch, getState)
    .then((data) => {
      dispatch({
        type: GET_WITHDRAW_POINT,
        payload: data,
      });
    })
    .catch((error) => {
      return Promise.reject(error);
    });
export const deleteWithdraw = (value) => (dispatch) =>
  RestRequest(
    "/api/withdraw",
    "DELETE",
    value,
    "Delete withdraw success"
  )(dispatch).catch((error) => {
    return Promise.reject(error);
  });

export const deleteWithdraws = () => (dispatch, getState) =>
  RestRequest(
    "/api/withdraw/all",
    "DELETE",
    null,
    "Delete withdraws success"
  )(dispatch, getState).catch((error) => {
    return Promise.reject(error);
  });
