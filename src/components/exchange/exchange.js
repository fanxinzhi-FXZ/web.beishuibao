'use strict';
import Utils from '@/utils/utils.js'
import Toast from '@/utils/toast.js'

var _default = (function() {
	var canvas, cxt;
	// 随机图形验证码
	function randomString() {
		var code = '';
		var source = '012345789ascdefgqwrtyuioplkjghmnvczx';
	
		for(var i = 0; i < 4; i++) {
			var index = Math.floor(Math.random() * source.length);
			code = code + source.charAt(index);
		}
		return code;
	};
	// canvas 绘画验证码及干扰线
	function drawString(code,cxt, canvas) {
		sessionStorage.setItem('Code', code);
		cxt.clearRect(0, 0, canvas.width, canvas.height);
		cxt.fillStyle = '#ccc';
		cxt.font = '30px 黑体';
		cxt.textBaseline = 'top';
		for(var i = 0; i < code.length; i++) {
			var r = randomNumber(0, 255);
			var g = randomNumber(0, 255);
			var b = randomNumber(0, 255);
			var h = randomNumber(0, canvas.height - 30);
			cxt.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
			cxt.fillText(code.charAt(i), 10 + i * 18, h);
		}
		for(var i = 0; i < 20; i++) {
			var x1 = randomNumber(0, canvas.width);
			var y1 = randomNumber(0, canvas.height);
	
			var x2 = randomNumber(0, canvas.width);
			var y2 = randomNumber(0, canvas.height);
	
			cxt.strokeStyle = '#ddd';
			cxt.beginPath();
			cxt.moveTo(x1, y1);
			cxt.lineTo(x2, y2);
			cxt.closePath();
			cxt.stroke();
		}
	};
	function randomNumber(min,max){
		return Math.floor(Math.random()*(max-min+1)+min);
	};


    
    return {
        name: 'exchange',
        mounted: function() {
        	canvas = document.getElementById('canvas');
			cxt = canvas.getContext('2d');
			
      		drawString(randomString(), cxt, canvas);
      		this.verifNumber = sessionStorage.getItem('Code')
        },
        data: function() {

            return {
                numberCode: '',
                passwordCode: '',
                verificationCode: '',
                verifNumber: ''
            };
        },
        methods: {
        	//更换图形验证码
        	replace: function(){
				var code = randomString();
				this.verifNumber = code;
				drawString(code,cxt, canvas);
			},
        	submit: function(){
        		var vm = this;
        		if(this.numberCode && this.passwordCode){
        			if(this.verifNumber == this.verificationCode){
        				
	        			Utils.Axios.deferPost('/bank/wei/order/authentication_card', {
		        		 	'card_number' : this.numberCode,  //
		            		'card_pass' : this.passwordCode, //
		        		}, function(data){
		        		 	console.log(data)
		        		 	if(data.errcode == 0){
		        		 		vm.$router.push('/fill?data=' + JSON.stringify(data.data))
		        		 	}else {
		        		 		Toast.show(data.errdesc, 3000)
		        		 	}
		        		});
	        		}else {
        				Toast.show('请输入正确的验证码', 3000)
        			}
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