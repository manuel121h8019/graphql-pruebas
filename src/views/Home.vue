<template>
  <div class="home">
    <Customers msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Customers from "@/views/Customers.vue";

export default {
  name: "home",
  components: {
    Customers
  }
};
</script>
