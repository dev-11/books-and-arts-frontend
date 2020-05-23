<template>
  <div id="app">
    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>
    <section v-else>
      <div v-if="loading">
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div v-else>
        <Services v-bind:service="services" />
      </div>
    </section>
  </div>
</template>

<script>
import Services from "./components/Services.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Services
  },
  data() {
    return {
      services: [],
      errored: false,
      loading: true
    };
  },
  created() {
    axios
      .get("https://api.masterbranch.io/b/bna")
      .then(response =>  (this.services = response.data.body.data))
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>

<style>
body {
  display: flex;
  justify-content: center;
  background: #f6f6f6;
  font-family: "Roboto Slab", serif;
  line-height: 1.4;
}

.spinner-border {
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 50px;
  height: 50px;
  margin: auto;
}

#app{
    width: 100%;
}

</style>
