<template>
  <v-data-table :headers="headers" :items="active" class="elevation-1">
    <template v-slot:top>
      <v-container mx-1>
        <h4>Aktivní dotazníky</h4>
      </v-container>
      <v-divider />
      <v-divider class="mx-4" inset vertical></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="800px">
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="24" sm="12" md="8">
                  <v-text-field
                    :readonly="shouldDisable"
                    v-model="editedItem.name"
                    label="Název dotazníku"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    :readonly="shouldDisable"
                    v-model="editedItem.validity"
                    label="Platnost"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    :readonly="shouldDisable"
                    v-model="editedItem.left"
                    label="Zbývá"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="6" sm="3" md="2">
                  <v-text-field
                    :readonly="shouldDisable"
                    v-model="editedItem.asked"
                    label="Osloveno"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="6" sm="3" md="2">
                  <v-text-field
                    :readonly="shouldDisable"
                    v-model="editedItem.filled"
                    label="Vyplněno"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="24" sm="12" md="8">
                  <v-text-field
                    :readonly="shouldDisable"
                    v-model="editedItem.description"
                    label="Popis"
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
            <v-btn
              v-if="!shouldDisable"
              color="blue darken-1"
              text
              @click="save"
              >Save</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
    <template v-slot:item.possibilities="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">
        mdi-pencil-outline
      </v-icon>
      <v-icon small class="mr-2"> mdi-card-bulleted-off-outline </v-icon>
      <v-icon small class="mr-2" @click="showItem(item)">
        mdi-information-outline
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "QuestionnaireDataTableActive",

  methods: {
    initialize() {
      this.active = require("../data/questionnaires-active.json");
    },
    editItem(item) {
      this.editedIndex = this.active.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      this.shouldDisable = false;
    },
    showItem(item) {
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      this.shouldDisable = true;
    },
    close() {
      this.dialog = false;
    },
    save() {
      Object.assign(this.active[this.editedIndex], this.editedItem);
      this.close();
    },
  },

  created() {
    this.initialize();
  },
  computed: {
    formTitle() {
      return this.shouldDisable ? "Zobrazení záznamu" : "Editace záznamu";
    },
  },

  data() {
    return {
      dialog: false,
      headers: [
        {
          text: "Název dotazníku",
          align: "start",
          value: "name",
        },
        { text: "Platnost", value: "validity" },
        { text: "Zbývá", value: "left" },
        { text: "Osloveno", value: "asked" },
        { text: "Vyplněno", value: "filled" },
        { text: "Možnosti", value: "possibilities" },
      ],
      active: [],
      editedIndex: 0,
      shouldDisable: false,
      editedItem: {
        name: "",
        validity: "1.1.2021-2.3.2022",
        left: "0 dní",
        asked: 0,
        filled: 0,
      },
    };
  },
};
</script>
