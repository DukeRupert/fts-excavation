<!-- header.svelte -->
<script context="module">
  // @ts-ignore
  import {page} from '$app/stores'
</script>

<script lang="ts">
  let pathname
  $: ({pathname} = $page.url)

  import {links, tel} from './store'
  let menuOpen = false
</script>

<!-- <header>
  <span>{blogTitle}</span>
  <nav>
    <ul>
      <li><a data-selected={pathname === '/'} href="/">home</a></li>
    </ul>
  </nav>
</header> -->

<header>
  <div class="relative bg-white">
    <div
      class="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8"
    >
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <a href="/" class="z-20">
          <span class="sr-only">FtS Excavation</span>
          <img
            class="h-16 w-auto p-1 sm:h-20 sm:p-2 bg-gradient-to-r from-teal-600 to-green-700 rounded-md"
            src="/FtS_Logo.svg"
            alt="FtS Excavation logo"
          />
        </a>
      </div>
      <div class="-mr-2 -my-2 md:hidden z-10">
        <button
          type="button"
          class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          aria-expanded="false"
          on:click={() => (menuOpen = !menuOpen)}
        >
          <span class="sr-only">Open menu</span>
          <!-- Heroicon name: outline/menu -->
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <nav class="hidden md:flex space-x-10">
        {#each $links as link}
          <a href={link.path} class="text-base font-medium text-gray-500 hover:text-gray-900">
            {link.title}
          </a>
        {/each}
      </nav>
      <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <a
          href="/quote"
          class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Quote
        </a>
        <a
          href={$tel.href}
          class="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-teal-600 to-green-700 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-teal-600 hover:to-green-800"
        >
          Call
        </a>
      </div>
    </div>

    <div
      class="absolute z-1 top-0 inset-x-0 p-2 transition transform origin-top-left md:hidden opacity-0 scale-95 {menuOpen
        ? 'z-30 duration-200 ease-out opacity-100 scale-100'
        : 'z-1 duration-100 ease-in opacity-0 scale-95'}"
    >
      <div
        class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
      >
        <div class="pt-5 pb-6 px-5">
          <div class="flex items-center justify-between">
            <div>
              <a href="/" on:click={() => (menuOpen = !menuOpen)}>
                <img
                  class="h-16 w-auto p-1 sm:h-20 sm:p-2 bg-gradient-to-r from-teal-600 to-green-700 rounded-md"
                  src="/FtS_Logo.svg"
                  alt="FtS Excavation logo"
                />
              </a>
            </div>
            <div class="-mr-2">
              <button
                type="button"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
                on:click={() => (menuOpen = !menuOpen)}
              >
                <span class="sr-only">Close menu</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-6">
            <nav class="grid grid-cols-1 gap-7">
              {#each $links as link}
                <a
                  href={link.path}
                  class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                  on:click={() => (menuOpen = !menuOpen)}
                >
                  <div
                    class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-teal-600 to-green-700 text-white"
                  >
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox={link.svg.viewbox}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d={link.svg.path}
                      />
                    </svg>
                  </div>
                  <div class="ml-4 text-base font-medium text-gray-900">{link.title}</div>
                </a>
              {/each}
            </nav>
          </div>
        </div>
        <div class="py-6 px-5">
          <div class="mt-6">
            <a
              href={$tel.href}
              class="w-full flex items-center justify-center bg-gradient-to-r from-teal-600 to-green-700 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-teal-700 hover:to-green-800"
            >
              Call Us
            </a>
            <p class="mt-6 text-center text-base font-medium text-gray-500">
              <a href="/quote" class="text-gray-900"> Get A Quote </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
