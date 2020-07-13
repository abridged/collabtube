<script>
  import { onMount } from "svelte";
  // import ethers from "ethers";
  import { user } from "../../AppStore";
  import { ready } from "@sveltech/routify";

  let show = false;
  let account = null;
  let noAccount = false;

  async function onload() {
    if (show) return;
    if (!window.ethereum) return;
    window.ethereum.autoRefreshOnNetworkChange = false;
    show = true;
    // return;
    if (window.ethereum.enable) await window.ethereum.enable();

    const x = await window.ethereum.send("eth_accounts");
    const accounts = x.result;
    
    account = accounts.length > 0 ? accounts[0] : null;

    console.log('account', account);
    if (!account) noAccount = true;

    user.update(obj => ({ account: account }));
  }

  onMount(x => {
    // onload(); on:load={onload} 
  });
</script>

<svelte:window />

<slot />
