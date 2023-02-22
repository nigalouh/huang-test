<!-- 具名插槽一旦声明就全部都要使用 -->
<template>
    <div class="container">
      <Category title="美食" :listData="food">
        <img slot="center" src="./assets/logo.png" alt="">
        <a slot="footer" href="http://atguigu.com"></a>
      </Category>

      <Category title="游戏">
        <ul slot="center">
          <li v-for="(g,inddex) in games":key="index">{{g}}</li> 
        </ul>
       
          <a slot="footer" href="http://atguigu.com">单机游戏</a>
          <a slot="footer" href="http://atguigu.com">网络游戏</a>
        
       
      </Category>
      
    <Category title="电影" >
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <a slot="footer" href="http://atguigu.com">经典</a>&nbsp;
      <a slot="footer" href="http://atguigu.com">热门</a>&nbsp;
      <a slot="footer" href="http://atguigu.com">推荐</a>&nbsp;
      
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
          food:['火锅'],
          games:['红色警戒'],
          films:['<教父>']
        }
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
  