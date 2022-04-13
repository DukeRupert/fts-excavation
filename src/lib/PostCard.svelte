<script>
  import SanityImage from './SanityImage.svelte'

  export let post
</script>

<article class="w-full rounded-lg shadow-md lg:flex md:flex">
  {#if post.image}
    <SanityImage image={post.image} maxWidth={300} />
  {/if}
  <div class="px-6 py-4">
    <h4 class="mb-3 text-base font-semibold tracking-tight text-gray-900">{post.title}</h4>
    <p class="mb-2 text-sm leading-normal text-justify text-gray-500">
      {post.excerpt}
    </p>
    <a
      rel="prefetch"
      href="/projects/{post.slug.current}"
      class="inline-flex bg-gradient-to-r from-breaker-bay-500 to-spectra-500 bg-origin-border mt-6 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-breaker-bay-600 hover:to-spectra-600"
      >Read more</a
    >
  </div>
</article>
