import { Provider } from "mobx-react";
import { useStore } from "../store";

import { ThemeProvider } from "@material-ui/core";
import { theme } from "../components/Theme";
import { useRef, useEffect } from "react";

import GoogleFonts from "next-google-fonts";
import Layout from "../components/Layout.js";
import "../assets/tailwind.css";

export default function App({ Component, pageProps, router }) {
  const store = useStore(pageProps.initialState);

  useEffect(() => {}, []);

  return (
    <ThemeProvider theme={theme}>
      <GoogleFonts href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <Provider store={store}>
        <Layout url={router.pathname}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
}
