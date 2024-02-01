<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title section__title"></h4>
      <div class="grid" id="lightgallery">
        <a
          v-for="item in photos"
          :key="item.id"
          class="item"
          :href="item.image"
        >
          <img :src="item.image" alt="" class="pic" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['photos'],
  mounted() {
    const el = document.getElementById('lightgallery')
    window.lightGallery(el)
  },
}
</script>

<style scoped>
.wrap {
  padding: 40px 0;
}
.grid {
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
}
.pic {
  width: 100%;
  height: 210px;
  object-fit: cover;
}
.item:nth-child(3) {
  grid-column: 3 / 6;
}
.item:nth-child(5) {
  grid-column: 1 / 3;
}
.item:nth-child(8) {
  grid-column: 5 / 7;
}
@media screen and (max-width: 1024px) {
  .wrap {
    overflow: hidden;
    padding: 20px 0;
  }
  .grid {
    margin-top: 20px;
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
    margin-right: -16px;
    padding-right: 16px;
  }
  .item {
    width: 240px;
    display: flex;
  }
  .pic {
    width: 240px;
    height: 320px;
  }
  .grid::-webkit-scrollbar {
    display: none;
  }

  .grid {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}
</style>
