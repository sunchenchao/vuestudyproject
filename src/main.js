import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import Toast from '@/components/common/toast' //导入toast的index.js

import FastClick from "fastclick";
import VueLazyLoad from "vue-lazyload";

Vue.config.productionTip = false
Vue.use(Toast);
Vue.use(VueLazyLoad)

//解决移动端300毫秒的延迟
FastClick.attach(document.body)
new Vue({
  router,
  store,
  render: function (h) { return h(App) },
}).$mount('#app')
