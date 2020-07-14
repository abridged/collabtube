<script>
    import { isActive, url, goto } from "@sveltech/routify";

    export let item;
    function onClick(e) {
        $goto('/player');
    }
</script>

<img on:click={onClick} alt={item} src="https://collabtube-encoded-east1.s3.amazonaws.com/{item}.gif"/>