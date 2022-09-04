$(document).ready(function () {
	$('.slide').slick({
		autoplay : true, /* 자동 재생 */
		dots: true,
		speed : 1000 , /* 이미지가 넘어가는 속도 */
		infinite: true,
		autoplaySpeed: 2000,  /* 이미지 전환 주기 */
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		fade: false /* 전환 효과 */ 
	});

/* 	$('.photobook').slick({
		autoplay : true, 
		dots: true,
		speed : 1000 ,
		infinite: true,
		autoplaySpeed: 1000, 
		arrows: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		fade: false
	}); */
});