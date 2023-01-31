import { RestRequest } from "./RestRequest";
import { DASHBOARD_GET_ALL } from "./types";

export const listPointsAllComponents = (from, to) => (dispatch, getState) =>
  RestRequest(
    "/api/charts/dashboard/all",
    "POST",
    { from, to },
    "get all components points success"
  )(dispatch, getState)
    .then((data) => {
      dispatch({
        type: DASHBOARD_GET_ALL,
        payload: data,
      });
    })
    .catch((error) => {
      return Promise.reject(error);
    });
