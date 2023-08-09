import {RestRequest, RestRequestWithSave} from "./RestRequest";
import { GET_ALL_PERSONS } from "./types";

export const exportConfiguration = () => (dispatch) =>
  RestRequestWithSave(
    "/api/database",
    "GT",
    null,
    "backup.zip"
  )(dispatch).catch((error) => {
    return Promise.reject(error);
  });

