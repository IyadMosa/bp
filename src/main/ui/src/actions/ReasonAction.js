import { RestRequest } from "./RestRequest";
import { GET_ALL_REASONS } from "./types";

export const addReason = (value) => (dispatch) =>
  RestRequest(
    "/api/reason",
    "POST",
    value,
    "Add new reason success"
  )(dispatch).catch((error) => {
    return Promise.reject(error);
  });

export const listReasons = () => (dispatch, getState) =>
  RestRequest(
    "/api/reason/",
    "GET",
    null,
    "get reasons success"
  )(dispatch, getState)
    .then((data) => {
      dispatch({
        type: GET_ALL_REASONS,
        payload: data,
      });
    })
    .catch((error) => {
      return Promise.reject(error);
    });
export const deleteReason = (value) => (dispatch) =>
  RestRequest(
    "/api/reason",
    "DELETE",
    value,
    "Delete reason success"
  )(dispatch).catch((error) => {
    return Promise.reject(error);
  });

export const deleteReasons = () => (dispatch, getState) =>
  RestRequest(
    "/api/reason/all",
    "DELETE",
    null,
    "Delete reasons success"
  )(dispatch, getState).catch((error) => {
    return Promise.reject(error);
  });
