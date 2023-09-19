import {RestRequest} from "./RestRequest";
import {CONFIGURATION_FILES_GET_ALL} from "./types";

export const listPersons = () => (dispatch, getState) =>
    RestRequest(
        "/api/person/",
        "GET",
        null,
        "get persons success"
    )(dispatch, getState)
        .then((data) => {
            dispatch({
                type: CONFIGURATION_FILES_GET_ALL,
                payload: data,
            });
        })
        .catch((error) => {
            return Promise.reject(error);
        });