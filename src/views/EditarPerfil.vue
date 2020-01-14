<template>
  <div class="edit">
    <h1>Editar perfil</h1>
    <ApolloQuery
      :query="require('@/graphql/getPerfil.gql')"
      :variables="{ id: this.$route.params.id }"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>
        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occurred</div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">
          <div v-for="gusto in data.gustos" :key="gusto.id">
            {{ gusto.comida }}
          </div>
        </div>
        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
    <ApolloMutation
      :mutation="require('../graphql/updatePerfiles.gql')"
      :variables="{
        id: this.$route.params.id,
        name: input.name,
        comida: input.comida,
        bebida: input.bebida
      }"
      @done="onDone"
    >
      <template slot-scope="{ mutate, loading, error }">
        <form>
          <v-col cols="4" class="margin-auto">
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                v-model="input.name"
                color="grey"
                label="Name"
                placeholder=" "
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                v-model="input.comida"
                color="grey"
                label="Comida"
                placeholder=" "
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                v-model="input.bebida"
                color="grey"
                label="Bebida"
                placeholder=" "
              ></v-text-field>
              <v-btn small @click="mutate()">Guardar </v-btn>
            </v-col>
          </v-col>
          <span v-if="error">Failed</span>
          <span class="ml2" v-if="loading">Loading...</span>
        </form>
      </template>
    </ApolloMutation>
  </div>
</template>
<script>
/* import { gql } from "apollo-boost"; */
export default {
  name: "edit",
  data() {
    return {
      input: {
        id: null,
        name: "",
        comida: "",
        bebida: ""
      }
    };
  },
  /*  apollo: {
    getPerfil: {
      query: require("../graphql/getPerfil.gql"),
      variables: {
        id: this.id
      },
      result({ data }) {
        this.gustos = data.gustos;
      }
    }
  }, */
  mounted() {
    /*     this.fetch(); */
  },
  methods: {
    /*   fetch() {
      this.id = this.$route.params.id;
      this.$apollo.query({
        query: require("../graphql/getPerfil.gql"),
        variables: {
          id: this.id
        },
        result({ data }) {
          this.gustos = data.gustos;
        }
      });
    }, */
    onDone() {
      this.$emit("resetForm", true);
    }
    /*    update() {
      this.id = this.$route.params.id;
      this.name = this.gusto.perfile.name;
      this.comida = this.gusto.comida;
      this.bebida = this.gusto.bebida;

      this.$apollo.query({
        query: require("../graphql/updatePerfiles.gql"),
        variables: {
          id: this.id,
          name: this.name
        }
      });
    } */
  }
};
</script>
