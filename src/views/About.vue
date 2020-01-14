<template>
  <div class="about">
    <h1>Ejemplo de grqphql</h1>
    <ApolloQuery
      :query="require('@/graphql/getPerfil.gql')"
      :variables="{ estado: estado }"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>
        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occurred</div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">
          <v-toolbar-items class="hidden-sm-and-down">
            <template>
              <v-container fluid>
                <v-row class="light--text">
                  <v-radio-group v-model="estado" row>
                    <v-radio
                      label="Activos"
                      color="light-blue darken-1"
                      :value="true"
                    ></v-radio>
                    <v-radio
                      label="Papelera"
                      color="light-blue darken-1"
                      :value="false"
                    ></v-radio>
                  </v-radio-group>
                </v-row>
              </v-container>
            </template>
          </v-toolbar-items>
          <v-data-table
            :loading="loading"
            :headers="headers"
            :items="data.gustos"
            :items-per-page="5"
            class="elevation-1"
          >
            <template v-slot:top> </template>
            <template v-slot:item.action="{ item }">
              <v-btn
                v-if="estado == true"
                small
                class="mr-2"
                style="color:teal"
                @click="editP(item.perfil_id)"
              >
                edit
              </v-btn>
              <v-btn
                v-if="estado == true"
                small
                @click="deleteP(item.perfil_id)"
              >
                delete
              </v-btn>
              <v-btn
                v-if="estado == false"
                small
                @click="activar(item.perfil_id)"
              >
                Activar
              </v-btn>
            </template>
          </v-data-table>
        </div>
        <!-- No result -->
        <div v-else class="no-result apollo">No hay resultados );</div>
      </template>
    </ApolloQuery>
  </div>
</template>
<script>
export default {
  data() {
    return {
      estado: true,
      activ: null,
      date: new Date().toISOString().substr(),
      loading: false,
      headers: [
        {
          text: "Id",
          align: "left",
          sortable: false,
          value: "perfil_id"
        },
        { text: "Nombre", value: "perfile.name" },
        { text: "Comida", value: "comida" },
        { text: "Bebida ", value: "bebida" },
        { text: "Opciones ", value: "action" }
      ]
    };
  },
  methods: {
    editP(id) {
      id = this.perfil_id = id;
      this.$router.push({ name: "edit", params: { id } });
    },
    // eslint-disable-next-line no-unused-vars
    deleteP(id, date) {
      date = this.date;
      this.$apollo.mutate({
        mutation: require("../graphql/deletePerfil.gql"),
        variables: {
          id: (this.perfil_id = id),
          date: this.date
        }
      });
    },
    activar(id) {
      this.$apollo.mutate({
        mutation: require("../graphql/deletePerfil.gql"),
        variables: {
          id: (this.perfil_id = id),
          date: this.activ
        }
      });
    }
  }
};
</script>
