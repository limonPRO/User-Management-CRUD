'use client';
import React, { ReactNode } from 'react'
import { createTheme } from '@mui/material/styles';
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
});

const MuiThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
         <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
  )
}

export default MuiThemeProvider
