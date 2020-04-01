<template>
  <div>
    <v-app>
      <v-data-table
        :headers="headers"
        :items="customers"
        class="elevation-0"
        :search="search"
      >
        <template v-slot:item.action="{ item }">
          <v-btn
            x-small
            elevation="0"
            class="green darken-1"
            dark
            @click="update(item.person.id)"
            >edit
          </v-btn>
          <v-btn
            x-small
            elevation="0"
            class="red darken-1"
            dark
            @click="item.person.id"
          >
            <v-icon dark x-small @click="deleteCustomer(item.id)"
              >borrar</v-icon
            >
          </v-btn>
        </template>
      </v-data-table>
    </v-app>
  </div>
</template>
<script>
export default {
  data: () => ({
    headers: [
      {
        text: "Nombre",
        align: "left",
        value: "person.name"
      },
      {
        text: "Teléfono 1",
        sortable: false,
        value: "person.person_phones[0].number"
      },
      {
        text: "Teléfono 2",
        sortable: false,
        value: "person.person_phones[1].number"
      },
      {
        text: "Correo Electrónico",
        sortable: false,
        value: "person.email"
      },
      {
        text: "Fecha de Nacimiento",
        sortable: false,
        value: "person.birthdate"
      },
      { text: "Opciones", value: "action", sortable: false }
    ],
    customers: []
  }),
  apollo: {
    customers: require("@/graphql/GetCustomers.gql"),
    fetchPolicy: "network-only"
  },
  mounted() {
    this.$apollo.queries.customers.refetch();
  },
  methods: {
    update(id) {
      this.$router.push({ name: "customers.update", params: { id } });
    },
    deleteCustomer(id) {
      this.$apollo.mutate({
        mutation: require("@/graphql/DeleteCustomers.gql"),
        variables: {
          id: id
        }
      });
      this.$apollo.queries.customers.refetch();
    }
  }
};
</script>

<style></style>
