import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { apolloProvider } from "./plugins/apollo";
import VueCurrencyFilter from "vue-currency-filter";
import VueCurrencyInput from "vue-currency-input";

Vue.use(VueCurrencyInput);

Vue.config.productionTip = false;

Vue.use(VueCurrencyFilter, {
  symbol: "$", // El símbolo, por ejemplo €
  thousandsSeparator: ",", // Separador de miles
  fractionCount: 2, // ¿Cuántos decimales mostrar?
  fractionSeparator: ".", // Separador de decimales
  symbolPosition: "front", // Posición del símbolo. Puede ser al inicio ('front') o al final ('') es decir, si queremos que sea al final, en lugar de front ponemos una cadena vacía ''
  symbolSpacing: false // Indica si debe poner un espacio entre el símbolo y la cantidad
});

new Vue({
  router,
  store,
  apolloProvider,
  vuetify,
  render: h => h(App)
}).$mount("#app");
