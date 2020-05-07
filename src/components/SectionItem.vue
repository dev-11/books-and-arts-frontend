<template>
  <div class="card mt-3 mb-3 ml-3 mr-3 border-1 rounded-0" style="width: 200px;">
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
    <b-modal v-bind:id="info.id" centered hide-footer hide-header>
      <div>
        <b-card no-body class="border-0">
          <b-row no-gutters>
            <b-col class="image-box">
              <img v-bind:src="info.img" alt="Image" class="rounded-0" />
            </b-col>
            <b-col >
              <b-card-body v-bind:title="info.title">
                <b-card-text class="font-italic">by {{ info.authors }}</b-card-text>
                <b-card-text>
                  <b-icon-bag/> {{ info.price }} | 
                  <b-icon-book-half /> {{ info.format }}<br/>
                  <b-icon-book/> {{ info.number_of_pages }} pages |
                  <b-icon-calendar/> {{ info.published_at }} <br/>
                  <b-icon-pencil-square/> {{ info.genres[info.genres.length - 1] }}
                </b-card-text>
                <b-card-text>{{ info.desc}}</b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "SectionItem",
  props: {
    info: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image-box {
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
</style>
