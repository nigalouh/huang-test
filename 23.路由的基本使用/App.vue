<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
      </div>
      <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
          <div class="list-group">
           <!-- 原始html中我们使用a标签实现页面的跳转  --> 

            <!-- <a class="list-group-item active" href="./about.html">About</a>
            <a class="list-group-item" href="./home.html">Home</a> -->

            <router-link class="list-group-item" to="./about">About</router-link> 
           <router-link class="list-group-item" to="./home" >home</router-link>>

          </div>
        </div>
      </div class="col-xs-6">
      <div class="panel">
        <div class="panel-body">
          
          <router-view></router-view>
          
        </div>
      </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
    import About from './components/About'
    import Home from './components/Home'
      export default{
        name:'App',
        components:{
          About,
          Home
        }
      }   
  
            
  </script>
  
  
  <style>
      
  </style>

