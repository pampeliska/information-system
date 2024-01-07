<template>
  <v-container fill-height fluid>
    <v-row justify="center">
      <v-card width="400" align="center" class="mx-auto my-12">
        <v-card-title>
          <v-alert v-if="wrongLogin" dense outlined type="error">
            Byly zadány <strong>špatné</strong> přihlašovací údaje.
          </v-alert>
          <h1 class="display-1 mx-auto mt-5 mb-2">
            <img class="logo" src="@/assets/dsystems-logo.svg" />
          </h1>
        </v-card-title>
        <v-card-subtitle>
          <h1 class="subtitle-1 center">
            zadejte prosím vaše přihlašovací údaje
          </h1>
        </v-card-subtitle>
        <v-form @submit.prevent="isLoginCorrect">
          <v-card-text>
            <v-text-field
              name="username"
              label="Uživatelské jméno"
              prepend-icon="mdi-account-circle"
              v-model="username"
            />
            <v-text-field
              label="Heslo"
              name="password"
              v-model="password"
              :type="value ? 'text' : 'password'"
              prepend-icon="mdi-lock"
              :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="value = !value"
            />
          </v-card-text>
          <v-spacer></v-spacer>
          <v-card-actions>
            <v-btn class="mx-auto" color="#EEEEEE" type="submit"
              >PŘIHLÁSIT SE</v-btn
            >            
          </v-card-actions>
        </v-form>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { CORRECT_LOGIN, CORRECT_PASSWORD, TOKEN } from "@/data/constants";
import { mapActions } from "vuex";

export default {
  name: "LoginCard",

  methods: {
    ...mapActions({
      setToken: "setToken",
    }),
    isLoginCorrect() {
      if (
        this.username === CORRECT_LOGIN &&
        this.password === CORRECT_PASSWORD
      ) {
        this.wrongLogin = false;
        localStorage.token = TOKEN;
        this.setToken(TOKEN);
        this.$router.push({ name: "users" });
        return true;
      } else {
        this.wrongLogin = true;
        return false;
      }
    },
  },
  data: () => ({
    value: false,
    wrongLogin: false,
    username: "",
    password: "",
  }),
};
</script>

<style lang="scss" scoped>
.logo {
  height: 70px;
}
</style>
