import { IProduct } from "../Types";
import axios from "../utils/axiosBase";

export const getFavouriteProducts = async (): Promise<IProduct[]> => {
  const {
    data: { data },
  } = await axios.get("/myFavourites");

  return data;
};

export const toggleFavouritesHandler = async (
  product_id: number
): Promise<{ is_fav: boolean }> => {
  const {
    data: { data },
  } = await axios.post("/add-to-fav", { product_id });

  return data;
};
