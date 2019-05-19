'use strict';
import Toast from "@/utils/toast.js";

var _default = (function() {
    
    return {
        name: 'fill',
        mounted: function() {
      		 
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
			    statementCheck: false,
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
			
			    buyBlanId: 1, //计划ID
			    agentPhone: '', // 代理人手机号
			
			    travellerItems: [],
			    indexNumber: 0
            };
        },
        methods: {
        	submit: function(){
        		
        	},
        	goFailUrl: function(){
        		
        	},
        	goInfoCkeck: function(){
//      		if()
        		this.$router.push('/return')
        	}
        },
        components: {

        }
    }
})();

export default _default;