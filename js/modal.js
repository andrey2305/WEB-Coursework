$('.js-button').click(function() { 
	$('.container').css('filter', 'blur(5px)');
	$('.js-overlay').fadeIn();
});

// закрыть на крестик
$('.js-close').click(function() { 
    $('.js-overlay').fadeOut();
    $('.container').css('filter', 'none');
});

// // закрыть по клику вне окна
// $(document).mouseup(function (e) { 
// 	var popup = $('.js-popup');
// 	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
//         $('.js-overlay').fadeOut();
// 		$('.all-cont').css('filter', 'none');
// 	}
// });