"use client";
import { ThemeProvider as TThemeProvider } from "next-themes";
import { ReactNode } from "react";

function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <TThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </TThemeProvider>
  );
}

export default ThemeProvider;
