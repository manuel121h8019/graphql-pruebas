<template>
  <div>
    <h1>Editar</h1>    
    <ApolloMutation
      :mutation="require('@/graphql/updatePerfiles.gql')"
      :variables="{ id: this.$route.params.id, name, comida, bebida }"
    >
      <template v-slot="{ mutate, loading, error }">              
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
          <v-btn style="color:teal" :disabled="loading" @click="mutate()"
            >Guardar</v-btn
          >
          <p v-if="error">An error occurred: {{ error }}</p>
        </v-col>
      </template>
    </ApolloMutation>
    <div v-for="gusto in gustos" :key="gusto.id">{{gusto.comida}}</div>
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
  methods: {
     fetch() {
      this.id = this.$route.params.id;
      this.$apollo.query({
        query: require("@/graphql/getPerfil.gql"),
        variables: {
          id: this.id
        },
        result({data}){
          this.gustos = data.gustos
        },
      });
    },
  }
};
</script>
