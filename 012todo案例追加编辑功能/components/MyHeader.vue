<template>
    <div class="todo-header">
        <!-- //使用v-model时一定要使用props的值 -->
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" v-on:keyup.enter="add"/>
    </div>
</template>

<script>

    import{nanoid} from "nanoid";

    export default{
        nmae:"MyHeader",
        data(){
            return{ title:"" }
        },
        //
        props:["addTodo"],
        methods:{
            add(event){

                if(!this.title.trim()) return  alert("不能输入为空"); 
                //方式一：通过event对象拿元素身上的值
                //console.log(event.target.value);

                //方式二：通过v-model拿。
                //console.log(this.title);

                const obj={id:nanoid(),title:this.title,down:false};
                //console.log(obj);

                //子组件里面的数据想要传给父组件需要前提父组件先定义一个函数方法并且将这个函数方法传给子组件，
                //然后子组件的数据代入为函数形参，这样父组件就可以有子组件的数据了。

                //调用父组件传过来的方法
                this.addTodo(obj);


                //清空输入框：
                this.title="";

            }
        }
    }

</script>

<style scoped>
    /*header*/
    .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
    }

    .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }


</style>