<template>
  <div class="card mt-3 mb-3 ml-3 mr-3 border-0 rounded-0" style="width: 200px;">
    <div>
      <div class="image-box" v-b-modal="info.id">
        <img v-bind:src="book.img" onerror="this.src='./assets/cover_coming_soon.jpg';"/>
      </div>
       <div class="corner m-2" @click="toogle_liked">
        <favourite v-bind:checked="is_liked"/>
      </div>
      <!-- <div class="container" style="background: #eef1e6;">
        {{section}}
      </div>-->
      <div>
        <div class="card-body">
          <div class="card-text text-truncate">{{ book.title }}</div>
          <div class="card-text text-truncate font-italic">{{ book.authors }}</div>
        </div>
      </div>
    </div>
    <b-modal
      v-bind:id="info.id"
      centered
      hide-footer
      hide-header
      body-class="p-0"
      @show="get_random_genre"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div class="row">
              <div class="col" style="background: #e9edde;">
                <div>
                  <img v-bind:src="book.img" onerror="this.src='./assets/cover_coming_soon.jpg';"/>
                </div>
              </div>
              <div
                class="col"
                scrollable
                style="background: #f4f6ef;"
              >
                <b-card-body>
                  <div class="corner" @click="toogle_liked">
                    <favourite v-bind:checked="is_liked" />
                  </div>
                  <div class="font-weight-bold">{{book.title}}</div>
                  <div class="font-italic">by {{ book.authors }}</div>
                  <div class="mt-3">
                    <b-icon-bag />
                    {{ book.price }}
                  </div>
                  <div>
                    <b-icon-book-half />
                    {{ book.format }}
                  </div>
                  <div v-if="book.number_of_pages !==''">
                    <b-icon-book />
                    {{ book.number_of_pages }} pages
                  </div>
                  <div @click="switch_publication_date_format" v-if="book.published_ad !==''" class="capitalize_first_word">
                    <b-icon-calendar style="float: left;" class="mr-1" />
                    <div v-if="show_smart_publication_date">{{ this.formatted_publication_date }}</div>
                    <div v-else>{{ book.published_at }}</div>
                  </div>
                  <div @click="get_random_genre">
                    <b-icon-pencil-square />
                    {{ random_genre }}
                  </div>
                  <div
                    class="mb-3"
                    v-if="Object.keys(book.rating).length !== 0"
                    style="float: left;"
                  >
                    <rating
                      v-bind:rating="book.rating.average_rating"
                      v-bind:ratings_count="book.rating.work_ratings_count"
                      style="float: left;"
                      id="tooltip-target"
                    />
                  </div>
                  <div class="mb-3" v-else style="float: left;">
                    <rating
                      v-bind:rating="'0.00'"
                      v-bind:ratings_count="0"
                      style="float: left;"
                      id="tooltip-target"
                    />
                  </div>
                  <b-tooltip target="tooltip-target" triggers="hover" placement="left">
                    Goodreads rating,
                    <br />refreshed daily.
                  </b-tooltip>
                </b-card-body>
              </div>
            </div>
            <!-- <div style="background: #eef1e6;">
              {{section}}
            </div>-->
            <b-card-text class="mt-3 mb-3 scroll" v-if="book.desc !== undefined">
              <p v-bind:key="line" v-for="line in book.desc.split('\n')">{{line}}</p>
            </b-card-text>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Rating from "./Rating.vue";
import Favourite from "./Favourite.vue"

export default {
  name: "Book",
  components: {
    Rating,
    Favourite
  },
  data() {
    return {
      random_genre: null,
      prev_index: 0,
      show_smart_publication_date: true,
      book: this.info.book,
      is_liked: false
    };
  },
  computed: {
    formatted_publication_date: function() {
      let d = this.book.published_at.split("/");
      let date = new Date(+d[2], +d[1] - 1, +d[0]);
      let now = new Date(Date.now()); // to make it testable
      let diff = now.getTime() - date.getTime();
      let diff_in_days = Math.floor(diff / (1000 * 3600 * 24));

      return this.get_smart_date_display(diff_in_days);
    }
  },
  props: {
    info: Object
  },
  methods: {
    get_random_genre() {
      var new_index = Math.floor(Math.random() * this.book.genres.length);
      if (this.book.genres.length > 1) {
        while (new_index == this.prev_index) {
          new_index = Math.floor(Math.random() * this.book.genres.length);
        }
      }
      this.prev_index = new_index;
      this.random_genre = this.book.genres[new_index];
    },
    switch_publication_date_format() {
      this.show_smart_publication_date = !this.show_smart_publication_date;
    },
    get_smart_date_display(days){
      if(days == 0){
        return "today"
      }

      if(days == 1){
        return 'yesterday'
      }

      if(days == 2){
        return 'the day before yesterday'
      }

      if(days == -1){
        return 'tomorrow'
      }

      if(days == -2){
        return 'the day after tomorrow'
      }

      let abs_days = Math.abs(days);
      let day = (abs_days == 1) ? "day" : "days";
      
      if (days > 0) {
        return abs_days + " " + day + " ago";
      }
      return abs_days + " " + day + " from now";
    },
    toogle_liked(){
      if (localStorage.getItem(this.book.id)) {
        localStorage.removeItem(this.book.id);
        this.is_liked = false;
      }else{
          localStorage.setItem(this.book.id, 'checked');
          this.is_liked = true;
      }
    }
  },
  mounted() {
    if (localStorage.getItem(this.book.id)) {
      this.is_liked = true;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image-box {
  background: #e9edde;
  padding-bottom: calc(100%);
  position: relative;
  cursor: pointer; 
}

div img {
  width: 45%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  box-shadow: 7px 4px 11px -1px rgba(0, 0, 0, 0.3);
  background-size: cover; /* for new browsers */
}

div:focus,
div:active {
  outline: none !important;
  box-shadow: none;
}

.scroll {
  max-height: 400px;
  overflow-y: auto;
}

.checked {
  color: orange;
}

.capitalize_first_word:first-letter {
  text-transform: capitalize;
}

.corner{
  float: right;
}

</style>
