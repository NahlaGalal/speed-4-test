import { IChatService } from "../Types/Chat";
import axios from "../utils/axiosBase";

export const getChatsHandler = async (): Promise<IChatService> => {
  const {
    data: { data, meta },
  } = await axios.get("/chats", {
    headers: {
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc3BlZWQ0ZXZlci5lbHNhZWQuYWFpdC1kLmNvbVwvcHVibGljXC9hcHBcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjgwMzk3ODY0LCJleHAiOjE3MTE5MzM4NjQsIm5iZiI6MTY4MDM5Nzg2NCwianRpIjoicGhUOWFSUlNxcHdtRFVRWSIsInN1YiI6MTQxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.eJEBB_xRKj2yHQFxkkg9DbWUqtSOey-C45vGSssd1Jc`,
    },
  });

  return { data, meta };
};
