<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title section__title">Workflow</h4>
      <div class="levels">
        <div class="level">
          <div class="num">
            <p>1</p>
          </div>
          <p class="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni aut
            saepe perferendis quas dolores dolorem!
          </p>
        </div>
        <div class="level">
          <div class="num">
            <p>2</p>
          </div>
          <p class="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni aut
            saepe perferendis quas dolores dolorem!
          </p>
        </div>
        <div class="level">
          <div class="num">
            <p>3</p>
          </div>
          <p class="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni aut
            saepe perferendis quas dolores dolorem!
          </p>
        </div>
        <div class="level"></div>
        <div class="level">
          <div class="num">
            <p>5</p>
          </div>
          <p class="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni aut
            saepe perferendis quas dolores dolorem!
          </p>
        </div>
        <div class="level">
          <div class="num">
            <p>4</p>
          </div>
          <p class="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni aut
            saepe perferendis quas dolores dolorem!
          </p>
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
.levels {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 58px;
}
.num {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -26px;
}
.num p {
  font-size: 22px;
  font-weight: 500;
}
.text {
  font-size: 18px;
  line-height: 150%;
  opacity: 0.9;
  max-width: 90%;
  margin-top: 16px;
}
.level {
  border-top: 2px solid var(--main);
}
.level:nth-child(4) {
  border: 0;
}
.level:nth-child(3) {
  border-right: 2px solid var(--main);
  padding-bottom: 58px;
}
</style>
