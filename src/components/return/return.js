'use strict';

var _default = (function() {
    
    return {
        name: 'return',
        mounted: function() {
      		var vm = this;
      		
					var intervalid = setInterval(function(){
						if (vm.timeIndex == 0) {
						 	vm.$router.push('/index')
						 	clearInterval(intervalid);
						}
        		vm.timeIndex -- ;
					}, 3000);
        },
        data: function() {

            return {
              timeIndex : 3
            };
        },
        methods: {
        	 
        },
        components: {

        }
    }
})();

export default _default;