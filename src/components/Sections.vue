<template>
<div>
  <div class="card-deck justify-content-center">
    <div v-bind:key="d.section" v-for="d in sections">
      <SectionItem v-bind:info="d" />
    </div>
    <!-- <b-button v-b-modal.modal-1>Launch demo modal</b-button> -->
  </div>
  </div>
</template>

<script>
import SectionItem from './SectionItem.vue';

export default {
  name: "Sections",
  components: {
    SectionItem
  },
  props: ["sections"]
};
</script>