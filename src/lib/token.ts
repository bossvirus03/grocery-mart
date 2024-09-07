"use client";
import envConfiguration from "@/config/envConfiguration";
import { jwtDecode } from "jwt-decode";
import { AsyncStorageUtils } from "./asyncStorgate";

export const setAuthData = (authData: any) => {
  if (envConfiguration.NEXT_PUBLIC_TOKEN_KEY) {
    AsyncStorageUtils.save(
      envConfiguration.NEXT_PUBLIC_TOKEN_KEY,
      (authData || "").toString()
    );
  }
};

export const getAuthToken = (clearToken?: boolean) => {
  const token = AsyncStorageUtils.get(envConfiguration.NEXT_PUBLIC_TOKEN_KEY);
  if (!token) {
    removeToken();
    return null;
  }

  const authData = jwtDecode(token || "") || null;
  if (!authData) {
    if (clearToken) {
      removeToken();
    }
    return null;
  }
  return token;
};

export const removeToken = () => {
  AsyncStorageUtils.remove(envConfiguration.NEXT_PUBLIC_TOKEN_KEY);
};
