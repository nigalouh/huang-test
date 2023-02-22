<template>
    <div class="studnet">
        <h2>学生姓名{{name}}</h2>
        <h2>学生性别{{sex}}</h2>
        <h2>num{{num}}</h2>
        <button @click="num++">点击num加一</button>
        <button @click="sendStudentName">把学生名给App</button>
        <button @click="unbind">解绑atguigu事件</button>
        <button @click="death">销毁当前Student组件的实例</button>
    </div>
</template>

<script>
    export default{
        name:'Student',
        data() {
            return {
                name:'张三',
                sex:'男',
                num:0
            }
        },
        methods: {
            sendStudentName(){
                //触发Student上的atguigu事件
                this.$emit('atguigu',this.name)
            },
            unbind(){
            this.$off('atguigu')//解绑一个自定义事件
            //this.$off()//解绑所有自定义事件
        },
        death(){
            this.$destroy()//销毁了当前的Student组件的实例,销毁后所有Student实例的自定义事件全不奏效
        }
       
        },
       
    }
   

</script>

<style >
 .studnet{
     background-color:pink;
       padding: 20px;
       
    }
    


</style>