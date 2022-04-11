<script>
  import '../app.css'
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<Header />
<div class="bg-white">
  <main>
    <slot />
  </main>
</div>
<Footer />
