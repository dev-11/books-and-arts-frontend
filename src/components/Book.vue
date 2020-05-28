<template>
  <div class="card mt-3 mb-3 ml-3 mr-3 border-0 rounded-0" style="width: 200px;" v-if="is_visible">
    <div>
      <div class="image-box" v-b-modal="info.id">
        <img v-bind:src="details.img" onerror="this.src='./assets/cover_coming_soon.jpg';"/>
      </div>
       <div class="corner m-2" @click="toogle_liked">
        <favourite v-bind:checked="is_liked"/>
      </div>
      <!-- <div class="container" style="background: #eef1e6;">
        {{section}}
      </div>-->
      <div>
        <div class="card-body">
          <div class="card-text text-truncate">{{ details.title }}</div>
          <div class="card-text text-truncate font-italic">{{ details.authors }}</div>
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
                <div class="close-button">
                  <b-icon-x font-scale="1.2" @click="close_modal"/>
                </div>
                <div>
                  <img v-bind:src="details.img" onerror="this.src='./assets/cover_coming_soon.jpg';"/>
                </div>
              </div>
              <div
                class="col"
                style="background: #f4f6ef;"
              >
                <div class="mt-4 mr-2 ml-2">
                  <div class="corner" @click="toogle_liked">
                    <favourite v-bind:checked="is_liked" />
                  </div>
                  <div class="font-weight-bold">{{details.title}}</div>
                  <div class="font-italic">by {{ details.authors }}</div>
                  <div class="mt-3">
                    <b-icon-bag />
                    {{ details.price }}
                  </div>
                  <div>
                    <b-icon-book-half />
                    {{ details.format }}
                  </div>
                  <div v-if="details.number_of_pages !==''">
                    <b-icon-book />
                    {{ details.number_of_pages }} pages
                  </div>
                  <div @click="switch_publication_date_format" v-if="details.published_ad !==''" class="capitalize_first_word">
                    <b-icon-calendar style="float: left;" class="mr-1" />
                    <div v-if="show_smart_publication_date">{{ this.formatted_publication_date }}</div>
                    <div v-else>{{ details.published_at }}</div>
                  </div>
                  <div @click="get_random_genre">
                    <b-icon-pencil-square />
                    {{ random_genre }}
                  </div>
                  <div
                    class="mb-3"
                    v-if="Object.keys(details.rating).length !== 0"
                    style="float: left;"
                  >
                    <rating
                      v-bind:rating="details.rating.average_rating"
                      v-bind:ratings_count="details.rating.work_ratings_count"
                      style="float: left;"
                      id="tooltip-target"
                    />
                    <!-- <b-icon-eye-slash/>
                    <b-icon-eye/> -->
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
                </div>
              </div>
            </div>
            <!-- <div style="background: #eef1e6;">
              {{section}}
            </div>-->
            <div class="mt-3 mb-3" v-if="details.desc !== undefined">
              <p v-bind:key="line" v-for="line in details.desc.split('\n')">{{line}}</p>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Rating from "./Rating.vue";
import Favourite from "./Favourite.vue";
import { get_smart_date } from "@/utils/formatters/smart_date_formatter";

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
      details: this.info.data,
      is_liked: false,
      is_visible: true
    };
  },
  computed: {
    formatted_publication_date: function() {
      let d = this.details.published_at.split("/");
      let date = new Date(+d[2], +d[1] - 1, +d[0]);
      return get_smart_date(date);
    }
  },
  props: {
    info: Object
  },
  methods: {
    get_random_genre() {
      var new_index = Math.floor(Math.random() * this.details.genres.length);
      if (this.details.genres.length > 1) {
        while (new_index == this.prev_index) {
          new_index = Math.floor(Math.random() * this.details.genres.length);
        }
      }
      this.prev_index = new_index;
      this.random_genre = this.details.genres[new_index];
    },
    switch_publication_date_format() {
      this.show_smart_publication_date = !this.show_smart_publication_date;
    },
    toogle_liked(){
      if (localStorage.getItem(this.details.id)) {
        localStorage.removeItem(this.details.id);
        this.is_liked = false;
      }else{
          localStorage.setItem(this.details.id, 'checked');
          this.is_liked = true;
      }
    },
    close_modal(){
      this.$bvModal.hide(this.info.id);
    }
  },
  created() {
    if (localStorage.getItem(this.details.id)) {
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

.checked {
  color: orange;
}

.capitalize_first_word:first-letter {
  text-transform: capitalize;
}

.corner{
  float: right;
}

.close-button{
  position: absolute;
  left: 0;
  cursor: pointer;
}
</style>
