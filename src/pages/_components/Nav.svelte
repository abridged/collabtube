<script>
  import { isActive, url } from "@sveltech/routify";
  import { user } from "../../AppStore";
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .active {
    position: relative;
    display: inline-block;
  }

  .active::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav>
  <div class="float-right text-center">Account:<br/>{$user.account}</div>
  <ul>
    <li>
      <a class:active={$isActive('/index')} href={$url('/index')}>home</a>
    </li>
    <li>
      <a class:active={$isActive('/profile')} href={$url('./profile')}>
        profile
      </a>
    </li>
    <li>
      <a class:active={$isActive('/upload')} href={$url('./upload')}>upload</a>
    </li>

  </ul>

</nav>
