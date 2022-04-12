<script>
  import PostCard from '$lib/PostCard.svelte'

  export let posts = []
</script>

<section class="grid grid-cols-1 gap-8">
  {#each posts as post (post.slug.current)}
    <PostCard {post} />
  {/each}
</section>
