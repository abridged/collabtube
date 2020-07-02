<script>
  import { onMount } from "svelte";
	// import ethers from "ethers";
  import { user } from "../../AppStore";
  import { ready } from '@sveltech/routify';

  let show = false;
	let account = null;
	let noAccount = false;

  async function onload() {
    if(show) return;
    if(!window.ethereum && !window.web3) return;
    show = true;
    console.log('ethers compy');
		// return;
      if(window.ethereum && window.ethereum.enable) await window.ethereum.enable();

      window.web3.eth.getAccounts( (error, accounts) => {
          console.log(accounts)
					account = accounts.length > 0 ? accounts[0] : null;
					if(!account) noAccount= true;

					user.update(obj => ({account: account}));
      });
  }

  onMount(x => {
    onload();
  });
</script>

<svelte:window on:load="{onload}"/>

<slot/>
