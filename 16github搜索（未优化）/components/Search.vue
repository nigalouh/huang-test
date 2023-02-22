<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" v-model="KeyWord"/>&nbsp;
          <button @click="searchUsers">Search</button>
        </div>
      </section>
</template>

<script>
  import axios from 'axios'
        export default{
            name:'Search',
            data() {
              return {
                KeyWord:''
              }
            },
            methods:{
              searchUsers(){
                
               
                axios.get(`https://api.github.com/search/users?start=0&end=50&search_text=&sort_item=register_time&sort_type=-1`).then(
                  response=>{
                    console.log('请求成功')
                    //请求成功后更新List的数据
                    this.$bus.$emit('getUsers',response.data.items)
                    
                  },
                  error=>{
                    //请求失败后更新List的数据
                    this.$bus.$emit('请求失败',error.message)
                  }

                )
              }
            }
        }
</script>

<style>

</style>