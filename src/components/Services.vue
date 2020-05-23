<template>
  <div>
  <b-navbar sticky>
    <b-navbar-brand>Books and Arts</b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item @click="toggle_favs">
          <div v-if="favs_only">
            <b-icon-heart-fill class="text-danger"/>
          </div>
          <div v-else>
            <b-icon-heart class="text-danger"/>
          </div>
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
          <b-form-input size="sm" v-model="search" placeholder="Search for author or title"></b-form-input>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

    <div class="justify-content-center d-flex flex-wrap">
      <div v-bind:key="i" v-for="(item, i) in books_and_arts">
        <div v-if="item.type === 'books'">
          <Book v-bind:info="item" ref="item"/>
        </div>
        <div v-if="item.type === 'arts'">
          <Exhibition v-bind:info="item" ref="item"/>
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
      return this.books.concat(this.arts);
    },
    books: function() {
      let result = [];
      this.service.forEach(service => {
        if (service.service_type === "books") {
          service.data.forEach(section => {
            section.books.forEach(book => {
              result.push({
                data: book,
                section: section.section,
                type: service.service_type,
                id: book.id+service.full_name+section.section.replace(/ /g, "_")
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
                data: exhibition,
                section: service.data.section,
                type: service.service_type,
                id: exhibition.id+service.full_name
              });
            });
        }
      });
      return result;
    }
  },
  methods:{
    toggle_favs(){  
      this.favs_only = !this.favs_only;
      this.$refs.item.forEach(card => {
          if(card.info.type === "books" && card.is_liked !== true){
            card.is_visible = !this.favs_only;
          }
        }
      );
    }
  },
  data() {
    return {
      favs_only: false,
      search: ''
    }
  },
  watch:{
    search: function(val){
      this.$refs.item.forEach(card => {
          let query = val.toLowerCase();
          let match1 = card.info.data.title.toLowerCase().includes(query);
          let match2 = false;
          if(card.info.type === "books"){
              match2 = card.info.data.authors.toLowerCase().includes(query);
          }
          card.is_visible = match1 || match2
      });
    }
  }
};
</script>

<style>
.navbar {
    -webkit-box-shadow: 0 8px 6px -6px #999;
    -moz-box-shadow: 0 8px 6px -6px #999;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.3);
  background-color: #f4f4ed;
}
</style>