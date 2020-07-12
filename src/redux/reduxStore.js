import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    dialogReducer,
    profileReducer,
    usersReducer
});

let store = createStore(reducers);

export default store;