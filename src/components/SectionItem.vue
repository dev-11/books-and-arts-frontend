<template>
  <div class="card mt-3 mb-3 ml-3 mr-3 border-1 rounded-0" style="width: 200px;">
    <div v-b-modal="info.id">
      <div class="archive-product-image-box">
        <img v-bind:src="info.img" alt="asdf" />
      </div>
      <div>
        <div class="card-body">
          <!-- <div v-if="info.section != ''" class="card-text d-flex justify-content-center mb-3">
            <span class="badge badge-pill badge-primary">{{ info.section }}</span>
          </div>-->
          <div class="card-text text-truncate">{{ info.title }}</div>
          <div class="card-text text-truncate font-italic">{{ info.authors }}</div>
          <!-- <div class="card-text">{{ info.price }} | {{ info.format }}</div> -->
          <!-- <hr class="mt-3 mb-3 ml-5 mr-5" />
          <div class="card-text text-justify">{{ info.desc }}</div>-->
        </div>
      </div>
    </div>
    <b-modal v-bind:id="info.id" centered hide-footer>
      <div>
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img v-bind:src="info.img" alt="Image" class="rounded-0" />
            </b-col>
            <b-col md="6">
              <b-card-body v-bind:title="info.title">
                <b-card-text class="font-italic">by {{ info.authors }}</b-card-text>
                <b-card-text>{{ info.price }} | {{ info.format }}</b-card-text>

                <b-card-text>
                  Steeped in an evocative gothic aura, Jenni Spangler’s outstanding fantasy novel features a manipulative medium and a gang of resourceful orphan children. Utterly absorbing and boasting delightfully creepy artwork from the great Chris Mould, The Vanishing Trick is an unqualified triumph of darkly magical fun.
                </b-card-text>
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
.archive-product-image-box {
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
.archive-product-image-box img {
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
