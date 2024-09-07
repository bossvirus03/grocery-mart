import { getAuthToken } from "@/lib/token";
import { jwtDecode } from "jwt-decode";
import { create } from "zustand";

export const useAppStore = create((set: any, get: any) => {
  const token = getAuthToken();
  const initUserData = token ? jwtDecode(token) : undefined;
  return {
    userData: initUserData,
    setUserData: (data: any) => set({ userData: data }),
  };
});
