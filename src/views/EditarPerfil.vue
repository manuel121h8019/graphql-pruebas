<template>
  <div class="edit">
    <h1>Editar perfil</h1>
    <!-- <v-card>
      <form>
        <div v-for="gusto in gustos" :key="gusto.id">
          <v-col cols="4" class="margin-auto">
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                v-model="gusto.perfile.name"
                color="grey"
                label="Name"
                placeholder=" "
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                v-model="gusto.comida"
                color="grey"
                label="Comida"
                placeholder=" "
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                v-model="gusto.bebida"
                color="grey"
                label="Bebida"
                placeholder=" "
              ></v-text-field>
              <v-btn small @click="update()">Guardar </v-btn>
            </v-col>
          </v-col>
        </div>
      </form>
    </v-card> -->
    <ApolloMutation
      :mutation="require('../graphql/updatePerfiles.gql')"
      :variables="{
        id: this.$route.params.id,
        name: perfil.name,
        comida: perfil.comida,
        bebida: perfil.bebida,
        precio: perfil.precio
      }"
    >
      <template slot-scope="{ mutate, loading, error }">
        <form>
          <div v-for="gusto in gustos" :key="gusto.id">
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
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  v-model="perfil.precio"
                  color="grey"
                  label="Bebida"
                  placeholder=" "
                  v-currency="{ currency: 'MXN', locale: 'en' }"
                ></v-text-field>
                <v-btn small @click="mutate()">Guardar </v-btn>
              </v-col>
            </v-col>
          </div>
          <span v-if="error">Failed</span>
          <span class="ml2" v-if="loading">Loading...</span>
        </form>
      </template>
    </ApolloMutation>
    <!--   <div v-for="gusto in gustos" :key="gusto.id">
      {{ gusto.comida }}
    </div> -->
  </div>
</template>
<script>
/* import { gql } from "apollo-boost"; */
export default {
  name: "EditarPerfil",
  props: ["gusto"],
  data() {
    return {
      gustos: [],
      perfil: {
        id: null,
        name: "",
        comida: "",
        bebida: "",
        precio: ""
      }
    };
  },
  apollo: {
    gustos: {
      query: require("@/graphql/getPerfil.gql"),
      variables() {
        return {
          id: this.$route.params.id
        };
      },
      result({ data, loading }) {
        if (!loading) {
          this.gustos = data.gustos;
          this.perfil.name = this.gustos[0].perfile.name;
          this.perfil.comida = this.gustos[0].comida;
          this.perfil.bebida = this.gustos[0].bebida;
          this.perfil.precio = this.gustos[0].precio;
          // eslint-disable-next-line no-console
        }
      }
    }
  },
  watch: {
    /*   name(gustos) {
      this.perfil.name = gustos.perfile.name;
      // eslint-disable-next-line no-console
      console.log(this.perfil.name);
    } */
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.perfil.name);
  },
  methods: {
    updatePE() {
      /*    this.$apollo.mutate({
        mutation: require("../graphql/updatePerfiles.gql")
      }); */
    }
    /*  fetch() {
      this.perfil.id = this.$route.params.id;
      this.$apollo.query({
        query: require("../graphql/getPerfil.gql"),
        variables: {
          id: this.perfil.id
        },
        result({ data }) {
          this.gustos = data.gustos;
        }
      });
      // eslint-disable-next-line no-console
      console.log(this.gustos);
    } */
  }
};
</script>
