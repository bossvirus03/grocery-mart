"use client";
import { getAuthToken } from "@/lib/token";
import { useAppStore } from "@/store/app.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { apiGetMe } from "./services/api";

function MainProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: "vi" | "en";
}) {
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
  const router = useRouter();
  const appStore = useAppStore();
  const isLoggined = getAuthToken();

  if (!isLoggined) {
    router.push(`/${locale}/signin`);
    return null;
  }

  return <>{children}</>;
}

export default MainProvider;
