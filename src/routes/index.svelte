<!-- Hero section -->
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

<script lang="ts">
  import SvelteSeo from 'svelte-seo'
  //@ts-ignore
  import {page} from '$app/stores'
  import Hero from '$lib/Hero.svelte'
  import AlternatingFeatures from '$lib/AlternatingFeatures.svelte'
  import GradientFeatures from '$lib/GradientFeatures.svelte'
  import CallToAction from '$lib/CallToAction.svelte'
  import PostsGrid from '$lib/PostsGrid.svelte'
  import GMap from '../lib/GMap.svelte'
  import ServiceArea from '../lib/ServiceArea.svelte'

  export let posts
  posts = posts.slice(0, 3)
</script>

<SvelteSeo
  title="FtS Excavation - Home"
  description="Landscaping and site preparation proffesionals serving the Puyallup and Tacoma region."
  keywords="excavation land clearing foundations leveling dirt removal residential construction utility installation tacoma puyallup"
  openGraph={{
    title: 'FtS Excavation - Home',
    description:
      'Landscaping and site preparation proffesionals serving the Puyallup and Tacoma region.',
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

<Hero />
<AlternatingFeatures />
<GradientFeatures />
<div>
  <div class="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
    <h2 class="text-3xl text-center font-extrabold text-gray-900 tracking-tight">
      Recent Projects
    </h2>
    <p class="mt-4 mb-12 text-center text-lg text-gray-500">
      We are proud to showcase a few examples of the work we are doing in the South Puget Sound.
    </p>
    <PostsGrid {posts} />
  </div>
</div>
<ServiceArea />
<CallToAction />
