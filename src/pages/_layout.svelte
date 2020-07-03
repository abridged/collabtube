<script>
  import Nav from "./_components/Nav.svelte";
  import EthersComp from "./_components/EthersComp.svelte";
  import { onMount } from "svelte";
  import { afterPageLoad } from "@sveltech/routify";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  // import { ready } from '@sveltech/routify'

  const progress = tweened(1, {
    duration: 1000,
    easing: cubicOut
  });

  let _vanta = null;

  $: if (_vanta) {
    // console.log('progress', $progress)
    _vanta.setOptions({
      zoom: $progress
    });
  }

  function createVanta() {
    if(_vanta) _vanta.destroy();
    _vanta = window.VANTA.WAVES({
      el: "#main",
      mouseControls: false,
      touchControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.5,
      scaleMobile: 1.0,
      shininess: 8,
      waveSpeed: 0.6,
      color: 0x5a88,
      zoom: 1
    });
  }

  function onVanta() {
    if (!window.routify.inBrowser) return;
    if (!window.VANTA || _vanta !== null) return;

    // setTimeout(createVanta, 1000); // hack
    setTimeout(createVanta, 0);

    // console.log("vanta");
  }

  $afterPageLoad(page => {
    if (!_vanta) {
      onVanta();
      if(!_vanta) return;
    }

    let zoom = 1.5 + Math.random();
    if (page.path === "/index") zoom = 1;

    progress.set(zoom);
  });
</script>

<style>
  #main {
    background-color: #dfdbe5;
    background-image: url("/bg.jpg");
  }
</style>

<svelte:window on:load={onVanta} />
<main id="main" class="min-h-screen h-full">
  <div class="sm:w-full md:w-5/4 sm:px-0 min-h-full">
    <EthersComp>
      
      <div class="py-2 sm:p-4 md:p-4">
        <slot />
      </div>
      <Nav />
    </EthersComp>
  </div>
</main>
