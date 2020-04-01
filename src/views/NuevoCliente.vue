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
                    v-model="client.person.data.name"
                    color="grey"
                    label="Nombre(s)*"
                    placeholder=" "
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    v-model="client.person.data.last_name"
                    color="grey"
                    label="Apellido(s)*"
                    placeholder=" "
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-row
                    v-for="phone in client.person.data.person_phones.data"
                    :key="phone.id"
                  >
                    <v-col cols="5">
                      <v-autocomplete
                        v-model="phone.country_id"
                        :items="countries"
                        item-text="nicename"
                        item-value="id"
                        label="Prefijo"
                        placeholder=" "
                        color="grey"
                        style="padding-top: 0px;margin-top: 1px;"
                      ></v-autocomplete>
                    </v-col>
                    <v-col cols="7">
                      <v-text-field
                        v-model="phone.number"
                        value=""
                        color="grey"
                        label="Teléfono"
                        placeholder="  "
                        style="padding-top: 0px;margin-top: 1px;"
                      ></v-text-field
                    ></v-col>
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
                    v-model="client.person.data.email"
                    color="grey"
                    label="Correo Electrónico*"
                    placeholder=" "
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <template>
                    <v-radio-group
                      v-model="client.person.data.gender"
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
                    v-model="client.person.data.birthdate"
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
      description: "",
      address: "",
      person: {
        data: {
          name: "",
          last_name: "",
          gender: "",
          email: "",
          birthdate: new Date().toISOString().substr(0, 10),
          person_phones: {
            data: [
              {
                /*    person_id: null, */
                country_id: 145,
                number: ""
              }
            ]
          }
        }
      }
    }
  }),
  apollo: {
    countries: require("../graphql/GetCountries.gql")
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
      this.$apollo.mutate({
        mutation: require("../graphql/InsertCliente.gql"),
        variables: {
          objects: this.client
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
