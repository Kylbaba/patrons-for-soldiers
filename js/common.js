$(document).ready(function() {

	$(".auth_buttons").click(function() {
		$(this).next().slideToggle();
	});
	$(".main_mnu_button").click(function() {
		$(".maian_mnu ul").slideToggle();
	});

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});
    jQuery(document).ready(function(){
    var owlWrap = $('.owl-wrapper');
    // checking if the dom element exists
    if (owlWrap.length > 0) {
        // check if plugin is loaded
        if (jQuery().owlCarousel) {
            owlWrap.each(function(){
                var carousel= $(this).find('.owl-example3'),
                    navigation = $(this).find('.customNavigation'),
                    nextBtn = navigation.find('.next_button'),
                    prevBtn = navigation.find('.prev_button');
              carousel.owlCarousel({
                  itemsCustom : [
						[0, 3],
						[479, 3],
						[768, 3],
						[1200, 3]
					],
					navigation  : false,
					stopOnHover : true,
					autoPlay    : false
              });
            });
        };
    };
});
        jQuery(document).ready(function(){
    var owlWrap = $('.owl-wrapper');
    // checking if the dom element exists
    if (owlWrap.length > 0) {
        // check if plugin is loaded
        if (jQuery().owlCarousel) {
            owlWrap.each(function(){
                var carousel= $(this).find('.owl-carousel'),
                    navigation = $(this).find('.customNavigation'),
                    nextBtn = navigation.find('.next_button'),
                    prevBtn = navigation.find('.prev_button');
              carousel.owlCarousel({
                  itemsCustom : [
						[0, 1],
						[479, 1],
						[768, 1],
						[1200, 1]
					],
					navigation  : false,
					stopOnHover : true,
					autoPlay    : false
              });
             
              // Custom Navigation Events
              nextBtn.click(function(){
                carousel.trigger('owl.next');
              });
              prevBtn.click(function(){
                carousel.trigger('owl.prev');
              });
            });
        };
    };
});
    
	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});