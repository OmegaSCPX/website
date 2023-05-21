<div
  class="flex flex-row items-center justify-center w-screen gap-4 pt-5 pl-3 md:justify-start"
>
  {#if window.location.pathname != '/'}<a
      href="/"
      class="text-lg rounded-full md:text-xl btn-nav-main">Home</a
    >
  {/if}
  <a href="/" class="text-lg rounded-full md:text-xl btn-nav-main"
    >Server Features</a
  >
  <a href="/" class="text-lg rounded-full md:text-xl btn-nav-main"
    >Server Rules</a
  >
</div>

<style>
  div a {
    border-width: 3px;
    border-color: white;

    padding: 6px;
  }
</style>
