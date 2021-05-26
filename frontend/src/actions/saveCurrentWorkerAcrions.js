export const saveCurrentWorker = (worker) => {
  return {
    type: "ADD_CURRENT_WORKER",
    payload: worker,
  };
};
