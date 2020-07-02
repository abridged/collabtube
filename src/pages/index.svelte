<style>
</style>

<script>
import { metatags } from '@sveltech/routify';
import Post from './_components/posts/Post.svelte';
import { fade, fly } from 'svelte/transition';

import { goto } from '@sveltech/routify'
// import Button from "smelte/src/components/Button";

metatags.title = "home";

const data = [{ title: 'ASMR preview video', id: '123', cost: ''}];
</script>

<h1 class="ml text-white uppercase font-bold mb-4 mx-auto text-center">Sugar Boogerz</h1>


<section class="text-gray-700 body-font m-0">
  <div class="container px-5 sm:px-0 py-24 mx-auto">
    <div class="flex flex-wrap m-4 justify-center items-center">
    {#each [1,2,3] as index}
      <div class="flex-initial md:m-5 sm:w-full md:w-auto" 
        in:fly="{{ y: 200, duration: index*300, delay: index*300 }}" >
        <Post/>
      </div>
     {/each}
  
  <div class="fixed right-0 bottom-0 md:m-4">
    <button class="mdc-fab" aria-label="Favorite" on:click="{()=>$goto('/upload')}" >
      <div class="mdc-fab__ripple"></div>
      <span class="mdc-fab__icon material-icons">publish</span>
    </button>
  </div>
</section>

