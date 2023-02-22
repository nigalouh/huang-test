<template>
  <div class="school">
    <h2>{{name}}</h2>
    <h2>{{address}}</h2>
   
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'
  export default {
    name:'School',
    
    data() {
      return {
        name:'尚硅谷atguigu',
        address:'北京',
    }
  },
  mounted(){
    //console.log('school',this.x)
    // this.$bus.$on('hello',(data)=>{
    //     console.log('我是School组件,收到了数据',data)
    //   })
    pubsub.subscribe('hello',function(msgName,data){
      console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data)
    })
  },
    beforeDestroy() {
      // this.$bus.$off('hello')
      pubsub.unsubscribe(this.pubId)
    },
     
}
</script>

<style scoped>
   .school{
    background-color: skyblue;
   }
</style>