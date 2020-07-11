import { useRef, useLayoutEffect, useEffect, useState } from "react";
import Nav from "./Nav";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../components/Theme";
import Head from 'next/head';

export default function Layout({ children, url }) {
  const [zoom, setZoom] = useState(1);

  const [_vanta, setVenta] = useState(null);

  // console.log("g", url);

  const element = useRef();

  // let zoom = 1;

  // console.log('url', url)

  useEffect(() => {
    if (url === "/") setZoom(2);
    else if (url === "/upload") setZoom(1.5);
    else if (url === "/profile") setZoom(1);
    else setZoom(1);
    // console.log("aaaa", !!_vanta, zoom);

    if (!_vanta) return;
    _vanta.setOptions({
      zoom: zoom,
      el: element.current,
    });
  }, [url, element.current, zoom, _vanta]);

  useEffect(() => {
    const _vanta2 = window.VANTA.WAVES({
      el: element.current,
      mouseControls: false,
      touchControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.5,
      scaleMobile: 1.0,
      shininess: 8,
      waveSpeed: 0.6,
      color: 0x5a88,
      zoom: 2,
    });

    _vanta2.setOptions({
      zoom: 2,
    });
    setVenta(_vanta2);

    return () => _vanta2.destroy();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r118/three.min.js"></script>
          <script src="https://cdn.jsdelivr.net/gh/tengbao/vanta/dist/vanta.waves.min.js"></script>
      </Head>
      <div ref={element} className="h-full min-h-screen">
        <div className="sm:w-full md:w-5/4 sm:px-0 min-h-screen max-w-5xl mx-auto">
          {children}
        </div>
        <Nav />
      </div>
    </ThemeProvider>
  );
}
