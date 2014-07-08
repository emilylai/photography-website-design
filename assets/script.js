$(document).ready(function() {

	if ($('#photo-container').length) {
		$('#sidebar-sub').addClass('active');
		$('#sidebar-sub').show();
	} else {
		$('#sidebar-sub').removeClass('active');
		$('#sidebar-sub').hide();
	};

	$('#photography').click(function() {
		if($(this).hasClass('active')) {
			$('#sidebar-sub').slideUp(500);
			$(this).removeClass('active');
		} else {
			$('#sidebar-sub').slideDown(500);
			$(this).addClass('active');
		};
	});

    $('.landscape-box, .portrait-box, .square-box').hover(function(){
        $(".cover", this).stop().animate({bottom:'0px'},{queue:false,duration:200});
    }, function() {
        $(".cover", this).stop().animate({bottom:'-50px'},{queue:false,duration:200});
    });
	
    $('#contact-submit').click(function(){
    	if($(this).hasClass('submitted')) {
    		$('.contact').show();
    		$('#contact-submit').text("submit");
    		$('#thanks').css('display', 'none');
    		$(this).removeClass('submitted');
    	} else {
    		$('.contact').css('display', 'none');
    		$(this).text("back");
    		$('#thanks').show();
    		$(this).addClass('submitted');
    	};
    });

});