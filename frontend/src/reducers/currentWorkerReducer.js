export const currentWorkerReducer = (state = { currentWorker: {} }, action) => {
  switch (action.type) {
    case "ADD_CURRENT_WORKER":
      return { loading: false, currentWorker: action.payload };
    default:
      return state;
  }
};
