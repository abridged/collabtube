import { Provider } from "mobx-react";
import { useStore } from "../store";
import { useRef, useLayoutEffect } from "react";
import Layout from "../components/Layout.js";
import "../assets/tailwind.css";

export default function App({ Component, pageProps, router }) {
  const store = useStore(pageProps.initialState);

  return (
    <Provider store={store}>
      <Layout url={router.pathname}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
