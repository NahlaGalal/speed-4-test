import { IProduct } from "./Product";
import { IUser } from "./User";

export interface IChatMessage {
  chat_id: number;
  created_at: string;
  message: string;
  message_id: number;
  message_position: string;
  message_type: string;
  product: IProduct;
  read_at: string;
  sender_data: IUser;
  receiver_data: IUser;
  unreaded_message_count: number;
}

export interface IChatDetails {
  messages: IChatMessage[];
  productId: string;
  recieverId: string;
}
