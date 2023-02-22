//引入Vue
import Vue from 'vue'

//引入App
import App from './App.vue'

//引入VueRouter
import VueRouter from 'vue-router'

//引入路由器
import router from './router'

//关闭Vue的生产提示
Vue.config.productionTip = false


//引入store
import store from './store'
//应用插件
Vue.use(VueRouter)
new Vue({
	el:'#app',
	render: h => h(App),
	store,
	router:router,
	beforeCreate() {
		Vue.prototype.$bus = this//安装全局事件总线
	}
})

