<template>
    <div>
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <h2>学生年龄：{{age}}</h2>
    </div>
  </template>
  
  <script>
    export default{
      name:'Student',
      data() {
        return {
            name:'张三',
            sex:'男',
            age:'18'
        }
      },
      
      //简单的声明方式
      //props:['name','sex','age']  
      
      // props:{
      //   name:{
      //     type:String,
      //     required:true
      //   },
      //   age:{
      //     type:Number,
      //     default:99
      //   },
      //   sex:{
      //     type:String,
      //     required:true
      //   }
        
      // }
    }
  </script>
  
  <style>
  .school{
    background-color: aqua;
  }
  </style>