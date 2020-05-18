<template>
  <div class="card mt-3 mb-3 ml-3 mr-3 border-0 rounded-0" style="width: 200px;">
    <div v-b-modal="info.id">
      <div class="image-box">
        <img v-bind:src="info.img" alt="asdf" />
      </div>
      <!-- <div class="container" style="background: #eef1e6;">
        {{section}}
      </div> -->
      <div>
        <div class="card-body">
          <div class="card-text text-truncate">{{ info.title }}</div>
          <div class="card-text text-truncate font-italic">{{ info.authors }}</div>
        </div>
      </div>
    </div>
    <b-modal
      v-bind:id="info.id"
      centered
      hide-footer
      hide-header
      class="modal-window"
      body-class="p-0"
      @show="get_random_genre"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div class="row">
              <div @click="get_random_genre" class="col" style="background: #e9edde;">
                <div>
                  <img v-bind:src="info.img" alt="Image" />
                </div>
              </div>
              <div class="col" scrollable style="background: #f4f6ef;">
                <b-card-body>
                  <div class="font-weight-bold">{{info.title}}</div>
                  <div class="font-italic">by {{ info.authors }}</div>
                  <div class="mt-3">
                    <b-icon-bag />
                    {{ info.price }}
                  </div>
                  <div>
                    <b-icon-book-half />
                    {{ info.format }}
                  </div>
                  <div v-if="info.number_of_pages !==''">
                    <b-icon-book />
                    {{ info.number_of_pages }} pages
                  </div>
                  <div v-if="info.published_ad !==''">
                    <b-icon-calendar />
                    {{ info.published_at }}
                  </div>
                  <div>
                    <b-icon-pencil-square />
                    {{ random_genre }}
                  </div>
                  <div class="mb-3" v-if="Object.keys(info.rating).length !== 0" style="float: left;">
                    <rating v-bind:rating="info.rating.average_rating"
                            v-bind:ratings_count="info.rating.work_ratings_count"
                            style="float: left;"
                            id="tooltip-target"
                            />
                  </div>
                  <div class="mb-3" v-else style="float: left;">
                    <rating v-bind:rating="'0.00'"
                            v-bind:ratings_count="0"
                            style="float: left;"
                            id="tooltip-target"
                            />
                  </div>
                    <b-tooltip target="tooltip-target" triggers="hover" placement="left">
                      Goodreads rating, <br/>refreshed daily.
                    </b-tooltip>
                </b-card-body>
              </div>
            </div>
            <!-- <div style="background: #eef1e6;">
              {{section}}
            </div> -->
            <b-card-text class="mt-3 mb-3 scroll" v-if="info.desc !== undefined">
                <p v-bind:key="line" v-for="line in info.desc.split('\n')">
                  {{line}}
                </p>
            </b-card-text>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Rating from "./Rating.vue";

export default {
  name: "Book",
  components:{
    Rating
  },
  data() {
    return {
      random_genre: null,
      prev_index: 0
    }
  },
  props: {
    info: Object,
    section: String
  },
  methods:{
    get_random_genre() {
        var new_index = Math.floor(Math.random() * this.info.genres.length);
        if(this.info.genres.length>1){
            while(new_index == this.prev_index){
                new_index = Math.floor(Math.random() * this.info.genres.length);
            }
        }
        this.prev_index = new_index;
        this.random_genre = this.info.genres[new_index];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image-box {
  background: #e9edde;
  width: calc(100%);
  height: 0;
  padding-bottom: calc(100%);
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  -ms-flex-pack: center;
  position: relative;
  cursor: pointer;
}
.image-box img {
  width: 45%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  top: 50%;
  position: absolute;
  box-shadow: 7px 4px 11px -1px rgba(0, 0, 0, 0.3);
  margin: 0 auto;
  left: 0;
  right: 0;
}

.img-container {
  text-align: center;
  display: block;
}

.modal-window {
  background: #eef1e6;
  width: calc(100%);
  height: 0;
  padding-bottom: calc(100%);
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  -ms-flex-pack: center;
  position: relative;
  cursor: pointer;
}

.modal-window img {
  width: 45%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  top: 50%;
  position: absolute;
  box-shadow: 7px 4px 11px -1px rgba(0, 0, 0, 0.3);
  margin: 0 auto;
  left: 0;
  right: 0;
  background: url('https://masterbranch.io/logo.png') center center no-repeat transparent;
  background-size: cover; /* for new browsers */
}

.item3 {
  grid-area: main;
}
.item4 {
  grid-area: right;
}
.item5 {
  grid-area: footer;
}

.grid-container {
  display: grid;
  grid-template-areas:
    "main right"
    "footer footer";
  grid-gap: 1px;
  background-color: #fff;
  padding: 10px;
}

.grid-container > div {
  background-color: #eef1e6;
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}
div img {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

div:focus,
div:active {
  outline: none !important;
  box-shadow: none;
}

.scroll {
    max-height:400px;
    overflow-y: auto;
}

.checked {
  color: orange;
}
</style>
