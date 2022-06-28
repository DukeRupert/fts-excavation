<script>
  import SanityImage from './SanityImage.svelte'

  export let post
</script>

<article
  class="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
>
  <div class="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-90 sm:aspect-none sm:h-96">
    {#if post.image}
      <SanityImage image={post.image} maxWidth={600} />
    {/if}
  </div>
  <div class="flex-1 p-4 space-y-2 flex flex-col">
    <h3 class="text-sm font-medium text-gray-900">
      {post.title}
    </h3>
    <p class="text-sm text-gray-500">{post.excerpt}</p>
    <div class="flex-1 flex flex-col justify-end">
      <p class="text-sm italic text-gray-500">
        {new Date(post.publishedAt).toLocaleDateString('en', {
          month: 'long',
          day: '2-digit',
          year: 'numeric'
        })}
      </p>
      <a
        rel="prefetch"
        href="/projects/{post.slug.current}"
        class="inline-flex max-w-xs mr-auto bg-origin-border mt-6 px-4 py-2 border border-evergreen-500 text-base font-medium rounded-md shadow-sm text-evergreen-500 transform hover:translate-x-2 transition ease-out hover:text-evergreen-500"
        >Read more <svg
          class="h-6 w-6 ml-2 currentColor"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" /> <line x1="5" y1="12" x2="19" y2="12" />
          <line x1="13" y1="18" x2="19" y2="12" /> <line x1="13" y1="6" x2="19" y2="12" /></svg
        ></a
      >
    </div>
  </div>
</article>
