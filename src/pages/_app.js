import "@/styles/globals.css";
import { SWRConfig } from "swr";
import { SessionProvider, useSession, signIn } from "next-auth/react";
import NavBar from "@/components/navbar";
import FootBar from "@/components/footer";
import { Provider } from "react-redux";
import store from "@/store";
import Notify from "@/components/Notify";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    // <Provider store={store}>
      <SessionProvider session={session}>
        <SWRConfig
          value={{
            revalidateIfStale: false,
            revalidateOnFocus: false,
          }}
        >
          <NavBar />
          <Notify />
          {Component.auth ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
          <FootBar />
        </SWRConfig>
      </SessionProvider>
    // </Provider>
  );
}

function Auth({ children }) {
  const { session, status } = useSession({ required: true });
  if (status === "loading") {
    return (
      <main className={common.container}>
        <div>Loading</div>
      </main>
    );
  }
  return children;
}
