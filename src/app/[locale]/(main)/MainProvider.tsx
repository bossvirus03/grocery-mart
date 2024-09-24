"use client";
import { useAppStore } from "@/store/app.store";
import { ReactNode, useEffect } from "react";
import { apiGetMe } from "./services/api";

function MainProvider({ children }: { children: ReactNode }) {
  const appStore = useAppStore();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await apiGetMe();
        if (data) {
          appStore.setUserData(data.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return <>{children}</>;
}

export default MainProvider;
