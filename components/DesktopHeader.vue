<template>
  <div class="wrap">
    <div class="container">
      <div class="left">
        <NuxtLink to="/">
          <img src="@/assets/img/logo.png" alt="" />
        </NuxtLink>
      </div>
      <div class="mid">
        <ul>
          <li>
            <button></button>
          </li>
          <li>
            <button></button>
          </li>
          <li>
            <button></button>
          </li>
        </ul>
      </div>
      <div class="right">
        <button></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.wrap {
  padding: 16px 0;
}
.container {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
}
.left a {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--decor);
  font-size: 24px;
  line-height: 120%;
  color: var(--black);
  font-weight: 500;
}
.left img {
  width: 48px;
  object-fit: contain;
}
.mid {
  display: flex;
  align-items: center;
  /* justify-content: center; */
}
.mid ul {
  display: flex;
  align-items: center;
  gap: 24px;
}
.right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.mid button {
  border: 0;
  background: transparent;
  font-size: 16px;
  font-weight: 500;
  color: var(--black);
  cursor: pointer;
  transition: 0.4s;
}
.mid button:hover {
  color: var(--main);
  text-decoration: underline;
}
.right button {
  border: 2px solid var(--main);
  color: var(--main);
  font-size: 24px;
  background: transparent;
  padding: 8px 32px;
  cursor: pointer;
  transition: 0.4s;
  font-family: var(--decor);
}
.right button:hover {
  background: var(--main);
  color: white;
}
@media screen and (max-width: 1024px) {
  .right,
  .mid {
    display: none;
  }
}
</style>
