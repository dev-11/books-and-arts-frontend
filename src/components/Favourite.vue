<template>
  <div>
    <b-icon-heart-fill class="text-danger" v-if="checked" />
    <b-icon-heart class="text-danger" v-if="!checked" />
  </div>
</template>

<script>
export default {
  props:{
      checked: Boolean
  }
};
</script>

