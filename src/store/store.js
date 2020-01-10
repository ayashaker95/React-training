import {createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';
import userReducer from "../reducers/reducer";

export default createStore(
    userReducer,
    {},
    applyMiddleware(logger)
);