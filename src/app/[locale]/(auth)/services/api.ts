import { ApiUrls } from "@/config/url";
import api from "@/lib/https/axios";
import { LoginInput } from "../interfaces/type";

export const LoginApi = async (payload: LoginInput) => {
  const data: any = await api.post(ApiUrls.login, { ...payload });
  return data?.data;
};
