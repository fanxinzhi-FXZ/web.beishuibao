import Vue from 'vue'
import Router from 'vue-router'
import Exchange from '@/components/exchange/exchange.vue'

Vue.use(Router)

export default new Router({
	hashbang: true,
	history: true,
	routes: [
		{ path: "/", redirect: "/exchange" },
	  { path: '/exchange', name: 'Exchange', component: Exchange },
	]
})
