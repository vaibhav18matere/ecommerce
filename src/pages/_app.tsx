import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import AuthContextProvider from "@/context/auth-context";
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <AuthContextProvider>
      <div className={GeistSans.className}>
        <Component {...pageProps} />
      </div>
    </AuthContextProvider>
  );
};

export default api.withTRPC(MyApp);
