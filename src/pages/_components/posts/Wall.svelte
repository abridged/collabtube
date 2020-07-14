<script>
  import { metatags } from "@sveltech/routify";
  import Post from "./Post.svelte";
  import { fade, fly } from "svelte/transition";
  import { goto } from "@sveltech/routify";
  // import SvelteInfiniteScroll from "svelte-infinite-scroll";
  import VirtualList from "svelte-virtual-list-enhanced";
  import WallPic from "./WallPic.svelte";

  let page = 1;
  let size = 2;
  let items = Object.keys(Array(20).fill(0)).map(i => ["small"]);
  let itemsLen = 0;

  let start,
    end = 22;

  $: console.log("page", page);

  /* $: items = [
    ...items,
    ...Object.keys(Array(size*page).fill(0)).map(i=>["small"])
  ];*/

  $: console.log(page, items);

  function onEnd() {
    console.log("onend");
  }

  function onClick(e) {
    console.log(e.target);
    e.target.className = "pop";
  }
  //   <SvelteInfiniteScroll elementScroll={container} threshold={100} on:loadMore={() => page++} />
  // <Post name={item} />
  // <VirtualList items={items} let:item on:OnEndReached={onEnd}></VirtualList>
  export let animate = true;
</script>

<style>
  .pop {
    width: 100px;
  }
</style>

<section class="text-gray-700 body-font m-0">
  <div class="container px-5 sm:px-0 py-24 mx-auto">
    <div class="flex flex-wrap m-4 justify-center items-center">

      <div style="min-h-full">

        <div class="grid grid-flow-row grid-cols-3 gap-4">
          {#each items as item, index}
            <div
              class={'w-48'}
              on:click={onClick}
              in:fly={{ y: 200, duration: animate ? 400 : 0, delay: (600 * index) / 10 }}>
              <WallPic {item} />
            </div>
          {/each}
        </div>
      </div>

    </div>
  </div>
</section>
