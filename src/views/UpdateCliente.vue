<template>
  <div>
    <v-app>
      <v-container>
        <!--      <ApolloMutation
          :mutation="require('@/graphql/InsertCliente.gql')"
          :variables="{}"
        >
          <template v-slot="{ mutate, loading, error }"> -->
        <form>
          <v-col clos="12">
            <v-card flat="">
              <v-card-text class="black--text"
                >Información Básica:
              </v-card-text>
              <v-divider light></v-divider>
              <v-col cols="8" class="margin-auto">
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    v-model="client.name"
                    color="grey"
                    label="Nombre(s)*"
                    placeholder=" "
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    v-model="client.last_name"
                    color="grey"
                    label="Apellido(s)*"
                    placeholder=" "
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-row>
                    <v-col cols="4">
                      <v-autocomplete
                        :items="countries"
                        item-text="nicename"
                        item-value="id"
                        label="Prefijo"
                        placeholder=" "
                        color="grey"
                        style="padding-top: 0px;margin-top: 1px;"
                      ></v-autocomplete>
                    </v-col>
                    <v-col cols="5">
                      <v-text-field
                        value=""
                        color="grey"
                        label="Teléfono"
                        placeholder="  "
                        style="padding-top: 0px;margin-top: 1px;"
                      ></v-text-field
                    ></v-col>
                    <v-btn
                      small
                      class="white--text"
                      elevation="0"
                      color="light-blue "
                      @click="updatePhone(phone.person_id)"
                      style="padding-top: 0px;margin-top: 1px;"
                      >edit</v-btn
                    >
                  </v-row>
                  <v-col cols="12">
                    <v-btn
                      small
                      class="white--text"
                      elevation="0"
                      color="light-blue "
                      @click="newPhone"
                      >Add Num.</v-btn
                    >
                    <v-btn
                      small
                      class="white--text"
                      elevation="0"
                      color="red darken-1 ml-3"
                      @click="deletePhone"
                      >Borrar
                    </v-btn>
                  </v-col>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    v-model="client.email"
                    color="grey"
                    label="Correo Electrónico*"
                    placeholder=" "
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <template>
                    <v-radio-group
                      v-model="client.gender"
                      row
                      style="padding-top: 0px;margin-top: 0px;"
                    >
                      <v-radio
                        label="Masculino"
                        value="Masculino"
                        color="light-blue darken-1"
                      ></v-radio>
                      <v-radio
                        label="Femenino"
                        value="Femenino"
                        color="light-blue darken-1"
                      ></v-radio>
                    </v-radio-group>
                  </template>
                </v-col>
              </v-col>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card flat>
              <v-card-text class="black--text"
                >Información Adicional:
              </v-card-text>
              <v-divider light></v-divider>
              <v-col cols="8" class="margin-auto">
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    v-model="client.birthdate"
                    color="grey"
                    label="Fecha de nacimiento"
                    placeholder=" "
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-textarea
                    v-model="client.address"
                    name="input-7-1"
                    color="grey"
                    rows="2"
                    label="Dirección"
                    placeholder=" "
                  ></v-textarea
                ></v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-textarea
                    v-model="client.description"
                    name="input-7-1"
                    label="Nota"
                    rows="2"
                    placeholder=" "
                    color="grey"
                  ></v-textarea>
                </v-col>
                <v-col cols="12">
                  <v-btn
                    small
                    elevation="0"
                    color="blue-grey lighten-2 mr-3"
                    dark
                    >Cancelar</v-btn
                  >
                  <v-btn
                    small
                    class="white--text"
                    elevation="0"
                    color="light-blue darken-1"
                    @click="save()"
                    >Agregar</v-btn
                  >
                </v-col>
              </v-col>
            </v-card>
          </v-col>
        </form>
        <!--          <p v-if="error">An error occurred: {{ error }}</p>
          </template>
        </ApolloMutation> -->
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    dialog: false,
    menu: false,
    modal: false,
    menu2: false,
    id: null,
    client: {
      name: "",
      last_name: "",
      email: "",
      gender: "",
      birthdate: new Date().toISOString().substr(0, 10),
      description: "",
      address: ""
    }

    /*   person_phones: {
      data: [
        {
          country_id: 145,
          number: ""
        }
      ]
    } */
  }),
  apollo: {
    countries: {
      query: require("../graphql/GetCountries.gql")
    },
    /*  person_phones: {
      query: require("../graphql/GetPhones.gql"),
      variables() {
        return {
          id: this.$route.params.id
        };
      },
      result({ data }) {
        this.person_phones.data = data.person_phones;
        this.person.name.data = data.person.data.name;
      }
    }, */
    customers: {
      query: require("../graphql/GetCustomers.gql"),
      variables() {
        return {
          person_id: this.$route.params.id
        };
      },
      result({ data }) {
        this.client.name = data.customers[0].person.name;
        this.client.last_name = data.customers[0].person.last_name;
        this.client.email = data.customers[0].person.email;
        this.client.gender = data.customers[0].person.gender;
        this.client.birthdate = data.customers[0].person.birthdate;
        this.client.address = data.customers[0].address;
        this.client.description = data.customers[0].description;
      }
    }
  },
  computed: {
    /*  phones() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return (this.phones = this.person_phones);
    }*/
  },
  mounted() {
    // eslint-disable-next-line no-console
  },
  methods: {
    save() {
      /**/
      this.$apollo.mutate({
        mutation: require("../graphql/UpdateCustomers.gql"),
        variables: {
          id: this.$route.params.id,
          name: this.client.name,
          last_name: this.client.last_name,
          email: this.client.email,
          gender: this.client.gender,
          birthdate: this.client.birthdate,
          address: this.client.address,
          description: this.client.description
        }
      });
    },
    newPhone() {
      this.client.person.data.person_phones.data.push({
        /*   person_id: this.id, */
        number: "",
        country_id: 145
      });
    },
    deletePhone(phone) {
      this.client.person.data.person_phones.data.splice(
        this.client.person.data.person_phones.data.indexOf(phone),
        1
      );
    },
    updatePhone(id) {
      this.$apollo.mutate({
        mutation: require("../graphql/UpdatePhones.gql"),
        variables: {
          person_id: id,
          person_phones: this.person_phones
        }
      });
    }
  }
};
</script>

<style>
.margin-auto {
  margin-left: auto;
  margin-right: auto;
}
</style>
