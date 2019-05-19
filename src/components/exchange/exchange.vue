<template>
	<div id="exchang">
 		<div class="title">卡劵信息填写</div>
 		<div class="item">
 			<span class="left">序列号</span>
 			<input class="text" type="text" placeholder="请填写序列号" v-model="number" />
 		</div>
 		<div class="item">
 			<span class="left">卡密</span>
 			<input class="text" type="text" placeholder="请填写密码" v-model="password" />
 		</div>
 		<div class="bottom" @click="submit()">确认兑换</div>
	</div>
</template>

<script>
	import Exchang from '@/components/exchange/exchange.js'
	import '@/components/exchange/exchange.css'

	export default Exchang;
</script>