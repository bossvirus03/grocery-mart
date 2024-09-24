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
  NextSevrerLogout: async (refreshToken: string, accessToken: string) => {
    console.log("send logout base url");
    const res = await api.get(
      "/auth/logout",
      {
        withCredentials: true,
        headers: {
          Cookie: `refreshToken=${refreshToken}`,
          Authorization: `Bearer ${accessToken}`,
        },
      },
      { baseUrl: "" }
    );
    console.log("next to be >>>", res);
    return res;
  },
};

export default authApiRequest;
