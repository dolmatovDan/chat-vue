<template>
  <div class="modal" id="modal">
    <div class="modal__window">
      <div class="modal__container">
        <h3 class="modal__title">Войти в учётную запись</h3>
        <div class="modal__auth">
          <input
            v-model="login"
            type="text"
            id="login"
            placeholder="Введите логин"
            class="modal__input"
          />
          <input
            v-model="password"
            type="password"
            id="password"
            placeholder="Введите пароль"
            class="modal__input modal__password"
          />
          <button
            @click="isCorrectLogin"
            class="button button--auth"
            id="btn-auth"
          >
            Войти
          </button>
        </div>

        <span id="errors" class="modal__span"></span>
        <button id="btn-sign-up" @click="signUp" class="button button__sign-up">
          Зарегестрируйтесь бесплатно
        </button>
        <p class="text__errors" v-text="error"></p>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "../services/UserService";
export default {
  data: function() {
    return {
      password: "",
      login: "",
    };
  },
  created: function() {
    this.$store.commit("auth/changeIsLogin", UserService.canLogin());
  },
  name: "Modal",
  components: {},
  methods: {
    isCorrectLogin: function() {
      this.$store.dispatch("auth/isCorrectLogin", {
        login: this.login,
        password: this.password,
      });
    },
    signUp: function() {
      this.$store.commit("auth/changeWantSignUp", true);
      this.$store.commit("auth/changeIsLogin", true);
      this.$store.commit("auth/clearErrors");
    },
  },
  computed: {
    error: function() {
      return this.$store.getters["auth/getError"];
    },
    getUserData: function() {
      return this.$store.getters["auth/getUserData"];
    },
  },
};
</script>

<style>
.text__errors {
  color: red;
}
.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.button__sign-up {
  cursor: pointer;
  font-size: 16px;
}
.button__sign-up:hover {
  color: blueviolet;
  text-decoration: underline;
  transition: color 0.3s;
}
.button--auth {
  display: block;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 16px;
  border: 2px solid transparent;
  background-color: #5965db;
  color: #fff;
}

.modal__window {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  background-color: #fff;
  border: 2px solid #000;
}

.modal__span {
  color: rgb(194, 61, 61);
  font-size: 14px;
  text-align: left;
}

.modal__auth {
  display: flex;
  flex-direction: column;
}

.modal__select {
  padding: 5px;
  font-size: 14px;
}

.modal__input {
  margin-bottom: 15px;
  padding: 5px;
  text-indent: 10px;
  font-size: 16px;
}

.modal__title {
  font-size: 22px;
}

.modal__label {
  align-self: start;
}

.modal__container {
  width: 80%;
  flex-direction: column;
  padding: 15px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}

.modal__password {
  text-overflow: clip;
}

.modal-sign-up {
  z-index: 100;
}
</style>
