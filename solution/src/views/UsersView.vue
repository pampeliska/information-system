<template>
  <div>
    <h2 style="margin: 24px 16px 0">SPRÁVA UŽIVATELŮ</h2>

    <p style="margin: 24px 16px 16px">
      Magnam earum dignissimos quisquam perferendis optio? Lorem ipsum, dolor
      sit amet consectetur adipisicing elit. Possimus labore adipisci, quibusdam
      quas pariatur animi cum suscipit natus in quaerat qui accusantium a
      dolores. Magnam earum dignissimos quisquam perferendis optio?
    </p>

    <UserDataTableActive class="mt-6 mb-12" />
  </div>
</template>

<script>
// @ is an alias to /src
import UserDataTableActive from "@/components/UserDataTableActive.vue";

export default {
  name: "UsersData",
  components: {
    UserDataTableActive,
  },
};
</script>
