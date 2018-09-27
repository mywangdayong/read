<template>
    <!-- 所有的内容要被根节点包含起来 -->
    <div>
        <news></news>
    </div>
</template>


<script>
    import news from "../user/news"
    export default{
        components:{news},
        data(){
            return {               
               msg:'我是一个user组件'
             
            }
        }       
    }

</script>

