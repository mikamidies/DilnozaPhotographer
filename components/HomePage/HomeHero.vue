<template>
  <div class="wrap">
    <div class="container">
      <div class="top">
        <h1 class="title">Wedding Photographer</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea numquam
          adipisci placeat vitae optio labore. Doloribus saepe earum soluta
          deleniti quaerat error dolor praesentium excepturi!
        </p>
      </div>
      <div class="bottom">
        <div class="images">
          <img src="@/assets/img/hero-1.jpg" alt="" />
          <img src="@/assets/img/hero-2.jpg" alt="" />
          <img src="@/assets/img/hero-3.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
  font-size: 56px;
  font-family: var(--decor);
  font-weight: 600;
}
.top p {
  font-size: 18px;
  line-height: 150%;
}
</style>
