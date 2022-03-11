<script lang="ts">
  import * as animateScroll from "svelte-scrollto";
  import Button from "./components/Button.svelte";
</script>

<section class="bg-gray-100 py-8">
  <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
    <h1
      class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
    >
      Shares
    </h1>
    <div class="w-full mb-4">
      <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
    </div>
    <div
      class="flex flex-col sm:flex-row justify-center md:pt-12 my-12 sm:my-4"
    >
      <div
        class="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10"
      >
        <div
          class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
        >
          <div class="w-full p-8 text-3xl font-bold text-center">
            Distribution
          </div>
          <div class="h-1 w-full gradient my-0 py-0 rounded-t" />
          <ul class="w-full text-center text-base font-bold">
            <li class="border-b py-4">3.14 million shares</li>
            <li class="border-b py-4">2100 satoshis per share</li>
            <li class="border-b py-4">65.94 bitcoin valuation</li>
            <li class="border-b py-4">~$3.3 million CAD</li>
          </ul>
        </div>
        <div
          class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
        >
          <div class="w-full pt-6 text-4xl font-bold text-center">
            ~$1.06 CAD
            <span class="text-base">/ per share</span>
          </div>
          <Button
            secondary
            click={() => animateScroll.scrollTo({ element: "#invest" })}
            >Invest</Button
          >
        </div>
      </div>
    </div>
  </div>
</section>
