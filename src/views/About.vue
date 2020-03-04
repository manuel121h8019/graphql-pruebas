<template>
  <div class="about">
    <h1>Ejemplo de grqphql</h1>
    <!--     <ApolloQuery
      :query="require('@/graphql/getPerfil.gql')"
      :variables="{ estado: estado }"
    >
      <template v-slot="{ result: { loading, error, data } }">
   
        <div v-if="loading" class="loading apollo">Loading...</div>
    
        <div v-else-if="error" class="error apollo">An error occurred</div>

        <div v-else-if="data" class="result apollo"> -->

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
    <div>
      <v-data-table
        :loading="loading"
        :headers="headers"
        :items="gustos"
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
            @click="editP(item.perfil_id, item)"
          >
            edit
          </v-btn>
          <v-btn
            v-if="estado == true"
            small
            @click="deleteP(item.perfil_id, item)"
          >
            delete
          </v-btn>
          <v-btn v-if="estado == false" small @click="activar(item.perfil_id)">
            Activar
          </v-btn>
        </template>

        <template v-slot:item.precios="{ item }">
          <v-list-item-content>
            <v-list-item-subtitle style="aling-left">{{
              item.precio | currency
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </template>
      </v-data-table>
    </div>
    <!--   </div>
        <div v-else class="no-result apollo">No hay resultados );</div>
      </template>
    </ApolloQuery> -->
  </div>
</template>
<script>
//import Prueba from "../views/Prueba";

export default {
  name: "ListaPErfiles",
  components: {
    // Prueba
  },
  data() {
    return {
      estado: true,
      Prueba: true,
      skipQuery: false,
      activ: null,
      date: new Date().toISOString().substr(),
      loading: false,
      gustos: [],
      headers: [
        {
          text: "Id",
          align: "left",
          sortable: false,
          value: "perfil_id"
        },
        { text: "Nombre", value: "perfile.name" },
        { text: "Comida", value: "comida", align: "left" },
        { text: "Bebida ", value: "bebida" },
        { text: "Precio ", align: "left", value: "precios" },
        { text: "Opciones ", value: "action" }
      ]
    };
  },
  apollo: {
    gustos: {
      query: require("@/graphql/getPerfil.gql"),
      variables() {
        return {
          estado: this.estado
        };
      }
    }
  },
  mounted() {},
  methods: {
    updatingGusto() {
      this.Prueba = false;
    },
    editP(id) {
      id = this.perfil_id = id;
      this.$router.push({ name: "edit", params: { id } });
    },
    // eslint-disable-next-line no-unused-vars
    deleteP(id, item, date) {
      // eslint-disable-next-line no-console

      this.gustos.splice(item, 1);
      date = this.date;
      this.$apollo
        .mutate({
          mutation: require("../graphql/deletePerfil.gql"),
          variables: {
            id: id,
            date: date
          }
        })
        .then(() => {
          this.$apollo.queries.gustos.refetch();
          this.gustos.splice(item, 1);
        });
    },
    activar(id, item) {
      this.$apollo
        .mutate({
          mutation: require("../graphql/deletePerfil.gql"),
          variables: {
            id: (this.perfil_id = id),
            date: this.activ
          }
        })
        .then(() => {
          this.estado = true;
          this.$apollo.queries.gustos.refetch();
          this.gustos.splice(item, 1);
        });
    }
  }
};
</script>
<style scoped></style>
