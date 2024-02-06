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
import translationsApi from '@/api/translations.js'

export default {
  name: 'IndexPage',

  data() {
    return {
      translations: [],
    }
  },

  async mounted() {
    const map = await this.$axios.get(
      'https://nominatim.openstreetmap.org/search?format=json&q=toshkent'
    )

    const translations = await translationsApi.getTranslations(this.$axios)

    await this.$store.commit('getTranslations', translations.data)
  },

  watch: {
    async currentLang() {
      const translations = await translationsApi.getTranslations(
        this.$axios,
        {}
      )

      await this.$store.commit('getTranslations', translations.data)
    },
  },

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
