<template>
    <div>
        <div v-for="(item, i) in full_stars" :key="'fs'+i" style="float: left;">
            <b-icon-star-fill class="text-warning"/>
        </div>
        <div v-if="has_half_star" style="float: left;">
            <b-icon-star-half class="text-warning"/>
        </div>
        <div v-for="(item, i) in empty_stars" :key="'es'+i" style="float: left;">
            <b-icon-star class="text-warning"/>
        </div>
        <div class="ml-2" style="float: left;">
            {{rating}}
        </div>
        <div class="ml-2 text-muted" style="float: left;">
            ({{smart_number}})
        </div>
    </div>
</template>

<script>
import get_smart_number from "@/utils/parsers/smart_number_parser";

export default {
  name: "rating",
  props: {
    rating: String,
    ratings_count: Number
  },
  computed:{
    full_stars: function(){
        return Math.floor(+this.rating);
    },
    has_half_star: function(){
        return (+this.rating % 1);
    },
    empty_stars: function(){
        return Math.floor(5-(+this.rating));
    },
    smart_number: function() {
      return get_smart_number(this.ratings_count);
    }
  }
};
</script>