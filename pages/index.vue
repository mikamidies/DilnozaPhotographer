<template>
  <div class="master">
    <DesktopHeader />
    <main class="main">
      <HomeHero />
      <HomeServices />
      <HomeGallery :photos="photos" />
    </main>
  </div>
</template>

<script>
import imagesApi from '@/api/photos'

export default {
  name: 'IndexPage',

  mounted() {},

  async asyncData({ $axios }) {
    const photos = await imagesApi.getCertificates($axios)

    return {
      photos,
    }
  },
}
</script>
