<template>
  <div id="app">
  	<navtab></navtab>
    <router-view/>
  </div>
</template>
<script>
import navtab from './components/nav.vue'
export default {
  components:{navtab},
  name: 'App'
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
