'use strict';

import Utils from '@/utils/utils.js'
import Toast from '@/utils/toast.js'

var _default = (function() {
    
    return {
        name: 'confirm',
        mounted: function() {
      		var order = sessionStorage.getItem('order');
      		var userInfo = sessionStorage.getItem('userInfo');
      		this.orderItems = JSON.parse(order);
      		this.optionsData = JSON.parse(userInfo);
      		console.log(this.orderItems);
      		console.log(this.optionsData);
        },
        data: function() {

            return {
              	orderItems: {},
			    optionsData: {}
            };
        },
        methods: {
        	goPayment: function(){
        		var vm = this;
        		Utils.Axios.deferPost('/bank/wei/order/convert_goods', {
        		 	'total_price': vm.optionsData.total_price, // 总价
		            'flight_number': vm.optionsData.flight_number,
		            'arrive_address': vm.optionsData.arrive_address,
		            'arrive_time': vm.optionsData.arrive_time,
		            'orders': JSON.stringify(vm.orderItems),
		            'card_id': vm.optionsData.card_id // 卡号ID
        		}, function(data){

        		 	if(data.errcode == 0){
        		 		vm.$router.push('/return')
        		 	}else {
        		 		Toast.show(data.errdesc, 3000)
        		 	}
        		});
        	}
        },
        components: {

        }
    }
})();

export default _default;