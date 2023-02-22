<template>
    <div class="container">
      <Category title="美食" >
        <img  src="./assets/logo.png" alt="">
      </Category> 

      <Category title="游戏">
        <ul>
          <li v-for="(g,index) in games":key="index">{{g}}</li>
        </ul>
      </Category>
     
    <Category title="电影" >
   
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      
     </Category>
    </div>
 
  </template>
  
  <script>
   import Category from './components/Category.vue'
     export default{
      name:'App',
      components:{
       Category
      },
      data() {
        return {
          
        }
      },
    }
  
  </script>
  
  <style>
    .container{
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
  