import Vue from 'vue';
import App from './App.vue';
import { sayHello } from '@/data';
import { a, b } from '@/variables';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

sayHello(a, b);
