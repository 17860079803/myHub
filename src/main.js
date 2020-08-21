// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//动画:1.安装 2.引入
import "animate.css"

//配置jquery
import $ from "jquery"
Vue.prototype.$=$

//单一事件管理
Vue.prototype.Event=new Vue()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
