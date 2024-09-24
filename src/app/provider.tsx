"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider as TThemeProvider } from "next-themes";
import { ReactNode } from "react";

function Provider({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </TThemeProvider>
    </QueryClientProvider>
  );
}

export default Provider;
