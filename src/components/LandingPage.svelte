<script lang="ts">
  import Nav from "./Nav.svelte";
  import Hero from "./Hero.svelte";
  import Invest from "./Invest.svelte";
  import Cards from "./Cards.svelte";
  import Pricing from "./Pricing.svelte";
  import CallToAction from "./CallToAction.svelte";
  import Footer from "./Footer.svelte";
</script>

<div
  class="leading-normal tracking-normal text-white gradient"
  style="font-family: 'Source Sans Pro', sans-serif;"
>
  <Nav />

  <Hero />

  <Cards />

  <Pricing />

  <CallToAction />

  <Invest />

  <Footer />
</div>

<style>
  .gradient {
    @apply bg-gradient-to-r from-green to-yellow;
  }
</style>
