$(document).ready(function () {
	$('.first_icon').click(function(){
		$(this).delay(150).slideUp(450)
		$('.container').addClass('cont')
   })
	$('.html').mouseover(function(){
		$('.wrapper__text').text('Нажми сюда и ты узнаешь как добавить основную информацию на веб-страницу')
	})
	$('.css').mouseover(function(){
		$('.wrapper__text').text('Нажмите сюда, чтобы узнать как оформить веб-сайт')
	})
	$('.js').mouseover(function(){
		$('.wrapper__text').text('Нажмите сюда, чтобы узнать как написать скрипты для сайта на JavaScripts??')
	})
	$('.container').mouseout(function(){
		$('.wrapper__text').text('Выбери раздел, который тебя интересует!')
	})

})