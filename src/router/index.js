import Vue from 'vue'
import Router from 'vue-router'
import Exchange from '@/components/exchange/exchange.vue'
import Fill from '@/components/fill/fill.vue'
import Index from '@/components/index/index.vue'
import Return from '@/components/return/return.vue'

Vue.use(Router)

export default new Router({
	hashbang: true,
	history: true,
	routes: [
		{ path: "/", redirect: "/exchange" },
	  	{ path: '/exchange', name: 'Exchange', component: Exchange },
	  	{ path: '/fill', name: 'Fill', component: Fill },
	  	{ path: '/index', name: 'Index', component: Index },
	  	{ path: '/return', name: 'Return', component: Return }
	]
})
