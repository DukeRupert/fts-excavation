<!-- Hero.svelte -->
<script lang="ts">
  import {tel} from './store'
</script>

<div class="relative">
  <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
      <div class="absolute inset-0">
        <video
          autoplay
          loop
          muted
          poster="/image/poster.webp"
          width="2235.73"
          height="1257.6"
          class="h-full w-full object-cover"
        >
          <source src="video/excavator.mp4" type="video/mp4" />
          Your browser does not support the video tag.
          <track kind="captions" />
        </video>
        <!-- <div
          class="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply"
        /> -->
      </div>
      <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
        <img src="/FtS_Logo.svg" class="w-40 md:w-60 lg:w-80 mx-auto" alt="FtS Excavation logo" />
        <p class="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
          Proudly serving the South Puget Sound.
        </p>
        <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
          <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
            <a
              href="/contact-us"
              class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-teal-700 bg-white hover:bg-indigo-50 sm:px-8"
            >
              Contact Us
            </a>
            <a
              href={$tel.href}
              class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
