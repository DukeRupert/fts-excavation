<script context="module">
  export async function load({fetch}) {
    try {
      const res = await fetch('/projects/all.json')
      const data = await res.json()
      return {
        props: data
      }
    } catch (err) {
      console.log('500:', err)
    }
  }
</script>

<script>
  import SvelteSeo from 'svelte-seo'
  //@ts-ignore
  import {page} from '$app/stores'
  import PostsGrid from '$lib/PostsGrid.svelte'
  import CallToAction from '$lib/CallToAction.svelte'

  export let posts
</script>

<SvelteSeo
  openGraph={{
    title: 'Projects',
    description:
      'We are proud to showcase a few examples of the work we are doing in the South Puget Sound.',
    url: $page.url.href,
    type: 'website',
    images: [
      {
        url: `${$page.url.host}/image/fts_excavation_ranier_960_1280.webp`,
        width: 960,
        height: 1280,
        alt: 'FtS Excavation excavator in front of Mount Rainier'
      }
    ]
  }}
/>

<div class="relative">
  <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-base font-semibold text-breaker-bay-500 tracking-wide uppercase">Projects</h2>
      <p
        class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
      >
        See what we do
      </p>
      <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
        We are proud to showcase a few examples of the work we are doing in the South Puget Sound.
      </p>
    </div>
    <div class="pt-16 pb-32">
      <PostsGrid {posts} />
    </div>
    <CallToAction />
  </div>
</div>
