<template>
	<div id="return">
 		<div class="header">
 		 	<img src="http://www.beishuibao.com/web_pic/program/img_asc.jpg"/>
 		</div>
 		<span class="title">卡券已兑换成功</span>
 		<span class="title">合约已成功发送至您的邮箱</span>
 		<span class="subtitle">{{timeIndex}}秒后将跳转商品详情</span>
	</div>
</template>

<script>
	import Return from '@/components/return/return.js'
	import '@/components/return/return.css'

	export default Return;
</script>