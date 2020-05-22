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
      var num = this.ratings_count;
        var b = (num).toPrecision(2).split("e"); // get power
        var k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3); // floor at decimals, ceiling at trillions
        var c = k < 1 ? num.toFixed(0) : (num / Math.pow(10, k * 3) ).toFixed(1); // divide by power
        var d = c < 0 ? c : Math.abs(c); // enforce -0 is 0
        var e = d + ['', 'k', 'm', 'B', 'T'][k]; // append power
        return e;
    }
  }
};
</script>