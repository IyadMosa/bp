import { RestRequest } from "./RestRequest";
import {
  GET_ALL_WITHDRAWS,
  GET_ALL_WITHDRAWS_POINTS_BY_REASON,
  GET_ALL_WITHDRAWS_POINTS_BY_REASON_MAJOR,
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

//Charts
export const listPointsByReasonMajor = (from, to) => (dispatch, getState) =>
  RestRequest(
    "/api/charts/withdraw/points-by-reason/true",
    "GET",
    { from, to },
    "get withdraws points success"
  )(dispatch, getState)
    .then((data) => {
      dispatch({
        type: GET_ALL_WITHDRAWS_POINTS_BY_REASON_MAJOR,
        payload: data,
      });
    })
    .catch((error) => {
      return Promise.reject(error);
    });
export const listPointsByReason = (from, to) => (dispatch, getState) =>
  RestRequest(
    "/api/charts/withdraw/points-by-reason/false",
    "GET",
    { from, to },
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

export const getWithdrawPoint = (from, to) => (dispatch, getState) =>
  RestRequest(
    "/api/charts/withdraw/point",
    "GET",
    { from, to },
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
