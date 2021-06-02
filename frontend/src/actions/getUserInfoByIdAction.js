import axios from "axios";

const getUserInfoById = async (userId) => {
  const { data } = await axios.get(`/user/${userId}`);
  return data;
};

export default getUserInfoById;
