import React from "react";
// import videojs from "video.js";

import Head from 'next/head';

export default class VideoPlayer extends React.Component {
  componentDidMount() {
      if(this.props.source) this.props.source.type = this.props.source.type || "application/x-mpegURL";

      // instantiate Video.js
    this.player = window.videojs(this.videoNode, null, function onPlayerReady() {
      console.log("onPlayerReady", this);
    });
    this.player.play();
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div>
          <Head>
            <script key="videojs" src="//vjs.zencdn.net/7.8.4/video.js"/>
            <link key="videojs-css"
            href="//vjs.zencdn.net/7.8.4/video-js.min.css"
            rel="stylesheet"
            />
          </Head>
        <div data-vjs-player>
          <video
          src = {this.props.src}
          type = "application/x-mpegURL"
            control="true"
            loop="loop"
            ref={(node) => (this.videoNode = node)}
            className="video-js"
          >
          </video>
        </div>
      </div>
    );
  }
}
