import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { inject, observer, useObserver } from "mobx-react";
import Clock from "../components/Clock";
import { Button } from "@material-ui/core";
import TestCard from "../components/TestCard";
import SortBy from "../components/SortBy";
import Head from "next/head";
import useScript from 'react-script-hook';
import { Icon, InlineIcon } from '@iconify/react';
import openPadlock from '@iconify/icons-ps/open-padlock';


const init = {
  feed: [{ file: "small", refresh: 0 }],
};

// @inject('store')
function Wall() {
  const [state, setState] = useState(init);

  const videoRef = useRef();

  function setup() {
    if(!window.videojs) return;
    if(state.setup) return;

    var player = window.videojs(videoRef.current, {
      autoplay: "any",
    })
    .ready(function () {
      // self.player = this;
      // self.player.on('play', self.handlePlay);
    });
    setState((x) => ({ ...x, setup: true }));
  }

  useScript({
    src: "https://vjs.zencdn.net/7.8.4/video.js",
    checkForExisting: true,
    onload: () => {
      setState((x) => ({ ...x, refresh: x.refresh + 1 }));
      setup();
    },
  });

  useEffect((x) => {
    setup();
  }, [state]);

  const name = "small";
  const file = `https://collabtube-encoded-east1.s3.amazonaws.com/${name}.m3u8`;

  return useObserver(() => (
    <>
      <Head>
        <title>Player</title>
        <link
          href="https://vjs.zencdn.net/7.8.4/video-js.css"
          rel="stylesheet"
        />
      </Head>
      <div className="text-center">
        <h1 className="block text-x1 font-bold text-center underline py-4">CONGRATULATIONS!</h1>
        <h3 className="block text-x1 text-center font-semibold text-gray-800 pb-4">You've Unlocked Exclusive Content Below!</h3>
        <h3 className="block text-x1 text-center font-semibold text-gray-800 pb-4">Click Below to Claim.</h3>

        <button class="bg-transparent hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mb-4">
          <Icon icon={openPadlock} width='80' height='80' />
          <span className="block">Press to Play</span>
        </button>
      </div>

      <div>
        <div id="video" className="w-full">
          <video
            ref={videoRef}
            id="my-video"
            className="video-js mx-auto"
            controls
            preload="auto"
          >
            <source src={file} type="application/x-mpegURL" />
          </video>
        </div>
      </div>
    </>
  ));
}

export default Wall;

//<div className="flex justify-center pb-4">
