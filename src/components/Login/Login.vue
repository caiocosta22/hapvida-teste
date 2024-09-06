<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

const $q = useQuasar();
const router = useRouter();

const user = ref();
const pass = ref();
const email = ref();

const isPwd = ref(true);
const dialog = ref(false);

const envioLogin = () => {
  if (user.value === "hapvida" || pass.value === "teste") {
    $q.localStorage.set("login", user.value);
    $q.localStorage.set("senha", pass.value);
    router.push("/");
  } else {
    $q.notify({
      color: "red-5",
      textColor: "white",
      icon: "warning",
      message: "Credenciais Incorretas! Tente novamente."
    });
  }
};
</script>

<template lang="pug">
div.container
  img(
    src="/images/logohn.png"
  )
  div.login
    h2 Login
    div
      p Usuário
      q-input(
        outlined
        style="background:var(--grey-light)"
        v-model="user"
      )
    div
      p Senha
      q-input(
        outlined
        style="background:var(--grey-light)"
        v-model="pass"
        :type="isPwd ? 'password' : 'text'"
        @keypress.enter="envioLogin()"
      )
        template(
          v-slot:append
        )
          q-icon(
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Por favor digite sua senha']"
            @click="isPwd = !isPwd"
          )
    a(
      @click="dialog = true"
    )
      span esqueci minha senha
      q-dialog(
        v-model="dialog"
        backdrop-filter="blur(4px)"
      )
        q-card
          q-card-section.q-pa-lg
            p Esqueceu sua senha?
            div.box
              p Insira seu email interno que enviaremos um  formulário!
              q-input(
                standout="bg-grey text-black"
                v-model="email"
              )
            div.flex.row.justify-end.q-gutter-sm.q-pt-md
              q-btn(
                color="secondary"
                size="md"
                v-close-popup
              )
                span Cancelar
              q-btn(
                color="info"
                size="md"
                v-close-popup
              )
                span Enviar
    div
      q-btn(
        color="info"
        size="md"
        @click="envioLogin()"
      )
        span Conectar
</template>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  padding: 40px;
  max-width: 800px;
  gap: 120px;
}

.login {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  justify-content: center;
}

p {
  line-height: 1;
  font-size: 1.2rem;
}

h2 {
  font-size: 3rem;
  line-height: 1;
  font-weight: bold;
  position: relative;
  margin-left: 12.5px;
}

h2::before {
  content: "";
  width: 10px;
  height: 10px;
  background-color: var(--blue-dark);
  position: absolute;
  left: -12.5px;
  top: 65%;
}

a>span {
  cursor: pointer;
  text-decoration: underline ;
}

a>span:hover {
  color: var(--orange-dark);
  transition: 0.3s;
}

.dialog{
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
