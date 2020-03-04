<template>
  <div class="hello">
    <h1>Nuevo Perfil</h1>
    <v-col cols="12" class="margin-auto">
      <v-col cols="12" sm="12" md="12">
        <v-file-input
          v-model="fotos"
          :rules="rules"
          chips
          accept="image/png, image/jpeg, image/bmp"
          prepend-icon="mdi-camera"
          label="Foto de perfil"
        ></v-file-input>
      </v-col>
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
      <v-col cols="12" sm="12" md="12">
        <v-text-field
          v-model="precio"
          color="grey"
          label="Precio"
          placeholder=" "
          v-currency="{ currency: 'MXN', locale: 'en' }"
        ></v-text-field>
      </v-col>
      <v-btn small @click="insertPerfil">Guardar </v-btn>
    </v-col>
    <v-col cols="12" sm="12" md="12">
      <v-img
        :src="require('@/assets/foto.jpg')"
        aspect-ratio="2"
        contain
      ></v-img
    ></v-col>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      name: "",
      comida: "",
      bebida: "",
      precio: "",
      rules: [
        value =>
          !value ||
          value.size < 7000000 ||
          "¡El tamaño del avatar debe ser inferior a 2 MB!"
      ],
      fotos: []
    };
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.fotos);
  },
  methods: {
    insertPerfil() {
      this.$apollo.mutate({
        mutation: require("../graphql/insertPerfil.gql"),
        variables: {
          name: this.name,
          comida: this.comida,
          bebida: this.bebida,
          precio: this.precio1
        }
      }),
        this.$router.push({ name: "about" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
