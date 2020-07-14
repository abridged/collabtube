<script>
  import { onMount } from "svelte";
  import { metatags } from "@sveltech/routify";
  import Post from "./_components/posts/Post.svelte";
  import Wall from "./_components/posts/Wall.svelte";
  import { isActive, url, goto } from "@sveltech/routify";
  import { fade, fly } from "svelte/transition";

  // import Button from "smelte/src/components/Button";

  metatags.title = "player";

  const name = "small";
  const file = `https://collabtube-encoded-east1.s3.amazonaws.com/${name}.m3u8`;

  let vref = null;

  const onload = x => {
    console.log("onload", vref);
    var player = window.videojs(vref, {
      autoplay: "any"
    });
  };
</script>

<style>
.video-js {
  background-color: inherit;
}
</style>

<svelte:head>
  <link href="https://vjs.zencdn.net/7.8.4/video-js.css" rel="stylesheet" />
  <script src="https://vjs.zencdn.net/7.8.4/video.js" on:load={onload}>

  </script>
</svelte:head>

<h1 class="ml text-white uppercase font-bold mx-auto text-center mb-0">
  Sugar Boogerz
</h1>

<section class="text-gray-700 body-font m-0 w-full h-full">
  <div class="container px-5 sm:px-0 mx-auto">


      <div id="video" class="w-full"
        in:fly={{ y: 200, duration: 600, delay: 600 }}
      >
        <video
          bind:this={vref}
          id="my-video"
          class="video-js w-full bg-transparent"
          controls
          loop="true"
          preload="auto">
          <source src={file} type="application/x-mpegURL" />
        </video>

      <button
        class="mdc-button mdc-button--raised mdc-card__action
        mdc-card__action--button">
        <span class="mdc-button__ripple" on:click={x=>$goto('/index')} />
        Back to list
        </button>

      </div>

  </div>

  <div class="mt-12">
  <Wall animate={false}/>
</section>
