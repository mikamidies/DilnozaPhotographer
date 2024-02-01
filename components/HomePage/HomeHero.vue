<template>
  <div class="wrap">
    <div class="container">
      <div class="top">
        <h4 class="title"></h4>
        <p></p>
      </div>
      <div class="bottom">
        <div class="images">
          <img v-for="item in photos" :key="item.id" :src="item.image" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['photos'],
}
</script>

<style scoped>
.wrap {
  padding: 40px 0;
}
.top {
  display: grid;
  grid-template-columns: 3.3fr 6.7fr;
  margin-bottom: 40px;
  align-items: center;
  gap: 16px;
}
.images {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.images img {
  width: 100%;
  height: 620px;
  object-fit: cover;
}
.title {
  font-size: 46px;
  font-family: var(--decor);
  font-weight: 600;
  text-transform: uppercase;
}
.top p {
  font-size: 18px;
  line-height: 150%;
}
@media screen and (max-width: 1024px) {
  .top {
    grid-template-columns: repeat(1, 1fr);
  }
  .title {
    font-size: 32px;
  }
  .top p {
    font-size: 14px;
    line-height: 150%;
  }
  .images {
    gap: 8px;
  }
  .images img {
    height: 180px;
  }
}
</style>
