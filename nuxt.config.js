export default {
  head: {
    title: 'Dilnoza Photographer',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['ant-design-vue/dist/antd.css', '@/assets/css/main.css'],

  plugins: ['@/plugins/antd-ui', { src: '@/plugins/lightGallery.client.js' }],

  components: true,

  buildModules: [],

  modules: ['@nuxtjs/axios'],

  axios: {
    baseURL: 'https://apiphoto.pythonanywhere.com/api',
  },

  build: {
    babel: {
      compact: true,
    },
    standalone: true,
    extend(config, ctx) {
      config.externals = [
        {
          encoding: 'encoding',
        },
      ]
    },
  },

  ssr: true,
}
