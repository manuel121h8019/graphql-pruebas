<template>
  <div>
    <v-app>
      <v-container>
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
                  <v-row v-for="phone in phones" :key="phone.id">
                    <v-col cols="4">
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
                    <v-col cols="4">
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
                  <span class="3">
                    <v-btn
                      x-small
                      elevation="0"
                      color="green"
                      dark
                      @click="nuevoTelefono()"
                      ><v-icon dark x-small>fas fa-plus-square</v-icon>
                    </v-btn>
                  </span>
                  <!--      <v-row v-if="phones.length >= 2">
                    <v-col cols="4">
                      <v-autocomplete
                        v-model="person_phones.country_id2"
                        :items="countries"
                        item-text="nicename"
                        item-value="id"
                        label="Prefijo"
                        placeholder=" "
                        color="grey"
                        style="padding-top: 0px;margin-top: 1px;"
                        :disabled="!editPhone2"
                      ></v-autocomplete>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field
                        v-model="person_phones.number2"
                        value=""
                        color="grey"
                        label="Teléfono"
                        placeholder="  "
                        style="padding-top: 0px;margin-top: 1px;"
                        :disabled="!editPhone2"
                      ></v-text-field
                    ></v-col>
                    <v-col cols="4">
                      <span class="pr-3">
                        <v-btn
                          v-if="editPhone2 === false"
                          x-small
                          elevation="0"
                          color="blue"
                          dark
                          @click="editPhone2 = true"
                          ><v-icon dark x-small>fas fa-edit</v-icon>
                        </v-btn>
                        <v-btn
                          v-if="editPhone2 === true"
                          x-small
                          elevation="0"
                          color="green"
                          dark
                          @click="updatePhone2"
                          ><v-icon dark x-small>fas fa-save</v-icon>
                        </v-btn>
                      </span>
                      <span class="pr-3">
                        <v-btn
                          v-if="editPhone2 === false"
                          x-small
                          elevation="0"
                          color="red"
                          dark
                          @click="deletePhone()"
                          ><v-icon dark x-small>fas fa-trash</v-icon>
                        </v-btn>
                        <v-btn
                          v-if="editPhone2 === true"
                          x-small
                          elevation="0"
                          color="red"
                          dark
                          @click="editPhone2 = false"
                          ><v-icon dark x-small>fas fa-window-close</v-icon>
                        </v-btn>
                      </span>
                    </v-col>
                  </v-row>
                  <v-row v-if="newPhone === true">
                    <v-col cols="4">
                      <v-autocomplete
                        v-model="person_phones.newCountry"
                        :items="countries"
                        item-text="nicename"
                        item-value="id"
                        label="Prefijo"
                        placeholder=" "
                        color="grey"
                        style="padding-top: 0px;margin-top: 1px;"
                        :disabled="disabled === true"
                      ></v-autocomplete>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field
                        v-model="person_phones.newNumber"
                        value=""
                        color="grey"
                        label="Teléfono"
                        placeholder="  "
                        style="padding-top: 0px;margin-top: 1px;"
                        :disabled="disabled === true"
                      ></v-text-field
                    ></v-col>
                    <v-col cols="4">
                      <span class="4">
                        <v-btn
                          x-small
                          elevation="0"
                          color="green"
                          dark
                          @click="nuevoTelefono()"
                          ><v-icon dark x-small>fas fa-save</v-icon>
                        </v-btn>
                      </span>
                    </v-col>
                  </v-row> -->
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
    editPhone1: false,
    editPhone2: false,
    disabled: false,
    newPhone: false,
    id: null,
    client: {
      name: "",
      last_name: "",
      email: "",
      gender: "",
      birthdate: new Date().toISOString().substr(0, 10),
      description: "",
      address: ""
    },
    person_phones: {
      idPhone1: "",
      number1: "",
      country_id1: "",
      idPhone2: "",
      number2: "",
      country_id2: "",
      newNumber: "",
      newCountry: ""
    },
    phones: []

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
    person_phones: {
      query: require("../graphql/GetPhones.gql"),
      variables() {
        return {
          person_id: this.$route.params.id
        };
      },
      result({ data }) {
        this.phones = data.person_phones;
        if (data.person_phones.length >= 2) {
          this.person_phones.idPhone1 = data.person_phones[0].id;
          this.person_phones.number1 = data.person_phones[0].number;
          this.person_phones.country_id1 = data.person_phones[0].country_id;

          this.person_phones.idPhone2 = data.person_phones[1].id;
          this.person_phones.number2 = data.person_phones[1].number;
          this.person_phones.country_id2 = data.person_phones[1].country_id;
        } else {
          this.person_phones.idPhone1 = data.person_phones[0].id;
          this.person_phones.number1 = data.person_phones[0].number;
          this.person_phones.country_id1 = data.person_phones[0].country_id;
        }
      }
    },
    customers: {
      query: require("../graphql/GetCustomers.gql"),
      variables() {
        return {
          person_id: this.$route.params.id
        };
      },
      result({ data }) {
        /*  this.phones = data.customers[0].person.person_phones;
        // eslint-disable-next-line no-console
        console.log(this.phones); */
        this.client.name = data.customers[0].person.name;
        this.client.last_name = data.customers[0].person.last_name;
        this.client.email = data.customers[0].person.email;
        this.client.gender = data.customers[0].person.gender;
        this.client.birthdate = data.customers[0].person.birthdate;
        this.client.address = data.customers[0].address;
        this.client.description = data.customers[0].description;
        this.phones = data.customers[0].person.person_phones;
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
      this.$apollo
        .mutate({
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
        })
        .then(() => {
          this.phonesVerifi();
        });
    },
    nuevoTelefono() {
      this.phones.push({
        id: "",
        number: "",
        country_id: 145
      });
      /*  this.$apollo.mutate({
        mutation: require("../graphql/InsertPhone.gql"),
        variables: {
          person_id: this.$route.params.id,
          number: this.person_phones.newNumber,
          country: this.person_phones.newCountry
        }
      });
      this.disabled = true;
      this.newPhone = false;
      this.$apollo.queries.customers.refetch();
      this.$apollo.queries.person_phones.refetch(); */
    },
    deletePhone() {
      this.$apollo.mutate({
        mutation: require("../graphql/DeletePhone.gql"),
        variables: {
          id: this.person_phones.idPhone2
        }
      });
      this.$apollo.queries.customers.refetch();
      this.$apollo.queries.person_phones.refetch();
    },
    updatePhone1() {
      this.$apollo.mutate({
        mutation: require("../graphql/UpdatePhones.gql"),
        variables: {
          id: this.person_phones.idPhone1,
          person_id: this.$route.params.id,
          number: this.person_phones.number1,
          country: this.person_phones.country_id1
        }
      });
    },
    updatePhone2() {
      this.$apollo.mutate({
        mutation: require("../graphql/UpdatePhones.gql"),
        variables: {
          id: this.person_phones.idPhone2,
          person_id: this.$route.params.id,
          number: this.person_phones.number2,
          country: this.person_phones.country_id2
        }
      });
    },
    phonesVerifi() {
      this.phones.forEach(phone => {
        if (phone.id != "") {
          this.$apollo.mutate({
            mutation: require("../graphql/UpdatePhones.gql"),
            variables: {
              id: phone.id,
              person_id: this.$route.params.id,
              number: phone.number,
              country: phone.country_id
            }
          });
          // eslint-disable-next-line no-console
          console.log("udate", phone.id);
        } else {
          // eslint-disable-next-line no-console
          console.log("insertar", phone.id);
          this.$apollo.mutate({
            mutation: require("../graphql/InsertPhone.gql"),
            variables: {
              person_id: this.$route.params.id,
              number: phone.number,
              country: phone.country_id
            }
          });
          this.$apollo.queries.customers.refetch();
          this.$apollo.queries.person_phones.refetch(); /**/
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
