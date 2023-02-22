<template>
  <div class="container">
     <Category title="游戏">
      <template scope="atguigu">
       
        <ul>
          <li v-for="(g,index) in atguigu.games":key="index">{{g}}</li>
        </ul> 
      </template>  
     
       </Category>
  </div>
  </template>
  
  <script>
    import Category from './components/Category'
    export default{
      name:'App',
      components:{
          Category
      },
     
    }
  </script>
  
  <style>
    .container,.foot{
      display: flex;
      justify-content: space-around;
    }
    video{
      width: 100%;
    }
    img{
        width:100%
    }
    </style>
  