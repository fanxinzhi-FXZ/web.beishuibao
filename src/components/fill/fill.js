'use strict';

import Utils from '@/utils/utils.js'
import Toast from '@/utils/toast.js'

var _default = (function() {
    
    return {
        name: 'fill',
        mounted: function() {
      		var data = this.$route.query.data;
      		console.log(JSON.parse(data))
      		var query = JSON.parse(data)
      		this.cardId = query.card_id;
      		this.buyBlanId = query.product_infor.id;
      		this.totalPrice = (query.product_infor.price - query.product_infor.reduced_price) || 0;
//    		this.ic_name = query.product_infor.name;
//    		this.ic_card = query.product_infor.id
        },
        data: function() {

            return {
                flightNumber: '',  // 航班号
			    airportName: '',   // 到达机场
			    arrivalDate: '',   // 回国日期
			    totalPrice: 0,     // 商品总价
			    
			    startDate: '',
			    endDate: '',
			
			    productItems: [],
			
			    contractExplainStatus: false,
			    buyNoticeItem: [{
			        "title": "(一)甲方的权利及义务",
			        "list" : [
			          "1、所有的产品必须在回程航班（包括境外转机）起飞前30min购买。",
			          "2、每一份产品合约只对应旅客的一张行邮税单；若购买多份产品，则以最高额度产品合约对应其一张税单。",
			          "3、所有产品合约禁止转让，出售等经营行为。",
			          "4、所有产品合约一经售出，不予退款、取消！",
			          "5、本次合约申请理赔有效期为到达国内机场后的72小时，超过72小时期限未通过电话或邮件申请理赔登记的，则视为合约终止。若航班延误，请提供航班延误说明。",
			          "6、每份产品合约额度为此产品理赔最高值，未满额度的缴税金额则按照海关开具的税款缴纳凭证上的实际金额进行理赔，超过理赔额度则以本次购买产品的理赔额度理赔。",
			          "7、被税宝产品所有经营解释权归北京津掌门科技有限公司所有。",
			        ]
			      }
			    ],
			    
			    ic_name: '',
			    ic_card: '',
			    mobile: '',
			    email: '',
			    
			    cardId: '',
			
			    buyBlanId: 1, //计划ID
			    agentPhone: '', // 代理人手机号
			
			    travellerItems: [],
			    indexNumber: 0,
			    statementChecks: false
            };
        },
        methods: {
        	goFailUrl: function(){
        		
        	},
        	goInfoCkeck: function(){
        		var vm = this;
			    // 验证行程信息是否完善
			    if (vm.statementCheck){
			      	if (vm.flightNumber && vm.airportName && vm.arrivalDate){
				        // 验证姓名是否是中英文
				        if ((/^[\u4E00-\u9FA5A-Za-z]+$/.test(vm.ic_name))) {
		            		// 验证手机号
			           		 if ((/^1[34578]\d{9}$/.test(vm.mobile))) {
			              		// 验证邮箱
			              		if ((/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(vm.email))) {
			                		// 验证身份证号
			                		if (vm.ic_card) {
					                  	var order = JSON.stringify({
						        			'product_id': vm.buyBlanId,
							                'mobile': vm.mobile,
							                'ic_name' : vm.ic_name,
							                'ic_card': vm.ic_card,
							                'email': vm.email,
							                'price': vm.totalPrice
						        		})
										Utils.Axios.deferPost('/bank/wei/order/convert_goods', {
						        		 	'total_price': vm.totalPrice, // 总价
								            'flight_number': vm.flightNumber,
								            'arrive_address': vm.airportName,
								            'arrive_time': vm.arrivalDate,
								            'orders': order,
								            'card_id': vm.cardId // 卡号ID
						        		}, function(data){
						        		 	console.log(data)
						        		 	if(data.errcode == 0){
						        		 		vm.$router.push('/return')
						        		 	}else {
						        		 		Toast.show(data.errdesc, 3000)
						        		 	}
						        		});
			                		} else {
			                  			Toast.show("请输入正确的证件号码",2000);
			                		}
			              		} else {
			                		Toast.show("请输入正确的邮箱",2000);
			              		}
			            	} else {
			              		Toast.show("请输入正确的手机号", 2000);

			            	}
			         	} else {
			            	Toast.show("请输入您的真实姓名",2000);

			          	}

			      	}else {
			        	Toast.show("请完善行程信息", 2000)
			      	}
			    }else {
			      	Toast.show("请阅读并同意合约声明", 2000)
			    };
        	},
        	
        	statementCheck: function(){
        		this.statementChecks = !this.statementChecks
        	}
        },
        components: {

        }
    }
})();

export default _default;