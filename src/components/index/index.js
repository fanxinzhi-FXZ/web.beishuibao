import { swiper, swiperSlide } from "vue-awesome-swiper";
require("swiper/dist/css/swiper.css");
'use strict';

var _default = (function() {

    return {
        name: 'index',
        mounted: function() {

        },
        data: function() {

            return {
              slideData:[
                 {
                   "bannerImg": "https://www.beishuibao.com/web_pic/program/banner3.jpg",
                 },
                 {
                   "bannerImg": "https://www.beishuibao.com/web_pic/program/banner2.png",
                 }
              ],
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
                loopedSlides :1,
                observer: true,
                observeParents: true
              },
              swiperOptions_banner:{
                mousewheelControl: false,// 禁止鼠标滚轮切换
                autoplay: {
                 delay:2000,
                 stopOnLastSlide: false, // 切换到最后一个时不停止
                 disableOnInteraction: false, //用户操作swiper之后 不停止autoplay
                },
                watchSlidesProgress:true,
                pagination: {
                 el: '.swiper-pagination',
                },
                observer: true,
                observeParents: true,//
                 effect : 'coverflow',
                 centeredSlides: true,
                 spaceBetween: '6%',
                 slidesPerView: 'auto',
                 loop: true,
                 loopedSlides:2,
                 coverflowEffect: {
                     rotate: 0,
                     stretch: 0,
                     depth: 300,
                     modifier: 1,
                     slideShadows: false,
                 }
              },
              swiperOptions_product:{
                mousewheelControl: false,// 禁止鼠标滚轮切换
                pagination: {
                 el: '.swiper-pagination',
                },
                observer: true,
                observeParents: true
              },
              productData:[
                  {
                  id: "1",
                  name: "黄金计划",
                  icon: "http://www.beishuibao.com/bank/media/product//list1_icon_gold.png",
                  price: "50",
                  reduced_price: "21",
                  pc_icon: "http://www.beishuibao.com/bank/media/product//11871552231034.jpg",
                  values: [
                  {
                  title: "理赔额度",
                  key_id: "1",
                  value: "1000"
                  },
                  {
                  title: "13种必征税电子产品赔付比？",
                  key_id: "2",
                  value: "40%"
                  },
                  {
                  title: "高档化妆品，即≥10元/g或ml,赔付比",
                  key_id: "3",
                  value: "30%"
                  },
                  {
                  title: "完税价格高于10000人名币高档手表、珠宝玉石（非砖石）",
                  key_id: "4",
                  value: "不予赔付"
                  },
                  {
                  title: "完税价格高于10000人名币首饰及箱包（含砖石）",
                  key_id: "5",
                  value: "不予赔付"
                  },
                  {
                  title: "其它物品完税价格高于10000人名币",
                  key_id: "6",
                  value: "不予赔付"
                  },
                  {
                  title: "其余普通物品赔付比",
                  key_id: "7",
                  value: "100%"
                  },
                  {
                  title: "产品费用",
                  key_id: "8",
                  value: "50"
                  }
                  ]
                  },
                  {
                  id: "2",
                  name: "钻石计划",
                  icon: "http://www.beishuibao.com/bank/media/product//list1_icon_diamond.png",
                  price: "160",
                  reduced_price: "0",
                  pc_icon: "http://www.beishuibao.com/bank/media/product//11891552231040.jpg",
                  values: [
                  {
                  title: "理赔额度",
                  key_id: "1",
                  value: "3000"
                  },
                  {
                  title: "13种必征税电子产品赔付比？",
                  key_id: "2",
                  value: "60%"
                  },
                  {
                  title: "高档化妆品，即≥10元/g或ml,赔付比",
                  key_id: "3",
                  value: "50%"
                  },
                  {
                  title: "完税价格高于10000人名币高档手表、珠宝玉石（非砖石）",
                  key_id: "4",
                  value: "不予赔付"
                  },
                  {
                  title: "完税价格高于10000人名币首饰及箱包（含砖石）",
                  key_id: "5",
                  value: "50%"
                  },
                  {
                  title: "其它物品完税价格高于10000人名币",
                  key_id: "6",
                  value: "50%"
                  },
                  {
                  title: "其余普通物品赔付比",
                  key_id: "7",
                  value: "100%"
                  },
                  {
                  title: "产品费用",
                  key_id: "8",
                  value: "160"
                  }
                  ]
                  },
                  {
                  id: "3",
                  name: "大富翁计划",
                  icon: "http://www.beishuibao.com/bank/media/product//list1_icon_crown.png",
                  price: "350",
                  reduced_price: "0",
                  pc_icon: "http://www.beishuibao.com/bank/media/product//11881552231038.jpg",
                  values: [
                  {
                  title: "理赔额度",
                  key_id: "1",
                  value: "5000"
                  },
                  {
                  title: "13种必征税电子产品赔付比？",
                  key_id: "2",
                  value: "80%"
                  },
                  {
                  title: "高档化妆品，即≥10元/g或ml,赔付比",
                  key_id: "3",
                  value: "60%"
                  },
                  {
                  title: "完税价格高于10000人名币高档手表、珠宝玉石（非砖石）",
                  key_id: "4",
                  value: "50%"
                  },
                  {
                  title: "完税价格高于10000人名币首饰及箱包（含砖石）",
                  key_id: "5",
                  value: "60%"
                  },
                  {
                  title: "其它物品完税价格高于10000人名币",
                  key_id: "6",
                  value: "60%"
                  },
                  {
                  title: "其余普通物品赔付比",
                  key_id: "7",
                  value: "100%"
                  },
                  {
                  title: "产品费用",
                  key_id: "8",
                  value: "350"
                  }
                  ]
                  }
                  ]
            };
        },
        methods: {
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
