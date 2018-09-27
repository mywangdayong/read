<template>
  <div class="hello">
    <banner></banner>
    <h2>新书速递</h2>
    <card></card>
    <product></product>
    <foot></foot>
  </div>
</template>
<script>
  import banner from './banner.vue'
  import card from './card.vue'
  import foot from './foot.vue'
  import product from './product/product.vue'
  export default {
    components:{banner,card,foot,product},
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style type="text/css">
  
</style>
