import { ISignupFormType } from "../Types/Signup";
import { ILoginFormType } from "../Types/Login";
import axios from "../utils/axiosBase";
import { IActivateFormTypes } from "../Types/Activate";
import { IForgetPasswordFormTypes } from "../Types/ForgetPassword";

const additionalData = {
  device_token:
    "fDx-Ei9JAqw:APA91bGXMYyQnQWVI5Fhacc30qNAfx5Ev4tYp7_8hbUQCi8h55LL4aEVbTAKZ4FMEFq79OCykOrcauufdo7DLtiE-Mqi8_jWlZDCHBEQZ41QIJXa0mFPVWQmttgWKn6TnWpJg71X_zcW",
  type: "android",
};

export const SignupHandler = async (body: ISignupFormType) => {
  const { data } = await axios.post("auth/signup", { ...body });

  return data;
};

export const LoginHandler = async (body: ILoginFormType) => {
  const { data } = await axios.post("auth/login", {
    ...body,
    ...additionalData,
  });

  return data;
};

export const verifyAccountHandler = async (body: IActivateFormTypes) => {
  const { data } = await axios.post("auth/verify", {
    ...body,
    ...additionalData,
  });

  return data;
};

export const forgetPasswordHandler = async (body: IForgetPasswordFormTypes) => {
  const { data } = await axios.post("auth/send_code", body);

  return data;
};

export const passwordCodeHandler = async (body: IActivateFormTypes) => {
  const { data } = await axios.post("auth/check_code", body);

  return data;
};
