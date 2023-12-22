<template>
  <div class="wrap">
    <div class="container">
      <div class="cardo">
        <div class="grid">
          <div class="left">
            <h4 class="title">Contact Us</h4>
            <div class="item">
              <p class="sup">Phone</p>
              <a href="tel:+998901400000"> +998 90 140 00 00 </a>
            </div>
            <div class="item">
              <p class="sup">Email</p>
              <a href="mailto:mail@mail.com"> mail@mail.com </a>
            </div>
            <div class="item">
              <p class="sup">Email</p>
              <div class="socs">
                <a target="_blank" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="4"
                      stroke="#ffffff"
                      stroke-width="1.5"
                    />
                    <circle cx="18" cy="6" r="1" fill="#ffffff" />
                    <circle
                      cx="12"
                      cy="12"
                      r="5"
                      stroke="#ffffff"
                      stroke-width="1.5"
                    />
                  </svg>
                </a>
                <a target="_blank" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18 2H6C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H10.5V15H7V12H10.5V10C10.5 7.79086 12.2909 6 14.5 6H17V9H14.5C13.9477 9 13.5 9.44772 13.5 10V12H17V15H13.5V22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2Z"
                      stroke="#ffffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="mid">
            <h4 class="title">Send Application</h4>
            <form>
              <input type="text" placeholder="Your name" />
              <input type="text" placeholder="Phone number" />
              <button>Submit</button>
            </form>
          </div>
          <div class="right">
            <img src="@/assets/img/person.jpg" alt="" />
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
.cardo {
  background: var(--dark);
  color: white;
  padding: 80px 0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 85%;
  margin: 0 auto;
}
.right {
  display: flex;
  justify-content: center;
}
.right img {
  width: 75%;
  height: 320px;
  object-fit: cover;
  margin: 0 auto;
}
.text {
  font-size: 16px;
  line-height: 150%;
  max-width: 90%;
  opacity: 0.8;
  font-weight: 300;
}
.title {
  font-size: 32px;
  font-family: var(--decor);
  font-weight: 600;
  color: white;
  margin-bottom: 32px;
}
.item {
  margin-bottom: 24px;
}
.sup {
  font-size: 16px;
  margin-bottom: 12px;
  opacity: 0.8;
}
.item a {
  font-size: 24px;
  font-family: var(--decor);
  color: white;
}
.socs {
  display: flex;
  align-items: center;
  gap: 12px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 85%;
}
input {
  background: transparent;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 12px 0;
  color: white;
}
input:focus {
  outline: none;
}
button {
  padding: 14px 0;
  background: var(--main);
  border: 0;
  margin-top: 12px;
  cursor: pointer;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 0;
  }
  .container {
    padding: 0;
  }
  .grid {
    grid-template-columns: repeat(1, 1fr);
    max-width: 100%;
    padding: 0 16px;
    gap: 24px;
  }
  .cardo {
    padding: 40px 0;
  }
  .title {
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: 500;
  }
  .sup {
    font-size: 14px;
    margin-bottom: 8px;
  }
  .item a {
    font-size: 20px;
  }
  form {
    max-width: 100%;
  }
  .right {
    margin-top: 16px;
  }
  .right img {
    width: 100%;
  }
}
</style>
