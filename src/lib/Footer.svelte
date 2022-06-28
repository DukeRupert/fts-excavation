<!-- footer.svelte -->
<script lang="ts">
  import {tel, links} from './store'
  import ChamberOfCommerce from './ChamberOfCommerce.svelte'
</script>

<footer class="bg-white">
  <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
    <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
      {#each $links as link}
        <div class="px-5 py-2">
          <a href={link.path} class="text-base text-gray-500 hover:text-gray-200"> {link.title} </a>
        </div>
      {/each}
    </nav>
    <div class="mt-8 flex justify-center space-x-6">
      <a
        href="https://www.facebook.com/FtS-Excavation-107417208285323"
        class="text-actionorange-500 hover:text-actionorange-300"
      >
        <span class="sr-only">Facebook Page</span>
        <svg class="h-10 w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill-rule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clip-rule="evenodd"
          />
        </svg>
      </a>

      <a
        href="https://www.youtube.com/channel/UC_LbjVWjiiFg3h9lB6rcvGQ"
        class="text-actionorange-500 hover:text-actionorange-300"
      >
        <span class="sr-only">Youtube Channel</span>
        <svg
          class="h-10 w-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
          /> <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg
        >
      </a>
    </div>
    <a
      href="https://www.google.com/maps/place/FtS-Excavation,+LLC/@47.1761259,-122.2630845,10z/data=!4m5!3m4!1s0x0:0xb896498a4891ace9!8m2!3d47.1761259!4d-122.2630845"
      class="mt-8 block text-center text-base text-evergreen-500"
      >12714 151st St E Puyallup, WA 98374</a
    >
    <a
      href={$tel.href}
      class="mt-8 flex mx-auto items-center justify-center text-center text-base text-evergreen-500"
    >
      <svg class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>

      {$tel.pretty}
    </a>
    <p class="mt-8 text-center text-base text-gray-400">
      &copy; 2021 FTS Excavation, LLC. All rights reserved.
    </p>
    <a href="https://www.firefly.llc">
      <p class="mt-8 text-center text-base text-gray-400 hover:text-blue-400">Design by Firefly</p>
    </a>
    <ChamberOfCommerce />
  </div>
</footer>
