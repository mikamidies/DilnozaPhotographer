<template>
  <div class="wrap">
    <div class="container">
      <h1 class="title section__title">
        {{ $store.state.translations['main.title'] }}
      </h1>
      <div class="levels">
        <div class="level">
          <div class="num">
            <p>1</p>
          </div>
          <p class="text">{{ $store.state.translations['workflow.step_1'] }}</p>
        </div>
        <div class="level">
          <div class="num">
            <p>2</p>
          </div>
          <p class="text">{{ $store.state.translations['workflow.step_2'] }}</p>
        </div>
        <div class="level">
          <div class="num">
            <p>3</p>
          </div>
          <p class="text">{{ $store.state.translations['workflow.step_3'] }}</p>
        </div>
        <div class="level"></div>
        <div class="level">
          <div class="num">
            <p>5</p>
          </div>
          <p class="text">{{ $store.state.translations['workflow.step_4'] }}</p>
        </div>
        <div class="level">
          <div class="num">
            <p>4</p>
          </div>
          <p class="text">{{ $store.state.translations['workflow.step_5'] }}</p>
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
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 20px 0;
  }
  .levels {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  .num {
    margin: 0;
    position: relative;
    z-index: 2;
  }
  .num::after {
    width: 2px;
    height: 58px;
    background: var(--main);
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
  .level {
    border-top: 0;
    border-right: 0 !important;
    padding-bottom: 24px !important;
    display: grid;
    grid-template-columns: 2fr 8fr;
  }
  .level:nth-child(4) {
    display: none;
  }
  .text {
    margin: 0;
    font-size: 14px;
  }
  .level:nth-child(5) {
    order: 5;
  }
  .level:nth-child(6) {
    order: 4;
  }
  .level:nth-child(5) .num::after {
    display: none;
  }
}
</style>
