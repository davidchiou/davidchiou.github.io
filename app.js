$(function () { //$延緩執行
	

	var currentText = '';
	
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

	$('#btnclear').on('click',function() { //when click 執行function()
		currentText = '';
		render();
	})

	function render(){
		$('#message').text(currentText);
	}
});