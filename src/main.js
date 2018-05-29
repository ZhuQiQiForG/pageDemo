// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import functionPage from 'components/functionPage/functionPage';
import showPage from 'components/showPage/showPage';
import index from 'components/index/index';
import axios from 'axios';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.prototype.$http = axios;

const routes = [
	{
		path: '/',
		redirect: '/index'
	},
	{
		path: '/index',
		component: index
	},
	{
		path: '/showPage',
		component: showPage
	},
	{
		path: '/functionPage',
		component: functionPage
	}
];
const router = new VueRouter({
	linkActiveClass: 'active',
	routes
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
