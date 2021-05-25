import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {userRegistrationReducer, userLoginReducer} from './userReducers';
import loadingServiceReducer from "./serviceReducers";
import { addOrderReducer } from "./addOrderReducer";
import loadingOrdersReducer from "./loadingOrderReducer";


const rootReducer = combineReducers({
  userRegister: userRegistrationReducer,
  userLogin: userLoginReducer,
  services: loadingServiceReducer,
  addOrder: addOrderReducer,
  loadingOrders: loadingOrdersReducer});


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));