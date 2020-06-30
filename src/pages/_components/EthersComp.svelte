<script>
  import { onMount } from "svelte";
	import ethers from "ethers";
	import { user } from "../../AppStore";

  let show = false;
	let account = null;
	let noAccount = false;

  async function onload() {
      await window.ethereum.enable();

      web3.eth.getAccounts( (error, accounts) => {
          console.log(accounts)
					account = accounts.length > 0 ? accounts[0] : null;
					if(!account) noAccount= true;

					user.update(obj => ({account: account}));
      });
      show = true;
  }
</script>

<svelte:window on:load="{onload}"/>

{#if show}
    <slot/>
{/if}