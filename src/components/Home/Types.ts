export interface IHomeDetails {
  data: {
    categories: ICategory[];
    latest_auctions: IProduct[];
    latest_products: IProduct[];
    slider: ISlider[];
  };
  unreaded_message_count: number;
}

export interface ICategory {
  id: number;
  image: string;
  name: string | null;
}

export interface IUser {
  id: number;
  email: string;
  image: string;
  phone: string;
  username: string;
}

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

export interface ISlider {
  id: number;
  image: string;
  link: string;
  name: string | null;
}
