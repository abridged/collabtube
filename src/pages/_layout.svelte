<script>
  import Nav from "./_components/Nav.svelte";
  import EthersComp from "./_components/EthersComp.svelte";
  import { onMount } from "svelte";
  import { afterPageLoad } from "@sveltech/routify";
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  

  const progress = tweened(1, {
		duration: 1000,
    easing: cubicOut
  });
  
   $: if(_vanta) {
     // console.log('progress', $progress)
    _vanta.setOptions({
        zoom: $progress
    });
   }

  // export let segment;
  // background-color: gray;
  let _vanta = null;
  onMount(async () => {
    _vanta = VANTA.WAVES({
      el: "#main",
      mouseControls: false,
      touchControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.5,
      scaleMobile: 1.0,
      shininess: 8,
      waveSpeed: 0.60,
      color: 0x5a88,
      zoom: 1
    });
  });

  $afterPageLoad(page => {
    if(!_vanta) return;

    let zoom = 1.5 + Math.random();
    if(page.path==="/index") zoom = 1;

    progress.set(zoom);
  });
</script>

<style>
</style>

<main id="main" class=" p-4 min-h-screen h-full">
  <div class="w-5/4 px-8 bg-white bg-opacity-50 min-h-full">
    <EthersComp>
      <Nav />
      <slot />
    </EthersComp>
  </div>
</main>
