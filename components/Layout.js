import { useRef, useLayoutEffect } from "react";
import Nav from './Nav';

let _vanta = null;
export default function Layout({ children, url }) {
  // console.log("g", url);

  const element = useRef();

  let zoom = 1;

  // console.log('url', url)
  if (url !== '/') { // .startsWith("/other")
    zoom = .5;
  }

  useLayoutEffect(() => {
     // console.log("aaaa", !!_vanta, zoom);

     if(!_vanta) _vanta = window.VANTA.WAVES({
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
        zoom: 1,
      });

    
      _vanta.setOptions({
        zoom: zoom,
        el: element.current,
      });
    

    // return x=>_vanta.destroy();
  });

  return (
    <div ref={element} className="h-full min-h-screen">
      <div className="sm:w-full md:w-5/4 sm:px-0 min-h-screen">{children}</div>
      <Nav/>
        
    </div>
  );
}
