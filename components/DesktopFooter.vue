<template>
  <div class="wrap">
    <div class="container">
      <div class="cardo">
        <div class="grid">
          <div class="left">
            <h1 class="title"></h1>
            <div class="item">
              <p class="sup"></p>
              <a href=""> </a>
            </div>
            <div class="item">
              <p class="sup"></p>
              <a href="mailto:"> </a>
            </div>
            <div class="item">
              <p class="sup"></p>
              <div class="socs">
                <a target="_blank" href="#"> </a>
                <a target="_blank" href="#"> </a>
              </div>
            </div>
          </div>
          <div class="mid">
            <h1 class="title"></h1>
            <form @submit.prevent="onSubmit">
              <input type="text" placeholder="Your name" />
              <input type="text" placeholder="" />
              <button type="submit"></button>
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
import formApi from '@/api/form.js'

export default {
  data() {
    return {
      name: '',
      phone_number: '',
    }
  },

  methods: {
    async onSubmit() {
      const formData = {
        name: this.name,
        phone_number: this.phone_number,
      }

      const res = await formApi.sendApplication(formData)

      if (res && res.status === 201) {
        this.$toast.success('Successfully sent')
      } else {
        this.$toast.error('Error')
      }

      this.name = ''
      this.phone_number = ''
    },
  },
}
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
