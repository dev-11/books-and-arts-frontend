<template>
  <div>
    <div class="card-deck justify-content-center" v-if="service.service_type === 'books'">
      <div v-bind:key="section.section" v-for="section in service.data">
        <div v-bind:key="book.id" v-for="book in section.books">
          <Book v-bind:info="book" v-bind:section="section.section"/>
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