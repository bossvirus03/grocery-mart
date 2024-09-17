import { ApiUrls } from "@/config/url";
import api from "@/lib/https/axios";
import { LoginInput, RegisterInput } from "../interfaces/type";

export const LoginApi = async (payload: LoginInput) => {
  const data: any = await api.post(ApiUrls.login, { ...payload });
  return data?.data;
};

export const RegisterApi = async (payload: RegisterInput) => {
  const data: any = await api.post(ApiUrls.register, { ...payload });
  return data?.data;
};
