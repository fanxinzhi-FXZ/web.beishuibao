import { swiper, swiperSlide } from "vue-awesome-swiper";
require("swiper/dist/css/swiper.css");
import Utils from '@/utils/utils.js'
import Toast from '@/utils/toast.js'
'use strict';

var _default = (function() {
    return {
        name: 'index',
        mounted: function() {
          this.initBannerData();
        },
        data: function() {
            var that = this;
            return {
              slideData:[
                 {
                   "bannerImg": "https://www.beishuibao.com/web_pic/program/banner3.jpg",
                 },
                 {
                   "bannerImg": "https://www.beishuibao.com/web_pic/program/banner2.png",
                 },
                 {
                   "bannerImg": "https://www.beishuibao.com/web_pic/program/banner2.png",
                 }
              ],
              bannerData:[],
              swiperOptions:{
                loop: true,  // 循环
                speed:3000,  //切换速度
                mousewheelControl: false,// 禁止鼠标滚轮切换
                pagination: {
                 el: '.swiper-pagination',
                },
                autoplay: {
                 delay:2000,
                 stopOnLastSlide: false, // 切换到最后一个时不停止
                 disableOnInteraction: false, //用户操作swiper之后 不停止autoplay
                },
                watchSlidesProgress:true,
                // centeredSlides: true, //设定为true时，活动块会居中，而不是默认状态下的居左。
                // spaceBetween:10,
                // slidesPerView: 1.7,
                loopedSlides :2,
                observer: true,
                observeParents: true
              },
              swiperOptions_banner:{
                mousewheelControl: false,// 禁止鼠标滚轮切换
                autoplay: {
                 delay:5000,
                 stopOnLastSlide: false, // 切换到最后一个时不停止
                 disableOnInteraction: false, //用户操作swiper之后 不停止autoplay
                },
                watchSlidesProgress:true,
                pagination: {
                 el: '.swiper-pagination1',
                },
                observer: true,
                observeParents: true,//
                 effect : 'coverflow',
                 centeredSlides: true,
                 spaceBetween: '6%',
                 slidesPerView: 'auto',
                 loop: true,
                 loopedSlides:3,
                 coverflowEffect: {
                     rotate: 0,
                     stretch: 0,
                     depth: 300,
                     modifier: 1,
                     slideShadows: false,
                 },
                 on: {
                    slideChangeTransitionStart: function(){
                      that.bannerIndex = this.realIndex;
                    },
                  },
              },
              backgroundItems: [
              "linear-gradient(90deg, #ff971c 0%, #fdc429 50%, #ff971c 100%)",
              "linear-gradient(90deg,#4e82f5 0%,#4eb0f5 50%,#4e82f5 100%)",
              "linear-gradient(90deg,#ff6c1c 0%, #fa7063 50%,#ff6c1c 100%)"
              ],
              bannerIndex:0,
              swiperOptions_product:{
                mousewheelControl: false,// 禁止鼠标滚轮切换
                pagination: {
                 el: '.swiper-pagination2',
                },
                observer: true,
                observeParents: true
              },
              productData:[]
            };
        },
        methods: {
          initBannerData(){
            var _this = this;
            Utils.Axios.get('/bank/wei/product/getProduct_list', {}, function(data){
              console.log(data)
              if(data.errcode == 0){
                _this.bannerData = data.data;
                _this.productData = data.data;
              }else {
                Toast.show(data.errdesc, 3000)
              }
            });
          },
          goFailUrl(){

          }
        },
        computed: {
          swiper() {
           return this.$refs.mySwiper.swiper
          }
        },
        components: {
      	  swiper,
      	  swiperSlide
      	},

    }
})();

export default _default;
