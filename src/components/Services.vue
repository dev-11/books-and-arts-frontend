<template>
  <div>
    <div class="justify-content-center d-flex flex-wrap">
      <div v-bind:key="i" v-for="(item, i) in books_and_arts">
        <div v-if="item.type === 'books'">
          <Book v-bind:info="item" />
        </div>
        <div v-if="item.type === 'arts'">
          <Exhibition v-bind:info="item" />
        </div>
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
  props: 
    ['service']
  ,
  computed: {
    books_and_arts: function(){
      let result = this.books.concat(this.arts);
      return result
    },
    books: function() {
      let result = [];
      this.service.forEach(service => {
        if (service.service_type === "books") {
          service.data.forEach(section => {
            section.books.forEach(book => {
              result.push({
                book: book,
                section: section.section,
                type: service.service_type
              });
            });
          });
        }
      });
      return result;
    },
    arts: function(){
      let result = [];
      this.service.forEach(service => {
        if (service.service_type === "arts") {
          service.data.exhibitions.forEach(exhibition => {
              result.push({
                exhibition: exhibition,
                section: service.data.section,
                type: service.service_type
              });
            });
        }
      });
      return result;
    }
  }
};
</script>