<script lang="ts">
  export let primary = true;
  export let secondary = false;
  export let center = true;
  if (secondary) primary = false;
  export let click;
  // class:text-gray-800={primary}
  // class:text-white={secondary}
  // class:bg-white={primary}
  // class:gradient={secondary}
</script>

<div class:flex={center} class="items-center justify-center">
  <button
    class={`
  ${primary && "text-gray-800 bg-white"}
  ${secondary && "text-gray-50 gradient"}
  mx-auto lg:mx-0 hover:underline font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out
  `}
    on:click={click}
  >
    <slot>Click me!</slot>
  </button>
</div>

<style>
  .gradient {
    @apply bg-gradient-to-r from-green to-yellow;
  }
</style>
