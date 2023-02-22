<template>
  <div class="app">
    <h1 >{{msg}}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName"/>
   <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 -->
   <!-- <Student @atguigu="getStudentName"> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 -->
    <Student ref="student"/>
  </div>
</template>

<script>
  import School from './components/School.vue'
  import Student from './components/Student.vue'
    export default{
      new:'App',
      data() {
        return {
          msg:'你好啊'
        }
      },
      components:{
        School,
        Student
      },
      methods:{
            getSchoolName(){
                console.log('App收到了学校名',name)
            },
           getStudentName(){
                console.log('demo被调用了',name)
            }
        },
        mounted(){
          setTimeout(() => {
            this.$refs.student.$on('atguigu',this.getStudentName)
            // this.$refs.student.$once('atguigu',this.getStudentName)//只用一次
            
          }, 3000);
          
        }
    }
</script>

<style>
    .app{
      background-color: gray;
    }
</style>
