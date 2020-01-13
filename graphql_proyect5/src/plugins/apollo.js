import Vue from "vue";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: "https://minuevaapp123.herokuapp.com/v1/graphql"
});

Vue.use(VueApollo);

export const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: "loading"
  }
});
