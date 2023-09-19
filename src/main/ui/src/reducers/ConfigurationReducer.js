import {CONFIGURATION_FILES_GET_ALL} from "../actions/types";

const initialState = {
    allFiles: [],
};

export default function configurationReducer(state = initialState, action) {
    switch (action.type) {
        case CONFIGURATION_FILES_GET_ALL:
            return {
                ...state,
                allFiles: action.payload,
            };
        default:
            return state;
    }
}
