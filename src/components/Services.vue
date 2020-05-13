<template>
  <div>
    <div class="card-deck justify-content-center" v-if="service.service_type === 'books'">
      <div v-bind:key="s.full_name" v-for="s in service.data">
        <div v-bind:key="book.id" v-for="book in s">
          <Book v-bind:info="book" />
        </div>
      </div>
    </div>
    <div v-else class="card-deck justify-content-center">
      <div v-bind:key="art.id" v-for="art in service.data.exhibitions">
        <Exhibition v-bind:info="art" />
      </div>
    </div>
  </div>
</template>

<script>
import Book from "./Book.vue";
import Exhibition from "./Exhibition.vue";

export default {
  name: "Services",
  components: {
    Book,
    Exhibition
  },
  props: ["service"]
};
</script>