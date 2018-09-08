<template>
<div id="app">
    <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two>
</div>
</template>

<script>
import ProductListOne from './ProductListOne.vue'
import ProductListTwo from './ProductListTwo.vue'

export default {
    name: 'app',
    components: {
        'product-list-one': ProductListOne,
        'product-list-two': ProductListTwo
    }
}

</script>

<style>
body{
    font-family: Ubuntu;
    color: #555;
}
</style>

