<template>
	<div id="confirm" class="infoCheck">
 		<!-- 行程信息 -->
		<div class="content">
		    <span class="title">行程信息</span>
		    <span class="item">
		      	<var class="subtitle">回国航班号</var>
		      	<span class="son">{{optionsData.flight_number}}</span>
		    </span>
		    <span class="item">
		      	<var class="subtitle">国内到达机场</var>
		      	<span class="son">{{optionsData.arrive_address}}</span>
		    </span>
		    <span class="item">
		      	<var class="subtitle">回国到达日期</var>
		      	<span class="son">{{optionsData.arrive_time}}</span>
		    </span>
		</div>
		
		<!-- 旅客信息 -->
		<div class="content">
		    <span class="title">旅客信息</span>
		    <div class="list">
		      	<span class="item">
		        	<var class="subtitle">购买计划</var>
		        	<span class="son">{{orderItems.product_id==1 ? '黄金计划' : (orderItems.product_id==2 ? '钻石计划' : '大富翁计划') }}</span>
		      	</span>
		      	<span class="item">
		        	<var class="subtitle">旅客姓名</var>
		       		<span class="son">{{orderItems.ic_name}}</span>
		      	</span>
		      	<span class="item">
		        	<var class="subtitle">证件号码</var>
		        	<span class="son">{{orderItems.ic_card}}</span>
		      	</span>
		      	<span class="item">
		        	<var class="subtitle">手机号码</var>
		        	<span class="son">{{orderItems.mobile}}</span>
		      	</span>
		      	<span class="item">
		        	<var class="subtitle">邮箱地址</var>
		        	<span class="son">{{orderItems.email}}</span>
		      	</span>
		    </div>
		</div>
		
		 <!--代理人手机号--> 
		<!--<div class="content">
		    <span class="title">代理人手机号码</span>
		    <span class="item">
		      	<span class="son">{{agentPhone}}</span>
		    </span>
		</div>-->
		
		<!-- 底部按钮及金额 -->
		<div class="bottom">
		    <span class="money">￥{{optionsData.price}}</span>
		    <var class="text">（1人1计划）</var>
		    <span class="button" @click="goPayment">提交</span>
		</div>
	</div>
</template>

<script>
	import Confirm from '@/components/confirm/confirm.js'
	import '@/components/confirm/confirm.css'

	export default Confirm;
</script>