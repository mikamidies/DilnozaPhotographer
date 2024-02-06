<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title section__title">
        {{ $store.state.translations['main.offer'] }}
      </h4>
      <div class="items">
        <div v-for="item in services" :key="item.id" class="item">
          <div class="img">
            <img :src="item.images[0].image" alt="" class="pic" />
          </div>
          <div class="content">
            <h1 class="name">{{ item.title }}</h1>
            <div class="desc" v-html="item.desc"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['services'],
}
</script>

<style scoped>
.wrap {
  padding: 40px 0;
}
.items {
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin-top: 32px;
}
.item {
  display: flex;
}
.item:nth-child(even) {
  flex-direction: row-reverse;
}
.item:nth-child(even) .img {
  justify-content: flex-end;
  display: flex;
}
.img,
.content {
  width: 50%;
}
.pic {
  width: 75%;
  height: 490px;
  object-fit: cover;
  display: flex;
}
.name {
  font-size: 32px;
  line-height: 120%;
  font-family: var(--decor);
  font-weight: 600;
  margin-bottom: 16px;
}
.desc {
  font-size: 18px;
  line-height: 150%;
  opacity: 0.9;
  display: block;
  margin-bottom: 16px;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 20px 0;
  }
  .items {
    margin-top: 20px;
    gap: 16px;
  }
  .item {
    flex-direction: column !important;
    gap: 16px;
  }
  .img {
    width: 100%;
  }
  .content {
    width: 100%;
  }
  .pic {
    width: 100%;
    height: 320px;
  }
  .name {
    font-size: 24px;
    margin-bottom: 16px;
  }
  .item p {
    font-size: 14px;
    margin-bottom: 12px;
  }
}
</style>
