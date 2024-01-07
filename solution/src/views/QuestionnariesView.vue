<template>
  <div>
    <h2 style="margin: 24px 16px 0">SPRÁVA DOTAZNÍKŮ</h2>

    <p style="margin: 24px 16px 16px">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus labore
      adipisci, quibusdam quas pariatur animi cum suscipit natus in quaerat qui
      accusantium a dolores. Magnam earum dignissimos quisquam perferendis
      optio? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
      labore adipisci, quibusdam quas pariatur animi cum suscipit natus in
      quaerat qui accusantium a dolores. Magnam earum dignissimos quisquam
      perferendis optio?
    </p>

    <QuestionnaireDataTableActive class="mt-6 mb-12" />
    <QuestionnaireDataTableCompleted class="my-6 mb-12" />
  </div>
</template>

<script>
// @ is an alias to /src
import QuestionnaireDataTableActive from "@/components/QuestionnaireDataTableActive.vue";
import QuestionnaireDataTableCompleted from "@/components/QuestionnaireDataTableCompleted.vue";

export default {
  name: "QuestionnariesData",
  components: {
    QuestionnaireDataTableActive,
    QuestionnaireDataTableCompleted,
  },
};
</script>
