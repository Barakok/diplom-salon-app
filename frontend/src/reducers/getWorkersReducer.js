import {
  LOADING_WORKERS_REQUEST,
  LOADING_WORKERS_SUCCESS,
  LOADING_WORKERS_FAIL,
} from "../actions/getAllWorkersActions";

const initialState = {
  allWorkers: [],
  loading: true,
};

const getWorkersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_WORKERS_REQUEST:
      return { loading: true, allWorkers: [] };
    case LOADING_WORKERS_SUCCESS:
      return { loading: false, allWorkers: action.payload };
    case LOADING_WORKERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getWorkersReducer;
