import { ICategory } from "./Category";
import { IUser } from "./User";

export interface IProduct {
  auction_id: number | null;
  bid_value: number | null;
  bidders_count: number;
  category: ICategory | null;
  end_bid_date: string | null;
  id: number;
  is_auction_finished: boolean;
  is_bid: boolean;
  is_direct_sale: boolean;
  is_fav: boolean;
  last_bid_price: number | null;
  main_image: string;
  name: string;
  product_price: number;
  qty: number;
  rate: number;
  time_remaining: number | null;
  user: IUser;
}
