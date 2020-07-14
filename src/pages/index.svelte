<script>
  import { metatags } from "@sveltech/routify";
  import Post from "./_components/posts/Post.svelte";
  import Wall from "./_components/posts/Wall.svelte";
  import { fade, fly } from "svelte/transition";

  import { goto } from "@sveltech/routify";

  // import Button from "smelte/src/components/Button";

  metatags.title = "home";

  const data = [{ title: "ASMR preview video", id: "123", cost: "" }];
</script>

<style>

</style>

<h1 class="ml text-white uppercase font-bold mb-4 mx-auto text-center">
  Sugar Boogerz
</h1>

<section class="text-gray-700 body-font m-0">
  <div class="container px-5 sm:px-0 py-24 mx-auto">
    <div class="flex flex-wrap m-4 justify-center items-center">

      <Wall />

    </div>
  </div>
</section>
