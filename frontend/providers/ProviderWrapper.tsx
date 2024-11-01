"use client";

import React, { ReactNode } from "react";
import { store } from "@/config/reduxStoreConfig";
import { Provider } from "react-redux";
import MuiThemeProvider from "./MuiThemeProvider";
import ReactQueryProvider from "./ReactQueryProvider";

const ProviderWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <ReactQueryProvider>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </ReactQueryProvider>
    </Provider>
  );
};

export default ProviderWrapper;
