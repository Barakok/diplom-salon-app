import axios from "axios";

const getOrdersForOneWorker = async (workerId) => {
  const { data } = await axios.post(`/ordersByWeek`, { _id: workerId });
  return data;
};

export default getOrdersForOneWorker;
