<script>
  import Invoice from "$components/Invoice.svelte";
  let shares = 0;
</script>

<section class="bg-white border-b py-8">
  <div class="container max-w-5xl mx-auto m-8">
    <h1
      class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
    >
      Purchase Shares
    </h1>
    <div class="w-full mb-4">
      <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
    </div>
    <div class="flex flex-wrap">
      <div class="w-5/6 sm:w-1/2 p-6">
        <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
          How many shares would you like?
        </h3>
        <input
          class="w-full rounded"
          type="number"
          max="3140000"
          on:change={(e) => (shares = e.target.value)}
          value={shares}
        />
      </div>
      <div class="w-full sm:w-1/2 p-6">
        <img src="/startup.jpg" alt="" class="rounded" />
      </div>
    </div>
    <div class="flex flex-wrap flex-col-reverse sm:flex-row">
      <div class="w-full sm:w-1/2 p-6 mt-6">
        <img src="/bitcoin.svg" alt="" />
      </div>
      <div class="w-full sm:w-1/2 p-6 mt-6">
        <div class="align-middle">
          <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
            This venture is funded by bitcoin.
          </h3>
          <Invoice {shares} />
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  input {
    @apply border border-black p-4 text-black text-xl;
  }
</style>
