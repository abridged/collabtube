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



      <Wall />


