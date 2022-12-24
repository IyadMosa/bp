import { RestRequest } from "./RestRequest";
import { GET_ALL_PERSONS } from "./types";

export const addPerson = (value) => (dispatch) =>
  RestRequest(
    "/api/person",
    "POST",
    value,
    "Add new person success"
  )(dispatch).catch((error) => {
    return Promise.reject(error);
  });

export const listPersons = () => (dispatch, getState) =>
  RestRequest(
    "/api/person/",
    "GET",
    null,
    "get persons success"
  )(dispatch, getState)
    .then((data) => {
      dispatch({
        type: GET_ALL_PERSONS,
        payload: data,
      });
    })
    .catch((error) => {
      return Promise.reject(error);
    });
export const deletePerson = (value) => (dispatch) =>
  RestRequest(
    "/api/person",
    "DELETE",
    value,
    "Delete person success"
  )(dispatch).catch((error) => {
    return Promise.reject(error);
  });

export const deletePersons = () => (dispatch, getState) =>
  RestRequest(
    "/api/person/all",
    "DELETE",
    null,
    "Delete persons success"
  )(dispatch, getState).catch((error) => {
    return Promise.reject(error);
  });
