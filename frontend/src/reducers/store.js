import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userRegistrationReducer, userLoginReducer } from "./userReducers";
import loadingServiceReducer from "./serviceReducers";
import { addOrderReducer } from "./addOrderReducer";
import loadingOrdersReducer from "./loadingOrderReducer";
import getWorkersReducer from "./getWorkersReducer";
import { currentWorkerReducer } from "./currentWorkerReducer";
import loadingOrdersByDateReducer from "./loadingOrderByDateReducer";
import loadingOrdersByWeekeducer from "./loadingOrdersByWeekForOneWorkerReducer";
import getAllWorkersReducer from "./getAllWorkersReducer";

const initialState = {
  userLogin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};

const rootReducer = combineReducers({
  userRegister: userRegistrationReducer,
  userLogin: userLoginReducer,
  services: loadingServiceReducer,
  addOrder: addOrderReducer,
  loadingOrders: loadingOrdersReducer,
  workers: getWorkersReducer,
  currentWorker: currentWorkerReducer,
  ordersByDate: loadingOrdersByDateReducer,
  allOrdersByWeek: loadingOrdersByWeekeducer,
  allWorkers: getAllWorkersReducer,
});

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
