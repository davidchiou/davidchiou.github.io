$(function () { //$延緩執行
	

	var currentText = '';
	var number = '';
	//var newNumber = '';
	var operator = '';

	$('#add').on('click',function() { //when click 執行function()
		operator = '+';
		number = currentText;
		currentText = '';
		render();
	})

	$('#minus').on('click',function() { //when click 執行function()
		operator = '-';
		number = currentText;
		currentText = '';
		render();
	})

	$('#cross').on('click',function() { //when click 執行function()
		operator = '*';
		number = currentText;
		currentText = '';
		render();
	})

	$('#divide').on('click',function() { //when click 執行function()
		operator = '/';
		number = currentText;
		currentText = '';
		render();
	})

	$('#equal').on('click',function() { //when click 執行function()
		if(operator === '+'){
			currentText = parseInt((parseInt(number, 10) + parseInt(currentText,10)).toString(10));
			render();
		}
		else if(operator === '-'){	
			currentText = parseInt((parseInt(number, 10) - parseInt(currentText,10)).toString(10));
			render();
		}
		else if(operator === '*'){
			currentText = parseInt((parseInt(number, 10) * parseInt(currentText,10)).toString(10));
			render();
		}
		else if(operator === '/'){
			currentText = parseInt((parseInt(number, 10) / parseInt(currentText,10)).toString(10));
			render();
		}
	})


	$('#btn1').on('click',function() { //when click 執行function()
		//alert('hello jquery');
		//$('#message').text('吃午餐');
		//$('#message').addClass('green');
		currentText = currentText + '1';
		render();
	})

	$('#btn2').on('click',function() { //when click 執行function()
		currentText = currentText + '2';
		render();
	})

	$('#btn3').on('click',function() { //when click 執行function()
		currentText = currentText + '3';
		render();
	})

	$('#btn4').on('click',function() { //when click 執行function()
		currentText = currentText + '4';
		render();
	})

	$('#btn5').on('click',function() { //when click 執行function()
		currentText = currentText + '5';
		render();
	})

	$('#btn6').on('click',function() { //when click 執行function()
		currentText = currentText + '6';
		render();
	})

	$('#btn7').on('click',function() { //when click 執行function()
		currentText = currentText + '7';
		render();
	})

	$('#btn8').on('click',function() { //when click 執行function()
		currentText = currentText + '8';
		render();
	})

	$('#btn9').on('click',function() { //when click 執行function()
		currentText = currentText + '9';
		render();
	})

	$('#btn0').on('click',function() { //when click 執行function()
		currentText = currentText + '0';
		render();
	})

	$('#btnclear').on('click',function() { //when click 執行function()
		currentText = '';
		render();
	})

	function render(){
		$('#message').text(currentText);
	}
});