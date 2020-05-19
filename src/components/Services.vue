<template>
  <div>
    <div class="justify-content-center d-flex flex-wrap" v-if="service.service_type === 'books'">
      <div v-bind:key="i" v-for="(book, i) in books">
        <Book v-bind:info="book"/>
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
  props: {
    service: Object
  },
  computed:{
    books: function(){
      let result = []
      this.service.data.forEach(section => {
        if(this.service.service_type === 'books'){
          section.books.forEach(book => {
            result.push({
              'book': book,
              'section': section.section
            });
          })
        }
      });
      return result;
    }
  }
};
</script>