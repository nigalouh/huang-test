<template>
    <div class="studnet">
        <h2>学生姓名{{name}}</h2>
        <h2>学生性别{{sex}}</h2>
       <button @click="sendStudentName">把学生名给School组件</button>
       
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'
export default{
        name:'Student',
        data() {
            return {
                name:'张三',
                sex:'男',
                
            }
        },
       methods: {
       sendStudentName(){
    //                 this.$bus.$emit('hello',name)
    //         }
        pubsub.publish('hello',666)
    }
}
}
</script>

<style >
 .studnet{
     background-color:pink;
       padding: 20px;
       
    }
    


</style>