<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
      <span>已完成{{downTotal}}</span> / 全部{{total}}
    </span>
    <button @click="btnDelete" class="btn btn-danger">清除已完成任务</button>
  </div>    
</template>

<script>
export default{
    nmae:"MyFooter",
    props:["todos","clearAllTodo","checkTodoAll"],
    computed:{
      downTotal:{
        get(){
          //return this.todos.filter(m=>m.down==true).length;
          return this.todos.reduce((pre,todo)=>pre+(todo.down?1:0),0);
        }
      },
      total(){
        return this.todos.length;
      },
      isAll:{
        get(){
            return this.downTotal==this.total&&this.total>0;
        },
        set(value){
          this.checkTodoAll(value);
        }
      }
    },
    methods:{
      btnDelete(){
        this.clearAllTodo();
      }
    }
}

</script>

<style scoped>
/*footer*/
.todo-footer {
height: 40px;
line-height: 40px;
padding-left: 6px;
margin-top: 5px;
}

.todo-footer label {
display: inline-block;
margin-right: 20px;
cursor: pointer;
}

.todo-footer label input {
position: relative;
top: -1px;
vertical-align: middle;
margin-right: 5px;
}

.todo-footer button {
float: right;
margin-top: 5px;
}

</style>