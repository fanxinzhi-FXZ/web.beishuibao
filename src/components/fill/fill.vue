<template>
	<div id="fill" class="infoFill">

		  <!-- 行程信息 -->
		<div class="trip">
		    <span class="title">行程信息</span>
		    <span class="item">
		      	<var class="subtitle">回国航班号</var>
		      	<span class="son"><input class="input" v-model="flightNumber" type="span" placeholder="请输入航班号" ></input></span>
		    </span>
		    <span class="item">
		      	<var class="subtitle">国内到达机场</var>
		      	<span class="son"><input class="input" type="span" v-model='airportName' placeholder="请输入机场名称  如：上海浦东机场" ></input></span>
		    </span>
		    <span class="item">
		      	<var class="subtitle">回国到达日期</var>
		      	<span class="son"><input class="input datebg"  v-model='arrivalDate' type="span" placeholder="请输入到达日期  如：2019-05-20"></input></span>
		      	<!--<picker mode="date" v-model="arrivalDate" start="{{startDate}}" end="{{endDate}}">
		        	
		     	</picker>-->
		    </span>
		</div>
		
		  <!-- 旅客信息 -->
		<div class="traveller">
		    <span class="header">
		      	<span class="title">旅客信息</span>
		      	<!--<em class="add" @click="addInfo" v-if="index == 0">添加旅客</em>-->
		      	<!--<em class="delete" @click="deleteInfo(index)" v-if="index != 0"></em>-->
		    </span>
		    <span class="item">
		      	<var class="subtitle">添加旅客姓名</var>
		      	<span class="son"><input class="input" type="span" v-model="ic_name" placeholder="请输入您的真实姓名" ></input></span>
		    </span>
		    <span class="item">
		      	<var class="subtitle">证件号码</var>
		      	<span class="son"><input class="input" type="span" v-model="ic_card" placeholder="请输入护照号码"></input></span>
		    </span>
		    <span class="item">
		      	<var class="subtitle">手机号码</var>
		      	<span class="son"><input class="input" type="number" v-model="mobile" maxlength="11" placeholder="请输入手机号码" ></input></span>
		    </span>
		    <span class="item">
		      	<var class="subtitle">邮箱地址</var>
		      	<span class="son"><input class="input" type="span" v-model="email" placeholder="请输入正确邮箱地址"></input></span>
		    </span>
		</div>
		
		<div class="money-explain">
		    <div class="ls">1、若计算时超过理赔额度，则以此最高理赔额度进行理赔。例如：张先生选择了“大富豪计划”，他在旅游时购买了一块价值2万元的手表，一部8000的手机，那么可以得到的理赔计算为：20000*50%*50%+8000*15%*80%=5960元，则可拿到的金额为5000元。</div>
		    <div class="ls">2、所有产品必须最晚在回程航班（包括境外转机）起飞前30min购买完成。</div>
		</div>
		
		  <!-- 电子合约 -->
		<div class="contract">
		    <span class="title">电子合约</span>
		    <span class="con">《被税宝电子合约》</span>
		    <span class="span">支持环保，只需电子合约（电子合约具有相同法律效力，理赔时只需提供单号和身份证件)。支付成功后，您可直接下载电子保单或通过邮箱查询。</span>
		</div>
		
		  <!-- 合约声明 -->
		<div class="statement">
		    <span class="title">合约声明</span>
		    <span class="list">
		      <!-- <span class="seed">查看投保声明详情</span>
		      <span class="seed">免责说明</span>
		      <span class="seed">退单说明</span> -->
		      <span class="seed" @click="goFailUrl">合约声明</span>
		    </span>
		    <span class="illustrate"> 以上未尽事宜以您收到的合约及条款为准 </span>
		    <span :class="statementChecks ? 'check uncheck' : 'uncheck'" @click="statementCheck">我已认真阅读以上内容并同意</span>
		  </div>
		  <!-- 合约说明 -->
		  <div class="contract-explain" v-if="contractExplainStatus">
		    <div class="box">
		      <span class="sontitle">合约说明</span>
		      <div class="content">
		        <span class="name">一、甲乙双方的权利及义务</span>
		        <div class="items" v-for="item in buyNoticeItem">
		          <span class="subtitle">{{item.title}}</span>
		          <span class="span" v-for="seed in item.list">{{seed}}</span>
		        </div>
		      </div>
		      <span class="hide" @click="contractExplainHide"></span>
		    </div>
		  </div>
		
		  <!-- 代理人手机号码 -->
		<div class="agent">
		    <span class="title">代理人手机号码</span>
		    <span class="agentphone"><input class="input" type="number" maxlength="11" placeholder="请输入代理人手机号码" v-model="agentPhone" ></input></span>
		</div>
		
		  <!-- 底部按钮及金额 -->
		<div class="bottom"> 
		    <span class="money">￥{{totalPrice}}</span>
		    <!-- <var class="span">（1人1计划）</var> -->
		    <span class="button" @click="goInfoCkeck">下一步</span>
		</div>
		
	</div>
</template>

<script>
	import Fill from '@/components/fill/fill.js'
	import '@/components/fill/fill.css'

	export default Fill;
</script>