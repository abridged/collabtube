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

   function onVanta() {
    if(!window.VANTA || _vanta) return;
    _vanta = window.VANTA.WAVES({
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
   }

  // export let segment;
  // background-color: gray;
  let _vanta = null;
  onMount(onVanta);

  $afterPageLoad(page => {
    if(!_vanta) return;

    let zoom = 1.5 + Math.random();
    if(page.path==="/index") zoom = 1;

    progress.set(zoom);
  });

  // /url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E");
  
</script>

<svelte:window on:load="{onVanta}"/>

<style>
  #main {
    background-color: #DFDBE5;
    background-image: url('/bg.jpg')
    }
</style>

<main id="main" class="sm:p-0 md:p-4 min-h-screen h-full">
  <div class="sm:w-full md:w-5/4 sm:px-0 md:px-8 bg-white bg-opacity-50 min-h-full">
    <EthersComp>
      <Nav />
      <div class="py-2"><slot /></div>
    </EthersComp>
  </div>
</main>
