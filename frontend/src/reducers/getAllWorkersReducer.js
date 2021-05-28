import {
  LOADING_ALLWORKERS_REQUEST,
  LOADING_ALLWORKERS_SUCCESS,
  LOADING_ALLWORKERS_FAIL,
} from "../actions/getAllWorkersActions";

const initialState = {
  allWorkers: [],
  loading: true,
};

const getAllWorkersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_ALLWORKERS_REQUEST:
      return { loading: true, allWorkers: [] };
    case LOADING_ALLWORKERS_SUCCESS:
      return { loading: false, allWorkers: action.payload };
    case LOADING_ALLWORKERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getAllWorkersReducer;
