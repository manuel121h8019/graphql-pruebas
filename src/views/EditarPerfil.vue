<template>
  <div>
    <h1>Editar</h1>
    <ApolloQuery 
    :query="require('@/graphql/getPerfil.gql')"
    :variables="{id: this.$route.params.id}"     
    >
      <template v-slot="{ result: { loading, error, data } }">
        <div v-if="loading" class="loading apollo">Loading..</div>
        <div v-if="error" class="error apollo">A ocurrido un error..</div>
        <div v-for="gusto in data.gustos" :key="gusto.id">
          {{gusto.perfile.name}}--{{gusto.comida}}--{{gusto.bebida}}
        </div>
      </template>
    </ApolloQuery>
    <v-col cols="4" class="margin-auto">
      <v-col cols="12" sm="12" md="12">
        <v-text-field
          v-model="name"
          color="grey"
          label="Nombre"
          placeholder=" "
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-text-field
          v-model="comida"
          color="grey"
          label="Comida"
          placeholder=" "
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-text-field
          v-model="bebida"
          color="grey"
          label="Bebida"
          placeholder=" "
        ></v-text-field>
      </v-col>
      <v-btn small @click="updatePerfil">Guardar </v-btn>
    </v-col>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gustos: [],
      id: null,
      name: "",
      comida: "",
      bebida: ""
    };
  },
  mounted() {
    this.select();
  },
  methods: {
    /* select() {
      this.id = this.$route.params.id;
      this.$apollo.query({
        query: require("@/graphql/getPerfil.gql"),
        variables: {
          id: this.id
        },
        result({ data }) {
          this.gustos = data.gustos;
        }
      });
    }, */
    updatePerfil() {
      this.$apollo.mutate({
        mutation: require("../graphql/updatePerfiles.gql"),
        variables: {
          id: this.$route.params.id,
          name: this.name,
          comida: this.comida,
          bebida: this.bebida
        }
      });
    }
  }
};
</script>
