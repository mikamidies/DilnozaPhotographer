<template>
  <div class="wrap">
    <div class="container">
      <div class="header">
        <h4 class="title section__title">
          {{ $store.state.translations['main.services'] }}
        </h4>
      </div>
      <div class="grid">
        <div class="left">
          <button
            v-for="item in services"
            :key="item.id"
            @click="activeTab = item.id"
            :class="{ active: activeTab == item.id }"
          >
            {{ item.title }}
          </button>
        </div>
        <div
          v-for="serv in services"
          :key="serv.id"
          :class="{ active: activeTab == serv.id }"
          class="content"
        >
          <div class="mid">
            <div class="text" v-html="serv.desc"></div>
          </div>
          <div class="right">
            <div class="buttons">
              <div class="swiper-buttons">
                <button class="prev" :class="`prev` + serv.id">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M10 8L6 12M6 12L10 16M6 12L18 12"
                      stroke="#28303F"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <div class="pagination">
                  <div
                    class="swiper-pagination"
                    :class="`swiper-pagination` + serv.id"
                  ></div>
                </div>
                <button class="next" :class="`next` + serv.id">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M14 16L18 12M18 12L14 8M18 12L6 12"
                      stroke="#28303F"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="swiper servicesSwiper" :class="`swiper` + serv.id">
              <div class="swiper-wrapper">
                <div
                  v-for="photo in serv.images"
                  :key="photo.id"
                  class="swiper-slide"
                >
                  <img :src="photo.image" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.min.css'

export default {
  props: ['services'],

  data() {
    return {
      activeTab: 1,
    }
  },

  mounted() {
    this.services.forEach((element) => {
      new Swiper('.swiper' + element.id, {
        spaceBetween: 24,
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination' + element.id,
          type: 'fraction',
        },
        navigation: {
          nextEl: '.next' + element.id,
          prevEl: '.prev' + element.id,
        },
      })
    })
  },
}
</script>

<style scoped>
.wrap {
  padding: 40px 0;
}
.grid {
  display: grid;
  grid-template-columns: 3.3fr 6.7fr;
  gap: 24px;
}
.swiper,
.right,
.content {
  min-width: 0;
}
.swiper img {
  width: 100%;
  height: 440px;
  object-fit: cover;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}
.swiper-pagination {
  position: static;
}
.pagination {
}
.buttons {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 48px;
  position: absolute;
  top: -64px;
  width: 100%;
}
.buttons button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0;
  cursor: pointer;
}
.swiper-buttons {
  display: flex;
  align-items: center;
  gap: 24px;
}
.left {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.left button {
  background: var(--light);
  color: white;
  border: 0;
  font-size: 20px;
  cursor: pointer;
  padding: 24px;
  transition: 0.4s;
}
.left button.active {
  background: var(--main);
}
.text {
  font-size: 18px;
  line-height: 150%;
}
.text :deep(p) {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}
.content {
  gap: 24px;
  grid-template-columns: 5fr 5fr;
  display: none;
}
.content.active {
  display: grid;
}
.right {
  position: relative;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 20px 0;
  }
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
  .content.active {
    display: flex;
    flex-direction: column-reverse;
    gap: 16px;
  }
  .buttons {
    display: none;
  }
  .left {
    gap: 8px;
  }
  .left button {
    padding: 16px;
  }
  .swiper img {
    height: 320px;
  }
  .header {
    margin-bottom: 20px;
  }
  .mid p {
    font-size: 14px;
  }
}
</style>
