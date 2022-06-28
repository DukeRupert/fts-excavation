<script defer>
  import {onMount} from 'svelte'
  import {Loader} from 'google-maps'

  let container
  let map
  let zoom = 9
  let center = {lat: 47.16335, lng: -122.403165}

  onMount(async () => {
    const options = {}
    const loader = new Loader('AIzaSyDFDtn5LA4snj8PtOp_LA0-WZJYsmwMC_U', options)
    const google = await loader.load()

    // Define the LatLng coordinates for the polygon's path.
    const serviceAreaCoords = [
      {lat: 47.3174223698386, lng: -122.54598725145615},
      {lat: 47.3150948095017, lng: -122.41552461616874},
      {lat: 47.243821890855585, lng: -121.97195165619158},
      {lat: 47.19485354524335, lng: -121.9417392564408},
      {lat: 46.994781253224595, lng: -122.23974338125518},
      {lat: 46.9952495880124, lng: -122.31527438063212},
      {lat: 47.187387731139665, lng: -122.58375275114462},
      {lat: 47.3174223698386, lng: -122.54598725145615}
    ]

    // Construct the polygon.
    const serviceArea = new google.maps.Polygon({
      paths: serviceAreaCoords,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#ff9999',
      fillOpacity: 0.35
    })

    map = new google.maps.Map(container, {
      zoom,
      center: center
    })

    serviceArea.setMap(map)
  })
</script>

<div class="w-full h-full" bind:this={container} />
