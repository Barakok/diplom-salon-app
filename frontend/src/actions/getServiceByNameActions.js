import axios from "axios";

const getServiceByName = async (miniServiceName) => {
  const { data } = await axios.get(`/miniServiceByName/${miniServiceName}`);

  return data;
};

export default getServiceByName;
