<template>
  <div>
    <v-app-bar elevation="4" flat min-height="100px">
      <v-row class="text">
        <v-col cols="2">
          <v-img
            alt="D-systems Logo"
            class="mt-8"
            contain
            src="@/assets/dsystems-logo.svg"
            transition="scale-transition"
            height="70"
            width="300"
          />
        </v-col>
        <v-col
          cols="8"
          align-self="center"
          class="mt-8 d-flex flex-no-wrap justify-center"
        >
          <v-btn :to="{ name: 'users' }" class="text-none" x-large text link
            >Správa uživatelů</v-btn
          >
          <v-btn
            :to="{ name: 'questionnaries' }"
            class="text-none"
            x-large
            text
            link
            >Správa dotazníků</v-btn
          >
          <v-btn class="text-none" x-large text link>Administrace</v-btn>
        </v-col>
        <v-col cols="2" align-self="center">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                light
                class="text-none mt-8"
                depressed
                tile
                x-large
                v-bind="attrs"
                v-on="on"
              >
                <v-icon class="mr-3">mdi-account-circle-outline</v-icon>
                Jan Novák
                <v-icon class="ml-3">mdi-dots-horizontal </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in profileDropdownItems"
                @click="logout(item)"
                :key="index"
              >
                <v-list-item-title>
                  <v-icon class="ma-2"> {{ item.icon }} </v-icon>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-spacer></v-spacer>
    <router-view></router-view>

    <v-footer min-height="80px" outlined>
      <v-row class="footer-text">
        <v-col cols="5" align-self="center">
          <strong>
            © {{ new Date().getFullYear() }} ČBA. Všechna práva
            vyhrazena.</strong
          >
        </v-col>
        <v-col cols="4" align-self="center"> Podpora +420 224 422 080 </v-col>
        <v-col cols="3">
          <div class="align-vertical">
            Created by
            <v-btn small text color="#D32F2F" href="https://www.google.com/">
              D-Systems
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "DashboardView",
  methods: {
    ...mapActions({
      setToken: "setToken",
    }),
    logout({ route }) {
      this.setToken("");
      localStorage.removeItem("token");
      this.$router.push({ name: route });
    },
  },
  data() {
    return {
      profileDropdownItems: [
        {
          title: "Odhlásit",
          icon: "mdi-logout",
          route: "login",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer-text {
  font-size: 0.875rem;
  color: #757575;
}
</style>
