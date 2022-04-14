<script>
  import PostCard from '$lib/PostCard.svelte'

  export let posts = []
</script>

<section
  class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"
>
  {#each posts as post (post.slug.current)}
    <PostCard {post} />
  {/each}
</section>
