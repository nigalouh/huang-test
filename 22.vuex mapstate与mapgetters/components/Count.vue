<template>
    <div>
       <h1>当前求和为：{{sum}}</h1>
       <h3>当前求和放大10倍为:{{bigSum}}</h3>
       <h3>我在{{school}},学习{{subject}}</h3>
       <h3 style="color: red">下方组件的总人数是：{{$store.state.personList.length}}</h3>
       <select v-model="n">
        <option :value="1">1</option>
        <option :value="2">2</option>
        <option :value="3">3</option>
       </select>
       <button @click="increment">+</button>
       <button @click="decrement">-</button>
       <button @click="incrementOdd">当前求和为奇数再加</button>
       <button @click="incrementWait">等一等再加</button>
    </div>
   
</template>

<script>
    import {mapState,mapGetters}from 'vuex'
   export default{
    name:'Count',
    data() {
        return {
            n:1,//用户选择的数据
            
        }
    },
    // //靠程序员自己亲自去写计算属性
    computed:{
    //     // sum(){
    //     //     return this.$store.state.sum
    //     // },
    //     // school(){
    //     //     return this.$store.state.school
    //     // },
    //     // subject(){
    //     //     return this.$store.state.subject
    //     // },
    //     // bigSum(){
    //     //     return this.$store.getters.bigSum
    //     // }

    //借助mapState计算属性，从state中读取属性。（对象写法）
    //  ...mapState({sum:'sum',school:'school',subject:'subject'}),

    //借助mapState生成计算属性，从state中读取数据。（数组写法）
    ...mapState(['sum','school','subject']),
  
    // bigSum(){
    //     return this.$store.getters.bigSum
    // }

    //借助mapgetters生成计算属性，从getters中读取数据。（对象写法）
    // ...mapGetters({bigSum:'bigSum'}),

    //借助mapgetters生成计算属性，从getters中读取数据。 （数组写法）
    ...mapGetters(['bigSum'])
    },
   
    methods:{
        increment(){
           this.$store.commit('JIA',this.n)
        },
        decrement(){
           this.$store.commit('JIAN',this.n)
        },
        incrementOdd(){
           if(this.$store.state.sum%2){
            this.$store.dispatch('jiaOdd',this.n)
           }
        },
        incrementWait(){
           
               this.$store.dispatch('jiaWait',this.n) 
    
          
        },
    },
    mounted() {
        const x=mapState({sum:'sum',school:'school',subject:'subject'})
    },    
}

</script>

<style>
   button{
    margin-left:5px;
   }
</style>