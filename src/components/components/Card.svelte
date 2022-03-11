<script lang="ts">
  import Button from "./Button.svelte";
  export let subtitle;
  export let title;
  export let button;
  export let description;
  export let goal;
</script>

<div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
  <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#" class="flex flex-wrap no-underline hover:no-underline">
      <p class="w-full text-gray-600 text-xs md:text-sm px-6">{subtitle}</p>
      <div class="w-full font-bold text-xl text-gray-800 px-6">{title}</div>
      <p class="text-gray-800 text-base px-6 mb-5">
        {description}
      </p>
      <div class="w-full font-bold text-xl text-gray-800 px-6">
        Funding required: {goal}
      </div>
    </a>
  </div>
  <div
    class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
  >
    <Button secondary>{button}</Button>
  </div>
</div>
