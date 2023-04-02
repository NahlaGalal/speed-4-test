import {
  ISignupFormType,
  ILoginFormType,
  IActivateFormTypes,
  IForgetPasswordFormTypes,
  IResetPasswordFormType,
} from "../Types";
import axios from "../utils/axiosBase";

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

  localStorage.setItem("user", JSON.stringify(data.data))

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

export const resetPasswordHandler = async (body: IResetPasswordFormType) => {
  const { data } = await axios.post("auth/reset_password", body);

  return data;
};
