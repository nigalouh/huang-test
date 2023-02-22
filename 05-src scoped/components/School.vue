<template>
    <div class="test">
      <h2 >学生名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
    </div>
  </template>
  
  <script>
    
    export default{
      
      name:'School',
      data(){
        return {
           name:'尚硅谷atguigu',
           address:'北京'
            
        }
      },
      
    }
  </script>
 <style>
    .test{
      background-color: skyblue ;
    }
  </style>