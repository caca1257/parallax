

$('#text1').hide();
$('#text2').hide();
$('#text3').hide();
$('#text4').hide();
$('#text5').hide();

$(".parallax").scroll(function() {
	var y = $(this).scrollTop();
	console.log(y);
	if (y >= 500) {
		$('#text1').fadeIn();
	} 
	else {
		$('#text1').fadeOut();
	}
	
	if (y >= 650) {
		$('#text2').fadeIn();
	} 
	else {
		$('#text2').fadeOut();
	}
	
	if (y >= 840) {
		$('#text3').fadeIn();
	} 
	else {
		$('#text3').fadeOut();
	}
	
	if (y >= 1400) {
		$('#text4').fadeIn();
	} 
	else {
		$('#text4').fadeOut();
	}
	if (y >=1800) {
		$('#text5').fadeIn();
	} 
	else {
		$('#text5').fadeOut();
	}
	
});

//credited to Soo Rin Park for this awesome code! 