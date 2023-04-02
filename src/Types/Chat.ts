import { IProduct } from "./Product";
import { IUser } from "./User";

export interface IChat {
  chat_id: number;
  product_id: number;
  receiver_id: number;
  product: IProduct;
  sender_data: IUser;
  receiver_data: IUser;
  message_type: string;
  last_message: string;
  read_at: string;
  is_read: boolean;
  created_at: string;
  unreaded_message_count: number;
}

export interface IPagination {
  current_page: number;
  from: number;
  last_page: number;
  links: {
    url: string | null;
    label: string;
    active: boolean;
  }[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface IChatService {
  data: IChat[];
  meta: IPagination;
}
