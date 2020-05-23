<template>
  <div class="card mt-3 mb-3 ml-3 mr-3 border-0 rounded-0" style="width: 200px;" v-if="is_visible">
    <div >
      <div class="image-box" v-b-modal="info.id">
        <img v-bind:src="details.img" onerror="this.src='./assets/cover_coming_soon.jpg';"/>
      </div>
       <div class="corner m-2" @click="toogle_liked">
        <favourite v-bind:checked="is_liked"/>
      </div>
      <div>
        <div class="card-body">
          <div class="card-text text-truncate">{{ details.title }}</div>
          <div class="card-text text-truncate font-italic">{{ details.date }}</div>
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
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div class="row">
              <div class="col" style="background: #D3E1E9;">
               <div class="close-button">
                  <b-icon-x font-scale="1.2" @click="close_modal"/>
                </div>
                <div>
                  <img v-bind:src="details.img" alt="Image" />
                </div>
              </div>
              <div class="col" style="background: #e4edf2;">
                <div class="mt-4 mr-2 ml-2">
                  <div class="corner" @click="toogle_liked">
                    <favourite v-bind:checked="is_liked" />
                  </div>
                  <div class="font-weight-bold">{{details.title}}</div>
                  <div class="font-italic">by {{ details.authors }}</div>
                  <div class="mt-3">
                    <b-icon-eye />
                    {{ details.payment_type }}
                  </div>
                  <div class="mb-3">
                    <b-icon-calendar />
                    {{ details.date }}
                  </div>
                </div>
              </div>
            </div>
            <b-card-text class="mt-3 mb-3">{{details.description}}</b-card-text>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Favourite from "./Favourite.vue"

export default {
  name: "Exhibition",
  components: {
    Favourite
  },
  data() {
    return {
      details: this.info.data,
      is_liked: false,
      is_visible: true
    };
  },
  props: {
    info: Object
  },
  methods:{
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
  background: #d3e1e9;
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

.corner{
  float: right;
}

.close-button{
  position: absolute;
  left: 0;
  cursor: pointer;
}
</style>
