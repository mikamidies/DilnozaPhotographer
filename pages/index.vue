<template>
  <div class="master">
    <DesktopHeader />
    <main class="main">
      <HomeHero :photos="photos" />
      <HomeServices :services="services" />
      <HomeGallery :photos="photos" />
      <HomeOffer :services="services" />
      <HomeWorkflow />
    </main>
    <DesktopFooter />
  </div>
</template>

<script>
import imagesApi from '@/api/photos.js'
import servicesApi from '@/api/services.js'

export default {
  name: 'IndexPage',

  mounted() {},

  async asyncData({ $axios }) {
    const photos = await imagesApi.getPhotos($axios)
    const services = await servicesApi.getServices($axios)

    return {
      photos,
      services,
    }
  },
}
</script>
