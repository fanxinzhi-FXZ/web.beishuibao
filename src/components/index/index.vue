<template>
	<div id="index" class="index">
		<div class="header">
			<div class="header-swiper">
				<swiper v-if="slideData.length > 1" :options="swiperOptions">
						<swiper-slide v-for="(item,index) in slideData" :key="index">
								<img :src="item.bannerImg" alt="">
						</swiper-slide>
						<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
			</div>
		</div>

		<div class="banner">
			<div class="banner-swiper">
				<swiper v-if="slideData.length > 1" :options="swiperOptions_banner">
						<swiper-slide v-for="(item,index) in slideData" :key="index">
								<img :src="item.bannerImg" alt="">
						</swiper-slide>
						<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
			</div>
		</div>

		<!-- 产品介绍 -->
		<div class="nav-product">
			<span class="title">
				<var class="left">产品介绍</var>
				<var class="right" bindtap="goDetail">详情了解</var>
			</span>
			<div class="nav-product-swiper">
				<swiper v-if="productData.length > 1" :options="swiperOptions_product">
					<swiper-slide v-for="(item,index) in productData" :key="index">
						<div class="seed">
							<span class="head">
								<img class="icon" :src='item.icon'></img>
								<span class="name">{{item.name}}</span>
							</span>
							<span class="sige">
								<span class="sigeleft">保障项目</span>
								<span class="sigeright">保障金额</span>
							</span>
							<span class="son"  v-for="(items,index1) in item.values" :key="index1">
								<span class="sonright">{{items.value}}</span>
								<span class="sonleft">{{items.title}}</span>
							</span>
						</div>
					</swiper-slide>
				</swiper>
				<div class="swiper-pagination" slot="pagination"></div>
			</div>
		</div>
 		<div class="common">
		    <span class="title">常见问题</span>
		    <div class="content">
		      	<span class="item">
		        	<span class="subtitle"><var class="num">Q1:</var>什么情况下会向海关缴税？</span>
		        	<span class="text">进境居民旅客携带超出<var class="store">5000</var>元人民币的个人自用进境物品，经海关审核确属自用的；进境非居民旅客携带拟留在中国境内的个人自用进境物品，超出人民币<var class="store">2000</var>元的，海关仅对超出部分的个人自用进境物品征税，对不可分割的单件物品，全额征税。具体信息参考海关总署下发的文件规定。</span>
		      	</span>
		      	<span class="item">
		        	<span class="subtitle"><var class="num">Q2:</var>所有在境外购买的东西都可以赔付吗？</span>
		        	<span class="text">只接受归国行李中购买的商品，直邮、邮寄等方式的商品不在理赔范围内。如汽车、大型家具、大型乐器、直邮商品等不在理赔范围内。具体理赔范围请参照<var class="store" @click='goFailUrl' data-url="https://www.beishuibao.com/media/pdf/classify.pdf">《被税宝理赔范围表》</var>。</span>
		      	</span>
		      	<span class="item">
		        	<span class="subtitle"><var class="num">Q3:</var>入境时，海关是如何核算商品金额以及税额的？</span>
		        	<span class="text">请参考中华人民共和国海关总署文件<var class="store" @click='goFailUrl' data-url="https://www.beishuibao.com/media/pdf/classify.pdf">《中华人民共和国进境物品归类表》</var>、<var class="store" @click='goFailUrl' data-url="https://www.beishuibao.com/media/pdf/price_list.pdf">《完税价格表》</var></span>
		      	</span>
		      	<span class="item">
		        	<span class="subtitle"><var class="num">Q4:</var>一份合约订单可以对应多张被缴税单吗？</span>
	        		<span class="text">不能，一张合约只能对应购买本人的一张行邮税单。</span>
		      	</span>
		      	<span class="item">
		        	<span class="subtitle"><var class="num">Q5:</var>理赔款一般多长时间能到账？</span>
		        	<span class="text">收集齐材料，在<var class="store">1-3</var>个工作日即可到账，最快1天之内。</span>
		      	</span>
		    </div>
		</div>
	</div>
</template>

<script>
	import Index from '@/components/index/index.js'
	import '@/components/index/index.css'

	export default Index;
</script>
