import { useRef, useLayoutEffect, useEffect, useState } from "react";
import Nav from "./Nav";
import Head from 'next/head';
import useScript from 'react-script-hook';

export default function Layout({ children, url }) {
  const [zoom, setZoom] = useState(1);

  const [_vanta, setVenta] = useState(null);

  const [state, setState] = useState({ refresh: 0 });

  // console.log("g", url);

  const element = useRef();

  // let zoom = 1;

  // console.log('url', url)

  // Removed for cleaner start

  // useScript({
  //   src: 'https://cdn.jsdelivr.net/gh/tengbao/vanta/dist/vanta.waves.min.js',
  //   checkForExisting: true,
  //   onload: () => setState(x=>({...x, refresh: x.refresh+1}))
  // })

  // useEffect(() => {
  //   if (url === "/") setZoom(2);
  //   else if (url === "/upload") setZoom(1.5);
  //   else if (url === "/profile") setZoom(1);
  //   else setZoom(1);
  //   // console.log("aaaa", !!_vanta, zoom);

  //   if (!_vanta) return;
  //   _vanta.setOptions({
  //     zoom: zoom,
  //     el: element.current,
  //   });
  // }, [url, element.current, zoom, _vanta]);

  // useEffect(() => {
  //   if(_vanta2) return;

  //   if(!window.VANTA) {
  //     /* setTimeout(_=>{
  //       setState(x=>({...x, refresh: x.refresh+1}))
  //     }, 100);
  //     */
  //     return;
  //   }
  //   const _vanta2 = window.VANTA.WAVES({
  //     el: element.current,
  //     mouseControls: false,
  //     touchControls: true,
  //     minHeight: 200.0,
  //     minWidth: 200.0,
  //     scale: 1.5,
  //     scaleMobile: 1.0,
  //     shininess: 8,
  //     waveSpeed: 0.6,
  //     color: 0x5a88,
  //     zoom: 2,
  //   });

  //   _vanta2.setOptions({
  //     zoom: 2,
  //   });
  //   setVenta(_vanta2);

  //   return () => _vanta2.destroy();
  // }, [state]);

  return (
    <div ref={element} className="h-full min-h-screen bg-gray-400">
      <Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r118/three.min.js" defer></script>
      </Head>
      <div className="sm:w-full md:w-5/4 sm:px-0 min-h-screen max-w-5xl mx-auto">
        {children}
      </div>
      <Nav />
    </div>
  );
}
