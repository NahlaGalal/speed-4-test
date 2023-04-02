import { IProduct } from "../Types";
import axios from "../utils/axiosBase";

export const getFavouriteProducts = async (): Promise<IProduct[]> => {
  const {
    data: { data },
  } = await axios.get("/myFavourites", {
    headers: {
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc3BlZWQ0ZXZlci5lbHNhZWQuYWFpdC1kLmNvbVwvcHVibGljXC9hcHBcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjgwMzk3ODY0LCJleHAiOjE3MTE5MzM4NjQsIm5iZiI6MTY4MDM5Nzg2NCwianRpIjoicGhUOWFSUlNxcHdtRFVRWSIsInN1YiI6MTQxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.eJEBB_xRKj2yHQFxkkg9DbWUqtSOey-C45vGSssd1Jc`,
    },
  });

  return data;
};

export const toggleFavouritesHandler = async (
  product_id: number
): Promise<{ is_fav: boolean }> => {
  const {
    data: { data },
  } = await axios.post(
    "/add-to-fav",
    { product_id },
    {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc3BlZWQ0ZXZlci5lbHNhZWQuYWFpdC1kLmNvbVwvcHVibGljXC9hcHBcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjgwMzk3ODY0LCJleHAiOjE3MTE5MzM4NjQsIm5iZiI6MTY4MDM5Nzg2NCwianRpIjoicGhUOWFSUlNxcHdtRFVRWSIsInN1YiI6MTQxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.eJEBB_xRKj2yHQFxkkg9DbWUqtSOey-C45vGSssd1Jc`,
      },
    }
  );

  return data;
};
