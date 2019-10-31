import Vue from 'vue';
import Flickity from 'vue-flickity';

new Vue({
  // template: "#carousel-review",
  el: "#carousel-container",
  components: {
    Flickity
  },
  
  data() {
    return {
      flickityOptions: {
        prevNextButtons: false,
        pageDots: false,
        groupCells: true
      }
    }
  },
  
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  },
  mounted(){
    this.$refs.flickity.on('dragEnd', function(event,pointer){
      console.log(event)
    })
  }
});