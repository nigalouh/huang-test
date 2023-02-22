<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo"/><!-- 父组件向子组件传递一个函数，然后子组件调用这个函数把需要的值用形参传递过去 -->
        <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
        <MyFooter :todos="todos" :checkTodoAll="checkTodoAll" :clearAllTodo="clearAllTodo"/>
      </div>
    </div>
  </div>
      
  </template>
  
  <script>
      //引入组件
      import MyHeader from "./components/MyHeader.vue";
      import MyList from "./components/MyList.vue";
      import MyFooter from "./components/MyFooter.vue"
  
  
      export default {
          name:"App",
          components:{
              MyHeader,
              MyList,
              MyFooter            
          },
          data(){
              return{
                    todos:JSON.parse(localStorage.getItem('todos'))||[]
  
              }
          },
          methods:{
            //该方法用来给子组件调用，用于添加一个Todo
            addTodo(todoObj){
              console.log("我是App组件，我收到了数据",todoObj);
              this.todos.unshift(todoObj);
            },
            //改变状态
            checkTodo(id){
              this.todos.forEach(function(item,index){
                 if(item.id===id){
                   item.down=!item.down;
  
                   return;
                 }
              });
            },
  
            //删除
            deleteTodo(id){
  
              this.todos=this.todos.filter(m=>m.id!=id);
              // this.todos.forEach((val,index)=>{
              //   if(val.id==id){
              //     this.todos.splice(index,1);
              //     return;
              //   }
              // });
            },
  
            //改变全部的状态
            checkTodoAll(state){
              this.todos.forEach(function(item,index){
                   item.down=state;
              });
            },
  
            //移除全部已完成
            clearAllTodo(){
            this.todos=this.todos.filter(m=>m.down!=true);
            }
  
          },
          watch:{
            todos:{
              deep:true,
              handler(value){
                localStorage.setItem('todos',JSON.stringify(value))
              }
            }
          }
        }
          
  </script>
  
  
  <style>
      /*base*/
      body {
      background: #fff;
      }
  
      .btn {
      display: inline-block;
      padding: 4px 12px;
      margin-bottom: 0;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      }
  
      .btn-danger {
      color: #fff;
      background-color: #da4f49;
      border: 1px solid #bd362f;
      }
  
      .btn-danger:hover {
      color: #fff;
      background-color: #bd362f;
      }
  
      .btn:focus {
      outline: none;
      }
  
      .todo-container {
      width: 600px;
      margin: 0 auto;
      }
      .todo-container .todo-wrap {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
      }
  
  
  </style>

