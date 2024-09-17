"use client";
import { useAppStore } from "@/store/app.store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider as TThemeProvider } from "next-themes";
import { ReactNode, useEffect } from "react";
import { apiGetMe } from "./[locale]/(main)/services/api";

function Provider({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();
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

  return (
    <QueryClientProvider client={queryClient}>
      <TThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </TThemeProvider>
    </QueryClientProvider>
  );
}

export default Provider;
