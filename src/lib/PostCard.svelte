<script>
  import SanityImage from './SanityImage.svelte'

  export let post
</script>

<!-- <article>
  <h2>
    <a rel="prefetch" href="/blog/{post.slug.current}">{post.title}</a>
  </h2>
  {#if post.image}
    <div class="image">
      <SanityImage image={post.image} maxWidth={300} />
    </div>
  {/if}
</article> -->

<article class="w-full rounded-lg shadow-md lg:flex md:flex">
  {#if post.image}
    <SanityImage image={post.image} maxWidth={300} />
  {/if}
  <div class="px-6 py-4">
    <h4 class="mb-3 text-base font-semibold tracking-tight text-gray-900">{post.title}</h4>
    <p class="mb-2 text-sm leading-normal text-justify text-gray-500">
      Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo
      laborum maiores sequi nam tenetur laud.
    </p>
    <a
      rel="prefetch"
      href="/projects/{post.slug.current}"
      class="inline-flex bg-gradient-to-r from-teal-600 to-green-700 bg-origin-border mt-6 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-teal-700 hover:to-green-800"
      >Read more</a
    >
  </div>
</article>

<style>
  h2 {
    margin: 1rem 0 0;
  }

  h2 a {
    text-decoration: none;
  }

  /* .image {
    padding-bottom: 62.5%;
    position: relative;
    overflow: hidden;
  }

  .image :global(img) {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0;
  } */
</style>
