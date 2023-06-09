import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import Header from "y/components/header";
import Footer from "y/components/Footer";

import { api } from "y/utils/api";
import "y/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
