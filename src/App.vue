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
        <div v-bind:key="d.section" v-for="d in sections">
          <!-- {{d.section}} -->
          <Sections v-bind:sections="d.books" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Sections from "./components/Sections.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Sections
  },
  data() {
    return {
      sections: [],
      errored: false,
      loading: true
    };
  },
  created() {
    axios
      .get("https://api.masterbranch.io/b/bna")
      // .then(response => (this.sections = response.data.body.data[0].data))
      .then(
        response => (this.sections = response.data.body.data[1].data)
      )
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>

<style>
/* #app {
  margin-top: 20px;
  width: 300px;
  padding: 0 40px 40px; 
  background: #2f242c;
  border-radius: 5px;
  color: #b3bfb8;
}
*/
body {
  display: flex;
  justify-content: center;
  background: #fafdfd;
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
</style>
