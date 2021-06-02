import axios from "axios";

const getAllMiniServices = async (order) => {
  const { data } = await axios.post(`/changeOrder`, order);
  return data;
};

export default getAllMiniServices;
