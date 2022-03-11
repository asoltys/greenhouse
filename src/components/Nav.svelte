<script lang="ts">
  import * as animateScroll from "svelte-scrollto";
  import { clickOutside, clickOutsideAction } from "$lib/actions/clickOutside";
  import Button from "./components/Button.svelte";

  let y: number;
  let navFloat = false;
  $: navFloat = y > 10;

  let showMenu = false;
  const toggleMenu = () => (showMenu = !showMenu);
  let hambugerEl;

  const onClickOutsideAction = ({ target }) => {
    if (!hambugerEl.contains(target)) showMenu = false;
  };
  const onClickOutside = ({
    detail: {
      event: { target },
    },
  }) => {
    if (!hambugerEl.contains(target)) showMenu = false;
  };
</script>

<svelte:window bind:scrollY={y} />
<!--Nav-->
<nav
  id="header"
  class={`
  fixed w-full z-30 top-0 text-white
  ${navFloat && "bg-white"}
  `}
>
  <div
    class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
  >
    <div class="pl-4 flex items-center">
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a
        class:text-gray-800={navFloat}
        class:text-white={!navFloat}
        class="no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
        href="#"
      >
        <svg
          class="h-8 fill-current inline"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          data-v-4fa90e7f=""
          ><path
            d="M11.283 10.967l-.05-.015.528-2.117.212.05c.706.157 2.225.498 1.95 1.613-.295 1.173-2.049.646-2.64.469zM10.37 14.405l.086.025c.728.217 2.796.832 3.076-.333.289-1.121-1.57-1.558-2.402-1.753-.091-.022-.17-.04-.232-.056l-.528 2.117z"
          /><path
            fill-rule="evenodd"
            d="M12 21a9 9 0 100-18 9 9 0 000 18zm3.873-10.384c.206-1.302-.693-1.98-1.94-2.438l.438-1.77-.99-.246-.427 1.726-.193-.05c-.196-.05-.389-.1-.587-.144l.428-1.725-1.017-.252-.428 1.725-2.018-.5-.292 1.18s.749.163.721.179c.4.108.469.392.447.609l-.509 2.007-.698 2.823c-.055.134-.19.326-.464.26.012.012-.728-.191-.728-.191l-.486 1.245 1.958.534-.436 1.761.983.244.437-1.762c.158.046.318.083.473.119.116.027.229.053.336.082l-.437 1.761.985.244.437-1.761c1.695.323 2.975.172 3.547-1.497.46-1.33.03-2.09-.863-2.589.67-.163 1.167-.627 1.323-1.574z"
            clip-rule="evenodd"
          /></svg
        >
        Greenhouse
      </a>
    </div>
    <div bind:this={hambugerEl} class="block lg:hidden pr-4">
      <button
        on:click={toggleMenu}
        id="nav-toggle"
        class="flex items-center p-1 text-green-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      >
        <svg
          class="fill-current h-6 w-6"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <!-- use:clickOutsideAction={onClickOutsideAction} -->
    <!-- use:clickOutside on:clickOutside={onClickOutside} -->
    <div
      use:clickOutside
      on:clickOutside={onClickOutside}
      class:hidden={!showMenu}
      class="hidden w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
      id="nav-content"
    >
      <ul class="list-reset lg:flex justify-end flex-1 items-center">
        <li class="mr-3">
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a
            class="inline-block py-2 px-4 text-black font-bold no-underline"
            href="#"
            on:click={() => animateScroll.scrollTo({ element: "#home" })}
            >Home</a
          >
        </li>
        <li class="mr-3">
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a
            class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
            href="#"
            on:click={() => animateScroll.scrollTo({ element: "#howitworks" })}
            >How It Works</a
          >
        </li>
      </ul>
      <button
        id="navAction"
        class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
        on:click={() => animateScroll.scrollTo({ element: "#invest" })}
      >
        Invest
      </button>
    </div>
  </div>
  <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
</nav>
