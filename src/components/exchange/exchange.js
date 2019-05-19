'use strict';
import Utils from '@/utils/utils.js'
import Toast from '@/utils/toast.js'

var _default = (function() {
    
    return {
        name: 'exchange',
        mounted: function() {
      		 
        },
        data: function() {

            return {
                number: '',
                password: ''
            };
        },
        methods: {
        	submit: function(){
        		var vm = this;
        		if(this.number && this.password){
        			Utils.Axios.deferPost('/api/bank/wei/order/authentication_card', {
	        		 	'card_number' : this.number,  //
	            		'card_pass' : this.password, //
	        		}, function(data){
	        		 	console.log(data)
	        		 	if(data.errcode == 0){
	        		 		vm.$router.push('/fill?data=' + JSON.stringify(data.data))
	        		 	}else {
	        		 		Toast.show(data.errdesc, 3000)
	        		 	}
	        		});
        		}else {
	
        			Toast.show('请输入正确的卡号或密码', 3000)
        		}
        		
        	}
        },
        components: {

        }
    }
})();

export default _default;