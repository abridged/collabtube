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

<h1 class="ml text-white uppercase font-bold mx-auto text-center prose prose-2xl">
  sugar boogerz ASMR
</h1>

<Wall />
