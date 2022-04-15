<script>
  import '../app.css'
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
  import {GoogleAnalytics} from '@beyonk/svelte-google-analytics'
</script>

<GoogleAnalytics properties={['G-RFVL3X4Y2Q']} />
<Header />
<div class="bg-white">
  <main>
    <slot />
  </main>
</div>
<Footer />
