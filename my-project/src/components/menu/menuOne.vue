<template>
  <div>
  	<product></product>
  </div>
</template>
<script>
  import product from '../product/product.vue'
  export default {
    components:{product},
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