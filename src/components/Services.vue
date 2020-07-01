<template>
  <div>
    <b-navbar sticky>
      <b-navbar-brand>Books and Arts</b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item @click="show_favs_only = !show_favs_only">
            <div v-if="show_favs_only">
              <b-icon-heart-fill class="text-danger" />
            </div>
            <div v-else>
              <b-icon-heart class="text-danger" />
            </div>
          </b-nav-item>
          <b-nav-item @click="show_books = !show_books">
            <div v-if="show_books">
              <b-icon-circle-fill class="books" />
            </div>
            <div v-else>
              <b-icon-circle class="books" />
            </div>
          </b-nav-item>
          <b-nav-item @click="show_arts = !show_arts">
            <div v-if="show_arts">
              <b-icon-circle-fill class="arts" />
            </div>
            <div v-else>
              <b-icon-circle class="arts" />
            </div>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <b-icon-search />
              </div>
            </div>
            <b-form-input
              class="no-blue-border"
              type="search"
              v-model="search"
              placeholder="Search for title or author"
            />
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="justify-content-center d-flex flex-wrap">
      <div v-bind:key="i" v-for="(item, i) in books_and_arts">
        <div v-if="item.type === 'books'">
          <Book v-bind:info="item" ref="item" />
        </div>
        <div v-if="item.type === 'arts'">
          <Exhibition v-bind:info="item" ref="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Book from "./Book.vue";
import Exhibition from "./Exhibition.vue";

const SHOW_FAVS_ONLY_FLAG = "show_favs_only";
const HIDE_BOOKS_FLAG = "hide_books";
const HIDE_ARTS_FLAG = "hide_arts";

export default {
  name: "Services",
  components: {
    Book,
    Exhibition
  },
  props: ["service"],
  computed: {
    books_and_arts: function() {
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
                family: service.family,
                is_book_of_the_month: service.service === 'books_of_the_month',
                id:
                  book.id +
                  service.full_name +
                  section.section.replace(/ /g, "_")
              });
            });
          });
        }
      });
      return result;
    },
    arts: function() {
      let result = [];
      this.service.forEach(service => {
        if (service.service_type === "arts") {
          service.data.exhibitions.forEach(exhibition => {
            result.push({
              data: exhibition,
              section: service.data.section,
              type: service.service_type,
              family: service.family,
              id: exhibition.id + service.full_name
            });
          });
        }
      });
      return result;
    }
  },
  methods: {
    can_show_card(card){
      let show_liked =  this.show_favs_only !== true || card.is_liked === true;
      let show_card_by_type= false;
      if(card.info.type === 'books')
      {
        show_card_by_type = this.show_books;
      }
      else
      {
        show_card_by_type = this.show_arts;
      }
      let has_match = this.has_match(card, this.search);
      return show_liked && show_card_by_type && has_match;
    },
    toggle_cards() {
      this.$refs.item.forEach(card => {
        card.is_visible = this.can_show_card(card);
      });
    },
    has_match(card, val) {
      let query = val.toLowerCase();
      let match1 = card.info.data.title.toLowerCase().includes(query);
      let match2 = false;
      if (card.info.type === "books") {
        match2 = card.info.data.authors.toLowerCase().includes(query);
      }
      return match1 || match2;
    },
    udpate_local_storage(key) {
      if (localStorage.getItem(key)) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, "checked");
      }
    },
    init_from_localStorage(key) {
      if (localStorage.getItem(key)) {
        return true;
      }
      return false;
    }
  },
  data() {
    return {
      show_favs_only: this.init_from_localStorage(SHOW_FAVS_ONLY_FLAG),
      show_books: !this.init_from_localStorage(HIDE_BOOKS_FLAG),
      show_arts: !this.init_from_localStorage(HIDE_ARTS_FLAG),
      search: ""
    }
  },
  watch: {
    search: function() {
      this.toggle_cards();
    },
    show_arts: function() {
      this.udpate_local_storage(HIDE_ARTS_FLAG);
      this.toggle_cards();
    },
    show_books: function() {
      this.udpate_local_storage(HIDE_BOOKS_FLAG);
      this.toggle_cards();
    },
    show_favs_only: function() {
      this.udpate_local_storage(SHOW_FAVS_ONLY_FLAG);
      this.toggle_cards();
    }
  },
  mounted: function () {
    this.toggle_cards();
  }
};
</script>

<style>
.navbar {
  -webkit-box-shadow: 0 8px 6px -6px #999;
  -moz-box-shadow: 0 8px 6px -6px #999;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.3);
  background-color: #f1f1f1;
}

.input-group-text {
  background-color: #fff;
  border-right-color: #fff !important;
}

.no-blue-border:focus,
.no-blue-border:active {
  outline: none !important;
  box-shadow: none !important;
  border-top-color: #ced4da !important;
  border-right-color: #ced4da !important;
  border-bottom-color: #ced4da !important;
}

.no-blue-border {
  border-left-color: #fff !important;
}

.navbar-brand {
  color: #434a49 !important;
}

.books {
  color: #e9edde;
}

.arts {
  color: #D3E1E9;
}
</style>