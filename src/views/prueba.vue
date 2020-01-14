<template>
  <div>
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
          <p v-for="gusto in data.gustos" :key="gusto.id">
            {{ gusto.comida }}
          </p>
        </div>
        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
  </div>
</template>
