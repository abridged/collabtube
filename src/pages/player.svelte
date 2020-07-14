<script>
  import {onMount} from 'svelte';
  import { metatags } from "@sveltech/routify";
  import Post from "./_components/posts/Post.svelte";
  import Wall from "./_components/posts/Wall.svelte";
  import { fade, fly } from "svelte/transition";

  import { goto } from "@sveltech/routify";

  // import Button from "smelte/src/components/Button";

  metatags.title = "player";

  const name = "small";
  const file = `https://collabtube-encoded-east1.s3.amazonaws.com/${name}.m3u8`;

  let vref = null;

  const onload = x => {
    console.log('onload', vref)
    var player = window.videojs(vref, {
      autoplay: "any",
    });
  };
</script>

<style>

</style>

<svelte:head>
  <link
          href="https://vjs.zencdn.net/7.8.4/video-js.css"
          rel="stylesheet"
        />
  <script src="https://vjs.zencdn.net/7.8.4/video.js" on:load={onload}/>
</svelte:head>

<h1 class="ml text-white uppercase font-bold mb-4 mx-auto text-center">
  Sugar Boogerz
</h1>

<section class="text-gray-700 body-font m-0">
  <div class="container px-5 sm:px-0 py-24 mx-auto">
    <div class="flex flex-wrap m-4 justify-center items-center">

            <div id="video" className="w-full">
        <video
          bind:this={vref}
          id="my-video"
          className="video-js mx-auto"
          controls
          preload="auto"
        >
          <source src={file} type="application/x-mpegURL" />
        </video>

    </div>
  </div>
</section>
