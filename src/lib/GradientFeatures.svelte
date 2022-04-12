<!-- Gradient Feature Section -->
<script lang="ts">
  const services = [
    {
      title: 'Drainage',
      body: 'Got surface water or underground water issues? We can install a french drain to redirect it.',
      image: {url: '/image/stream_200.webp', alt: 'A stream in the woods during fall'}
    },
    {
      title: 'Foundations',
      body: 'Whether you are building a new residence or adding on, FtS can prepare your site and dig the foundation.',
      image: {url: '/image/concrete_200.webp', alt: 'A concrete slab'}
    },
    {
      title: 'Land Clearing',
      body: 'Make the most out of your property by hiring FtS to remove your brush, stumps and more.',
      image: {url: '/image/brush_200.webp', alt: 'Wild country with trees and shrubs'}
    },
    {
      title: 'Septic & Drain Fields',
      body: 'We will dig for the tanks and drain fields as a subcontractor for a certified installer.',
      image: {url: '/image/outhouse_200.webp', alt: 'An outhouse on a field of green grass'}
    },
    {
      title: 'Sloping or Leveling',
      body: 'Slope or level an area to make it usable for sports or play.',
      image: {
        url: '/image/baseball_200.webp',
        alt: 'A pitch in a baseball game seen from behind the umpire'
      }
    },
    {
      title: 'Driveways',
      body: 'We know how to build and grade a firm driveway with the right materials and compaction specifications.',
      image: {url: '/image/tire_200.webp', alt: 'A black tire on a paved driveway'}
    },
    {
      title: 'Public Utility Extensions',
      body: 'FtS offers a full range of commercial and residential excavation services.',
      image: {url: '/image/trafficLight.webp', alt: 'A traffic light'}
    },
    {
      title: 'Stack Stone Wall',
      body: 'Dual purpose, these can be designed to aid in water drainage and erosion. Stack stone walls can be striking and impressive as well.',
      image: {url: '/image/slackstone_200.webp', alt: 'A pile of stone bricks'}
    }
  ]
</script>

<div class="bg-gradient-to-r from-green-800 to-teal-600">
  <div class="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
    <h2 class="text-3xl font-extrabold text-white tracking-tight">
      Commercial and domestic services
    </h2>
    <p class="mt-4 max-w-3xl text-lg text-purple-200">
      If it involves dirt then we have probably done it before. Here are a few of the services we
      offer.
    </p>
    <div
      class="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16"
    >
      {#each services as service}
        <div>
          <div>
            <img class="h-36 w-36 rounded-md" src={service.image.url} alt={service.image.alt} />
          </div>
          <div class="mt-6">
            <h3 class="text-lg font-medium text-white">{service.title}</h3>
            <p class="mt-2 text-base text-purple-200">
              {service.body}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
