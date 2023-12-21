<template>
  <div class="wrap">
    <div class="container">
      <div class="header">
        <h2 class="title section__title">Fields i work for</h2>
      </div>
      <div class="grid">
        <div class="left">
          <button
            @click=";(servOne = true), (servTwo = false), (servThree = false)"
            :class="{ active: servOne == true }"
          >
            Wedding Photography
          </button>
          <button
            @click=";(servOne = false), (servTwo = true), (servThree = false)"
            :class="{ active: servTwo == true }"
          >
            Engagement Sessions
          </button>
          <button
            @click=";(servOne = false), (servTwo = false), (servThree = true)"
            :class="{ active: servThree == true }"
          >
            Bridal Portraits
          </button>
        </div>
        <div :class="{ active: servOne == true }" class="content">
          <div class="mid">
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              maiores hic, recusandae accusamus voluptatem obcaecati, quod nihil
              cupiditate sint voluptatibus unde quaerat, doloribus tenetur!
              Pariatur architecto et error cumque voluptates.
            </p>
          </div>
          <div class="right">
            <div class="buttons">
              <div class="swiper-buttons">
                <button class="prev">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.068 17.713L5.35501 12L11.068 6.28699M18.669 12H5.37201"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button class="next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.956 6.28699L18.669 12L12.956 17.713M5.35501 12H18.652"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div class="pagination">
                <div class="swiper-pagination"></div>
              </div>
            </div>
            <div class="swiper servicesSwiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="@/assets/img/hero-1.jpg" alt="" />
                </div>
                <div class="swiper-slide">
                  <img src="@/assets/img/hero-2.jpg" alt="" />
                </div>
                <div class="swiper-slide">
                  <img src="@/assets/img/hero-3.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div :class="{ active: servTwo == true }" class="content">
          <div class="mid">
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              maiores hic, recusandae accusamus voluptatem obcaecati, quod nihil
              cupiditate sint voluptatibus unde quaerat, doloribus tenetur!
              Pariatur architecto et error cumque voluptates.
            </p>
          </div>
          <div class="right">
            <div class="buttons">
              <div class="swiper-buttons">
                <button class="prev">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.068 17.713L5.35501 12L11.068 6.28699M18.669 12H5.37201"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button class="next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.956 6.28699L18.669 12L12.956 17.713M5.35501 12H18.652"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div class="pagination">
                <div class="swiper-pagination"></div>
              </div>
            </div>
            <div class="swiper servicesSwiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="@/assets/img/hero-2.jpg" alt="" />
                </div>
                <div class="swiper-slide">
                  <img src="@/assets/img/hero-2.jpg" alt="" />
                </div>
                <div class="swiper-slide">
                  <img src="@/assets/img/hero-3.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div :class="{ active: servThree == true }" class="content">
          <div class="mid">
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              maiores hic, recusandae accusamus voluptatem obcaecati, quod nihil
              cupiditate sint voluptatibus unde quaerat, doloribus tenetur!
              Pariatur architecto et error cumque voluptates.
            </p>
          </div>
          <div class="right">
            <div class="buttons">
              <div class="swiper-buttons">
                <button class="prev">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.068 17.713L5.35501 12L11.068 6.28699M18.669 12H5.37201"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button class="next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.956 6.28699L18.669 12L12.956 17.713M5.35501 12H18.652"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div class="pagination">
                <div class="swiper-pagination"></div>
              </div>
            </div>
            <div class="swiper servicesSwiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="@/assets/img/hero-3.jpg" alt="" />
                </div>
                <div class="swiper-slide">
                  <img src="@/assets/img/hero-2.jpg" alt="" />
                </div>
                <div class="swiper-slide">
                  <img src="@/assets/img/hero-3.jpg" alt="" />
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
  data() {
    return {
      servOne: true,
      servTwo: false,
      servThree: false,
    }
  },

  mounted() {
    const swiper = new Swiper('.servicesSwiper', {
      spaceBetween: 24,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
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
  display: none;
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
.mid p {
  font-size: 18px;
  line-height: 150%;
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
</style>
