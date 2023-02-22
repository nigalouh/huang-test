<template>

  <transition name="todo" appear>
    <li>
        <label>
            <input type="checkbox" @change="handleCheck(todo.id)" v-bind:checked="todo.down" />
            <!-- 如下代码也能实现上面代码的功能，但是不推荐，因为违反了原则，修改了propos -->
            <!-- <input type="checkbox" v-model="todo.down" /> -->
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input v-show="todo.isEdit" 
            type="text" 
            :value="todo.title" 
            @blur="handleBlur(todo,$event)">
        </label>
        <button class="btn btn-danger" @click="handelDelete(todo.id)">删除</button>
        <button  class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
    </li>
  </transition>
</template>

<script>
  export default{
      name:"MyItem",
      //声明接收todo对象
      props:["todo","checkTodo","deleteTodo"],
      mounted(){
          //console.log(this);
      },
      methods:{        
          //勾选or取消勾选    
          handleCheck(id){
              this.checkTodo(id);
          },
          //删除
          handelDelete(id){
              if(confirm("要删除吗？"))
              this.deleteTodo(id);
          },
          //编辑
          handleEdit(todo){
            if(todo.hasOwnProperty('isEdit')){
                todo.isEdit=true
            }else{
                this.$set(todo,'isEdit',true)
            }
            
          },
          //失去焦点回调（真正执行修改逻辑）
          handleBlur(todo,e){
                todo.isEdit=false
                this.$bus.$emit('updateTodo',todo.id,e.target.value)
          }
      }

  }

</script>

<style scoped>
  /*item*/
  li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
  }

  li label {
  float: left;
  cursor: pointer;
  }

  li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
  }

  li button {
  float: right;
  display: none;
  margin-top: 3px;
  }

  li:before {
  content: initial;
  }

  li:last-child {
  border-bottom: none;
  }

  li:hover{
  background-color:#ddd
  }

  li:hover button{
  display: block;
  }

  .todo-enter-active{
        animation: atguigu 0.5s linear;
  }
  .todo-leave-active{
        animation: atguigu 0.5s linear reverse ;
  }
  
  @keyframes atguigu {
    from{
        transform: translateX(-100%);
    }
    to{
        transfrom: translateX(0px);
    }
  }


</style>