import { ISignupFormType } from "../Types/Signup";
import { ILoginFormType } from "../Types/Login";
import axios from "../utils/axiosBase";

export const SignupHandler = async (body: ISignupFormType) => {
  const { data } = await axios.post("auth/signup", { ...body });

  return data;
};

export const LoginHandler = async (body: ILoginFormType) => {
  const { data } = await axios.post("auth/login", {
    ...body,
    device_token:
      "fDx-Ei9JAqw:APA91bGXMYyQnQWVI5Fhacc30qNAfx5Ev4tYp7_8hbUQCi8h55LL4aEVbTAKZ4FMEFq79OCykOrcauufdo7DLtiE-Mqi8_jWlZDCHBEQZ41QIJXa0mFPVWQmttgWKn6TnWpJg71X_zcW",
    type: "android",
  });

  return data;
};
