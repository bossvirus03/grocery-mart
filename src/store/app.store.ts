import { JwtPayload } from "@/lib/interfaces/jwt.interface";
import { getAuthToken } from "@/lib/token";
import { jwtDecode } from "jwt-decode";
import { create } from "zustand";

export interface UserData extends JwtPayload {
  cart_items_count: number;
  saved_items_count: number;
}

export const useAppStore = create((set: any, get: any) => {
  const token: string | null = getAuthToken();
  const initUserData: UserData | undefined = token
    ? jwtDecode(token)
    : undefined;
  return {
    userData: initUserData,
    setUserData: (data: any) => set({ userData: data }),
  };
});
