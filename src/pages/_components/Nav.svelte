<script>
  import { isActive, url, goto } from "@sveltech/routify";
  import { user } from "../../AppStore";

  $: isHome  = $isActive('/index') ? 'mdc-tab-indicator--active' : '';
  $: isUpload  = $isActive('/upload') ? 'mdc-tab-indicator--active' : '';
  $: isProfile  = $isActive('/profile') ? 'mdc-tab-indicator--active' : '';
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

<nav class="fixed bottom-0 bg-gray-900 w-screen">
  <div class="mdc-tab-bar" role="tablist">
    <div class="mdc-tab-scroller">
      <div class="mdc-tab-scroller__scroll-area">
        <div class="mdc-tab-scroller__scroll-content">
          <button
            on:click="{x=>$goto('/index')}"
            class="mdc-tab mdc-tab--active"
            role="tab"
            aria-selected="true"
            tabindex="0">
            <span class="mdc-tab__content">
              <span class="mdc-tab__icon material-icons" aria-hidden="true">
                home
              </span>
              <span class="mdc-tab__text-label">feed</span>
            </span>
            <span class="mdc-tab-indicator {isHome}">
              <span
                class="mdc-tab-indicator__content
                mdc-tab-indicator__content--underline" />
            </span>
            <span class="mdc-tab__ripple" />
          </button>

          <button
            on:click="{x=>$goto('/upload')}"
            class="mdc-tab mdc-tab--active"
            role="tab"
            aria-selected="false"
            tabindex="0">
            <span class="mdc-tab__content">
              <span class="mdc-tab__icon material-icons" aria-hidden="true">
                publish
              </span>
              <span class="mdc-tab__text-label">publish</span>
            </span>
            <span class="mdc-tab-indicator {isUpload}">
              <span
                class="mdc-tab-indicator__content
                mdc-tab-indicator__content--underline" />
            </span>
            <span class="mdc-tab__ripple" />
          </button>

          <button
            on:click="{x=>$goto('/profile')}"
            class="mdc-tab mdc-tab--active"
            role="tab"
            aria-selected="false"
            tabindex="0">
            <span class="mdc-tab__content">
              <span class="mdc-tab__icon material-icons" aria-hidden="true">
                account_circle
              </span>
              <span class="mdc-tab__text-label">profile</span>
            </span>
            <span class="mdc-tab-indicator {isProfile}">
              <span
                class="mdc-tab-indicator__content
                mdc-tab-indicator__content--underline" />
            </span>
            <span class="mdc-tab__ripple" />
          </button>
        </div>
      </div>
    </div>
  </div>

</nav>
