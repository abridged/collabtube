import { Provider } from "mobx-react";
import { useStore } from "../store";
import { useRef, useEffect } from "react";
import Layout from "../components/Layout";
import "../assets/main.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "mobx-react-lite/batchingForReactDom";
/*
import "../vendor/styles/index.scss";
import "../vendor/styles/Edit.scss";
import "../vendor/styles/Modals.scss";
import "../vendor/styles/emoji-mart.css";
*/

export default function App({ Component, pageProps, router }) {
  const store = useStore(pageProps.initialState);

  useEffect(() => { }, []);

  return (
    <Provider store={store}>
      <Layout url={router.pathname}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
