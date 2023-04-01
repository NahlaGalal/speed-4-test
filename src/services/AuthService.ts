import { ISignupFormType } from "../Types/Signup";
import axios from "../utils/axiosBase";

export const SignupHandler = async (body: ISignupFormType) => {
  const { data } = await axios.post("auth/signup", {...body});

  return data
}