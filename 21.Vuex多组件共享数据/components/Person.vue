<template>
    <div>
        <h1>人员列表</h1>
        <h2 style="color: red;">Count组件求和为{{$store.state.sum}}</h2>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加</button>
        <ul>
            <li v-for="p in $store.state.personList":key="p.id">{{p.name}}</li>
           
        </ul>
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    export default{
        name:'Person',
        data() {
            return {
                name:''
            }
        },
        methods: {
            add(){
                const personObj={id:nanoid(),name:this.name}
              this.$store.commit('ADD_PRESON',personObj)
            }
        },
      
    }
   
</script>