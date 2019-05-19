<template>
	<div id="exchang">
 		<div class="title">卡劵信息填写</div>
 		<div class="item">
 			<span class="left">序列号</span>
 			<input class="text" type="text" placeholder="请输入您的卡券序列号" v-model="numberCode" />
 		</div>
 		<div class="item">
 			<span class="left">卡密</span>
 			<input class="text" type="text" placeholder="请输入您的卡券密码号" v-model="passwordCode" />
 		</div>
 		<div class="verification">
 			<span class="left">验证码</span>
 			<canvas width="100" height="40" class="canvas" id="canvas" @click="replace"></canvas>
 			<input class="text" type="text" placeholder="请输入验证码" v-model="verificationCode" />
 			
 		</div>
 		<div class="bottom" @click="submit()">确认兑换</div>
	</div>
</template>

<script>
	import Exchang from '@/components/exchange/exchange.js'
	import '@/components/exchange/exchange.css'

	export default Exchang;
</script>