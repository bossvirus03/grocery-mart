import { LoginBodyType } from "@/lib/schemas/schema-validation";
import api from "../axios";

const authApiRequest = {
  Login: (body: LoginBodyType) => api.post<any>("/auth/login", body),
  NextServerLogin: (body: LoginBodyType) =>
    api.post<any>("/auth/login", body, {}, { baseUrl: "" }),
  NextServerRefresh: (refreshToken: string) =>
    api.post<any>(
      "/auth/refresh",
      {},
      {
        withCredentials: true,
        headers: {
          Cookie: `refreshToken=${refreshToken}`,
        },
      },
      { baseUrl: "" }
    ),
  NextSevrerLogout: (refreshToken: string) =>
    api.get(
      "/auth/logout",
      {
        withCredentials: true,
        headers: {
          Cookie: `refreshToken=${refreshToken}`,
        },
      },
      { baseUrl: "" }
    ),
};

export default authApiRequest;
