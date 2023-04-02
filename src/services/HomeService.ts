import { IHomeDetails } from "../Types";
import axios from "../utils/axiosBase";

export const getHomeDetails = async (): Promise<IHomeDetails> => {
  const {
    data: { data, unreaded_message_count },
  } = await axios.get("/home");

  return { data, unreaded_message_count };
};
