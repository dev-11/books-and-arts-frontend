<template>
<div>
  <div class="card-deck justify-content-center">
    <div v-bind:key="d.id" v-for="d in sections">
      <SectionItem v-bind:info="d" />
    </div>
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