<template>
    <div class="row">
      <!-- 展示用户列表 -->
        <div v-show="users.length" class="card" v-for="user in users":key="user.login">
          <a href="user.html.url" target="_blank">
            <img :src="user.avatar_url" style="width:100px"/>
          </a>
          <p class="card-text">{{user.login}}}</p>
        </div> 
        
    </div>
  </template>

<script>
export default{
    name:'List',
    data() {
      return {
        errMsg:'',
        users:[]
        
      }
    },
    mounted(){
      this.$bus.$on('getUsers',(users)=>{
          
         
        console.log('我是List组件,收到数据：',users)
        this.users=users
      })
    }
        }
</script>

<style >
    .album{
      min-height: 50rem;/*Can be removed; just added for demo purposes*/
      padding-top:3rem;
      padding-bottom:3rem;
      background-color: #f7f7f7;
    }
    .card{
      float: left;
      width:33.333%;
      padding:.75rem;
      margin-bottom: 2rem;
      border:1px solid #efefef;
      text-align:center;
    }
    .card>img{
      margin-bottom:.75rem;
      border-radius: 100px;
    }
    .card-text{
      font-size: 85%;
    }
    
  
  </style>


