$(document).ready(function () {
	$('body').show();
    $("body").fadeIn(70000);
    $('.groop__fase').click(function (event) {
    	$('.groop__shell').not($(this).next()).slideUp(600);
    	$(this).next().slideToggle(600);
    	$('.tag__content').slideUp(600);
    	$('.tag__fase').removeClass('slide')
    });
    $('.tag__fase').click(function (event) {
    	$('.tag__content').not($(this).next()).slideUp(600);
    	$(this).next().slideToggle(600);
    	$(this).toggleClass('slide');
    });
    $('.tag__fase').hover(function (event) {
    	$(this).toggleClass('slide');
    	if($(this).hasClass('slide')){
    	$(this).find('.name').css('display','none');
    	$(this).find('.cod').css('display','block');
    		
    	}
    	else{
    	$(this).find('.name').css('display','block');
    	$(this).find('.cod').css('display','none');
    	}
    })
})