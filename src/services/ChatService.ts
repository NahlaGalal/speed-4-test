import { IChat } from "../Types/Chat";
import { IChatService } from "../Types/Chat";
import { IChatDetails, ISendMessageFormTypes } from "../Types/ChatMessage";
import axios from "../utils/axiosBase";

export const getChatsHandler = async (url?: string): Promise<IChatService> => {
  const {
    data: { data, meta },
  } = await axios.get(url || "/chats");

  return { data, meta };
};

export const getChatDetailsHandler = async (
  productId: string,
  receiverId: string
): Promise<IChatDetails["messages"]> => {
  const {
    data: { data },
  } = await axios.get(`/chats/${productId}/${receiverId}`);

  return data;
};

export const sendMessageHandler = async (body: ISendMessageFormTypes) => {
  const {
    data: { data },
  } = await axios.post(`/chats`, body);

  return data;
};
