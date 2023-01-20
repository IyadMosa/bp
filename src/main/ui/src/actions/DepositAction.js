import { RestRequest } from "./RestRequest";
import {
  GET_ALL_DEPOSIT,
  GET_ALL_DEPOSITS_POINTS_BY_DATE,
  GET_ALL_DEPOSITS_POINTS_BY_PERSON,
  GET_ALL_WITHDRAWS_POINTS_BY_REASON,
  GET_DEPOSIT_POINT,
} from "./types";

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
export const listPointsByPerson = () => (dispatch, getState) =>
  RestRequest(
    "/api/deposit/points-by-person",
    "GET",
    null,
    "get deposit points success"
  )(dispatch, getState)
    .then((data) => {
      dispatch({
        type: GET_ALL_DEPOSITS_POINTS_BY_PERSON,
        payload: data,
      });
    })
    .catch((error) => {
      return Promise.reject(error);
    });

export const getDepositPoint = () => (dispatch, getState) =>
  RestRequest(
    "/api/deposit/point",
    "GET",
    null,
    "get deposit point success"
  )(dispatch, getState)
    .then((data) => {
      dispatch({
        type: GET_DEPOSIT_POINT,
        payload: data,
      });
    })
    .catch((error) => {
      return Promise.reject(error);
    });

export const listPointsByDate = () => (dispatch, getState) =>
  RestRequest(
    "/api/deposit/points-by-date",
    "GET",
    null,
    "get deposit points success"
  )(dispatch, getState)
    .then((data) => {
      dispatch({
        type: GET_ALL_DEPOSITS_POINTS_BY_DATE,
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
