<template>
  <div class="school">
    <h2>{{name}}</h2>
    <h2>{{address}}</h2>
   
  </div>
</template>

<script>
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
    this.$bus.$on('hello',(data)=>{
        console.log('我是School组件,收到了数据',data)
      })
  },
    beforeDestroy() {
      this.$bus.$off('hello')
    },
     
}
</script>

<style scoped>
   .school{
    background-color: skyblue;
   }
</style>