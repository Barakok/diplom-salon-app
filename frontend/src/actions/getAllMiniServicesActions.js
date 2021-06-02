import axios from "axios";

const getAllMiniServices = async () => {
  const { data } = await axios.get(`/miniServices`);
  return data;
};

export default getAllMiniServices;
