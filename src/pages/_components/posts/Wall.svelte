<script>
  import { metatags } from "@sveltech/routify";
  import Post from "./Post.svelte";
  import { fade, fly } from "svelte/transition";
  import { goto } from "@sveltech/routify";
  // import SvelteInfiniteScroll from "svelte-infinite-scroll";
  import VirtualList from '@sveltejs/svelte-virtual-list';

  let page = 1;
  let size = 2;
  let items = Object.keys(Array(20).fill(0)).map(i=>["small"]);
  let itemsLen = 0;

  let start, end=20;

  $: console.log('page', page)

  /* $: items = [
    ...items,
    ...Object.keys(Array(size*page).fill(0)).map(i=>["small"])
  ];*/

  $: console.log(page, items)

  let container;

  //   <SvelteInfiniteScroll elementScroll={container} threshold={100} on:loadMore={() => page++} />
</script>

<div bind:this={container}>

  <p>showing {start}-{end} of {items.length} rows</p>

  <VirtualList itemHeight={200} items={items} let:item bind:start bind:end>
    <div
      class="flex-initial md:m-5 sm:w-full md:w-auto"
      in:fly={{ y: 200, duration: 800, delay: 900 }}
      >
      <Post name={item} />
    </div>
  </VirtualList>

</div>
