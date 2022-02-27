<script context="module">
  import { get } from "$lib/api";
  export async function load({ fetch, session }) {
    const props = await get("/rate.json", fetch);
    return { props };
  }
</script>

<script>
  import LandingPage from "$components/LandingPage.svelte";
  export let rate;
</script>

<LandingPage />

<!-- <h1 class="">Welcome to SvelteKit</h1>
<p>Visit <a class="text-blue-600 underline" href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
