import axios from "axios";

const getOrdersRequest = async (workerId) => {
  const { data } = await axios.get(`/ordersRequest`);
  return data;
};

export default getOrdersRequest;
