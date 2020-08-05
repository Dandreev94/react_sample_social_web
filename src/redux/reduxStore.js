import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    dialogReducer,
    profileReducer,
    usersReducer,
    authReducer
});

let store = createStore(reducers);

export default store;