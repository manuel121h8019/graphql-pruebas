<template>
  <div>
    <h1>Pruebas</h1>
    <ApolloMutation
      :mutation="require('../graphql/updatePerfiles.gql')"
      :variables="{
        id: this.$route.params.id,
        name: perfil.name,
        comida: perfil.comida,
        bebida: perfil.bebida
      }"
    >
      <template slot-scope="{ mutate, loading, error }">
        <form>
          <v-col cols="4" class="margin-auto">
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                v-model="perfil.name"
                color="grey"
                label="Name"
                placeholder=" "
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                v-model="perfil.comida"
                color="grey"
                label="Comida"
                placeholder=" "
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                v-model="perfil.bebida"
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
export default {
  name: "Prueba",
  props: ["gusto"],
  data() {
    return {
      perfil: {
        id: this.perfil_id,
        name: "",
        comida: this.comida,
        bebida: this.bebida
      }
    };
  }
};
</script>
