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

  <div class="mdc-tab-bar" role="tablist">
  <div class="mdc-tab-scroller">
    <div class="mdc-tab-scroller__scroll-area">
      <div class="mdc-tab-scroller__scroll-content">
        <button class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0">
          <span class="mdc-tab__content">
            <span class="mdc-tab__icon material-icons" aria-hidden="true">favorite</span>
            <span class="mdc-tab__text-label">home</span>
          </span>
          <span class="mdc-tab-indicator mdc-tab-indicator--active">
            <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
          </span>
          <span class="mdc-tab__ripple"></span>
        </button>

        <button class="mdc-tabe" role="tab" aria-selected="true" tabindex="0">
          <span class="mdc-tab__content">
            <span class="mdc-tab__icon material-icons" aria-hidden="true">favorite</span>
            <span class="mdc-tab__text-label">profile</span>
          </span>
          <span class="mdc-tab__ripple"></span>
        </button>

        <button class="mdc-tabe" role="tab" aria-selected="true" tabindex="0">
          <span class="mdc-tab__content">
            <span class="mdc-tab__icon material-icons" aria-hidden="true">favorite</span>
            <span class="mdc-tab__text-label">upload</span>
          </span>
          <span class="mdc-tab__ripple"></span>
        </button>
      </div>
    </div>
  </div>
</div>

</nav>
