import {
  LOADING_LIST_SERVICE_DETAIL_FAIL,
  LOADING_LIST_SERVICE_DETAIL_REQUEST,
  LOADING_LIST_SERVICE_DETAIL_SUCCESS,
} from "../actions/serviceActions";

const initialState = {
  serviceDetail: [],
  loading: true,
};

const loadingServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    // case LOADING_LIST_SERVICES_REQUEST:
    //   return {loading: true, services: []};
    // case LOADING_LIST_SERVICES_SUCCESS:
    //   return {loading: false, services: action.payload};
    // case LOADING_LIST_SERVICES_FAIL:
    //   return {loading: false, error: action.payload};
    case LOADING_LIST_SERVICE_DETAIL_REQUEST:
      return { loading: true, servicesDetail: [] };
    case LOADING_LIST_SERVICE_DETAIL_SUCCESS:
      return { loading: false, servicesDetail: action.payload };
    case LOADING_LIST_SERVICE_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default loadingServiceReducer;
