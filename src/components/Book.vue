<template>
  <div class="card mt-3 mb-3 ml-3 mr-3 border-0 rounded-0" style="width: 200px;">
    <div v-b-modal="info.id">
      <div class="image-box">
        <img v-bind:src="info.img" alt="asdf" />
      </div>
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
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div class="row">
              <div class="col" style="background: #e9edde;">
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
                  <div v-if="info.number_of_pages !=='N/A'">
                    <b-icon-book />
                    {{ info.number_of_pages }} pages
                  </div>
                  <div v-if="info.published_ad !=='N/A'">
                    <b-icon-calendar />
                    {{ info.published_at }}
                  </div>
                  <div>
                    <b-icon-pencil-square />
                    {{ info.genres[info.genres.length - 1] }}
                  </div>
                </b-card-body>
              </div>
            </div>
            <b-card-text class="mt-3 mb-3" v-if="info.desc !== undefined">
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
export default {
  name: "Book",
  props: {
    info: Object
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
</style>
