import axios from "axios";

const deleteOrder = async (orderId) => {
  const { data } = await axios.get(`/deleteOrder/${orderId}`);
  return data;
};

export default deleteOrder;
