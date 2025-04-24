"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProvider } from "@/components/them-provider";
import { SessionProvider } from "next-auth/react";

export function AppProvider({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <SessionProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}
