<template>
  <div class="hello">
    <navtab></navtab>
    <banner></banner>
    <h2>新书速递</h2>
  </div>
</template>
<script>
  import navtab from './nav.vue'
  import banner from './banner.vue'
  export default {
    components:{navtab,banner},
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;text-align:center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li{ 
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
