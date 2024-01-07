<template>
  <div class="center">
    <LoginCard />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginCard from "@/components/LoginCard.vue";

export default {
  name: "LoginView",
  components: {
    LoginCard,
  },
};
</script>

<style lang="scss" scoped>
body {
  background: red;
}
.center {
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
}
</style>
