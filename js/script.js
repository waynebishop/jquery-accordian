$(document).ready(function(){
	
	$('.control').click(function(){
		$(this).next('.box').slideToggle();
	});

	$('#login-link').click(function(){
		$('#login-box').fadeIn();
	});

	$('#close').click(function(){
		$('#login-box').fadeOut();
	});

	
});




