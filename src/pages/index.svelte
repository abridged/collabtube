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

<h2 class="ml text-gray-800 uppercase font-bold mb-4 mx-auto text-center">Sugar Boogerz</h2>


<section class="text-gray-700 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
    {#each [1,2,3] as index}
      <div class="flex-initial m-5" 
        in:fly="{{ y: 200, duration: index*300, delay: index*300 }}" >
        <Post/>
      </div>
     {/each}
  
  <div class="py-2 fixed right-0 bottom-0 m-8">
    <div on:click="{()=>$goto('/upload')}" color="alert" icon="change_history">aaas</div>
  </div>
</section>

