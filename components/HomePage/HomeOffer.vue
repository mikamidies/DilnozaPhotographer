<template>
  <div class="wrap">
    <div class="container">
      <h2 class="title section__title">What i offer</h2>
      <div class="items">
        <div class="item">
          <div class="img">
            <img src="@/assets/img/hero-1.jpg" alt="" class="pic" />
          </div>
          <div class="content">
            <h4 class="name">Weddings</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus fugit dolorum earum, non possimus quaerat omnis dolorem,
              sapiente temporibus perspiciatis harum laboriosam repellendus quo
              molestias quas mollitia! Unde accusantium repellat officiis qui,
              facere eligendi sint alias, suscipit nemo dolorem illo!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus fugit dolorum earum, non possimus quaerat omnis dolorem,
              sapiente temporibus perspiciatis harum laboriosam repellendus quo
              molestias quas mollitia! Unde accusantium repellat officiis qui,
              facere eligendi sint alias, suscipit nemo dolorem illo!
            </p>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/img/hero-2.jpg" alt="" class="pic" />
          </div>
          <div class="content">
            <h4 class="name">Weddings</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus fugit dolorum earum, non possimus quaerat omnis dolorem,
              sapiente temporibus perspiciatis harum laboriosam repellendus quo
              molestias quas mollitia! Unde accusantium repellat officiis qui,
              facere eligendi sint alias, suscipit nemo dolorem illo!
            </p>
            <p>
              perspiciatis harum laboriosam repellendus quo molestias quas
              mollitia! Unde accusantium repellat officiis qui, facere eligendi
              sint alias, suscipit nemo dolorem illo!
            </p>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/img/hero-3.jpg" alt="" class="pic" />
          </div>
          <div class="content">
            <h4 class="name">Weddings</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus fugit dolorum earum, non possimus quaerat omnis dolorem,
              sapiente temporibus perspiciatis harum laboriosam repellendus quo
              molestias quas mollitia! Unde accusantium repellat officiis qui,
              facere eligendi sint alias, suscipit nemo dolorem illo!
            </p>
            <p>
              perspiciatis harum laboriosam repellendus quo molestias quas
              mollitia! Unde accusantium repellat officiis qui, facere eligendi
              sint alias, suscipit nemo dolorem illo!
            </p>
          </div>
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
.item p {
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
