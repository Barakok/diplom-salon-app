import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {userRegistrationReducer} from './userReducers';
import serviceReducer from "./serviceReducers";


const rootReducer = combineReducers({userRegistrationReducer, serviceReducer});


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));