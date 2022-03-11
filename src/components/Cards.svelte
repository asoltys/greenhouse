<script lang="ts">
  import Card from "./components/Card.svelte";
</script>

<section class="bg-white border-b py-8" id="howitworks">
  <div class="container mx-auto flex flex-wrap pt-4 pb-12">
    <h1
      class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
    >
      How It Works
    </h1>
    <div class="w-full mb-4">
      <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
    </div>

    <Card
      subtitle="Step 1"
      title="Purchase the property"
      description="Located on the beautiful Haida Gwaii islands, this 2 acre parcel of land is already cleared and level. Making it ideal for beginning construction right away."
      goal="$160,000"
      button="View map"
    />

    <Card
      subtitle="Step 2"
      title="Build the greenhouse"
      description="Local experts in greenhouse construction have already been consulted with and are prepared for the job. This will include solar panel generated energy on the roof and in-floor radiant heating powered by the ASIC miners. "
      goal="$2,800,000"
      button="View plans"
    />

    <Card
      subtitle="Step 3"
      title="Go operational"
      description="Approximately 30 Bitmain Antminer S19s will begin heating the greenhouse, hashing at a rate of ~3PH/s. Locals will be employed to grow the crops inside. Investors begin earning a return on their investment as our hashrate begins mining bitcoin. Funds are automatically deposited into token holders liquid wallets."
      goal="$340,000"
      button="View stats"
    />
  </div>
</section>
