import { Provider } from "mobx-react";
import { useStore } from "../store";
import { useRef, useEffect } from "react";
import Layout from "../components/Layout.js";
import "../assets/tailwind.css";
import "mobx-react-lite/batchingForReactDom";
/*
import "../vendor/styles/index.scss";
import "../vendor/styles/Edit.scss";
import "../vendor/styles/Modals.scss";
import "../vendor/styles/emoji-mart.css";
*/

export default function App({ Component, pageProps, router }) {
  const store = useStore(pageProps.initialState);

  useEffect(() => {}, []);

  return (
    <Provider store={store}>
      <Layout url={router.pathname}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
