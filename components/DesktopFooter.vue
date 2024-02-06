<template>
  <div class="wrap">
    <div class="container">
      <div class="cardo">
        <div class="grid">
          <div class="left">
            <h1 class="title">
              {{ $store.state.translations['main.contacts'] }}
            </h1>
            <div class="item">
              <p class="sup">{{ $store.state.translations['main.number'] }}</p>
              <a :href="`tel:${info.nbm}`">{{ info.nbm }}</a>
            </div>
            <div class="item">
              <p class="sup">{{ $store.state.translations['main.email'] }}</p>
              <a :href="`mailto:${info.email}`">{{ info.email }}</a>
            </div>
            <div class="item">
              <p class="sup">{{ $store.state.translations['main.socs'] }}</p>
              <div class="socs">
                <a target="_blank" :href="info.instagram">
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
                      stroke="#28303F"
                      stroke-width="1.5"
                    />
                    <circle cx="18" cy="6" r="1" fill="#28303F" />
                    <circle
                      cx="12"
                      cy="12"
                      r="5"
                      stroke="#28303F"
                      stroke-width="1.5"
                    />
                  </svg>
                </a>
                <a target="_blank" :href="info.telegram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                  >
                    <path
                      d="M1.90891 8.0952L17.2976 1.44458C18.0212 1.13183 18.8054 1.74041 18.682 2.51906L16.5779 15.795C16.448 16.6151 15.4331 16.9287 14.8631 16.325L11.5295 12.7699C10.8523 12.0526 10.7992 10.9488 11.4045 10.1698L13.7232 6.92966C13.8626 6.75029 13.6425 6.51431 13.4538 6.64086L8.60651 9.89269C7.78393 10.4445 6.78586 10.6715 5.80554 10.5297L2.16248 10.0028C1.16449 9.8585 0.98328 8.49523 1.90891 8.0952Z"
                      stroke="#28303F"
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
            <h1 class="title">{{ $store.state.translations['main.app'] }}</h1>
            <form @submit.prevent="onSubmit">
              <input
                type="text"
                :placeholder="$store.state.translations['main.name']"
                required
                v-model="name"
              />
              <input
                type="text"
                :placeholder="$store.state.translations['main.number']"
                required
                v-model="phone_number"
              />
              <button type="submit">
                {{ $store.state.translations['main.submit'] }}
              </button>
            </form>
          </div>
          <div class="right">
            <img src="@/assets/img/person.jpg" alt="" />
          </div>
        </div>
        <div class="by">
          <a target="_blank" href="https://t.me/mikamidies">{{
            $store.state.translations['main.by']
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formApi from '@/api/form.js'
import infoApi from '@/api/info.js'

export default {
  data() {
    return {
      name: '',
      phone_number: '',

      info: '',
    }
  },

  async fetch() {
    const info = await infoApi.getInfos(this.$axios)

    this.info = info
  },

  methods: {
    async onSubmit() {
      const formData = {
        name: this.name,
        phone_number: this.phone_number,
      }

      const res = await formApi.sendApplication(formData)

      if (res && res.status === 201) {
        this.$notification['success']({
          message: 'Успешно отправлено',
        })
      } else {
        this.$notification['error']({
          message: 'Ошибка',
        })
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
  padding: 80px 0 0 0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 85%;
  margin: 0 auto;
  padding-bottom: 40px;
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
.socs svg path,
.socs rect,
.socs circle {
  stroke: white;
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
input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}
.by {
  padding-bottom: 24px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.by a {
  color: rgba(255, 255, 255, 0.7);
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
