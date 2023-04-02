import { ICategory } from "./Category";
import { IProduct } from "./Product";
import { ISlider } from "./Slider";

export interface IHomeDetails {
  data: {
    categories: ICategory[];
    latest_auctions: IProduct[];
    latest_products: IProduct[];
    slider: ISlider[];
  };
  unreaded_message_count: number;
}
