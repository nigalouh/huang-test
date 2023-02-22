<template>
    <div class="category">
        <div>{{title}}分类</div>
        <slot :games="games"></slot>
    </div>
   
</template>

<script>
   export default{
    name:'Category',
    props:['title'],
    data(){
        return{
            games:['红色警戒','穿越火线','劲舞团','超级玛丽']
        }
    }
    }

</script>

<style>
    .category{
        background-color: skyblue;
        width:200px;
        height:300px;
    }
    h3{
        text-align: center;
        background-color: orange;
    }
</style>