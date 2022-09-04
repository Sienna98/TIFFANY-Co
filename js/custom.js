/* slick */
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


/* 퀵메뉴 */
$( function () {

  var $win = $(window); //브라우저
  var $header = $('.qmn'); //header
  var hh = $header.height(); //header의 높이
  var $gnb = $('.qmn'); //#gnb
/*   var $gu = $gnb.find('ul'); //#gnb 내부 ul */
  var uw = $gnb.width(); //#gnb 내부 ul의 너비
  var asc = 100; //추가 스크롤 값

  $win.scroll ( function () {

    if ( $win.scrollTop() > hh + asc ) {
      $gnb.css( {
        position: 'fixed',
        top: 0,
        left: 0,//'calc(50% - ' + uhw + 'px)',
        zIndex: 1000
      });
      $gnb.addClass('sticky');
    } else {
      $gnb.css ( {
        position: '',
      });
      $gnb.removeClass('sticky');
    }
  });
});

/* top버튼 */
$(function () {

  var $win = $(window); //브라우저
  var $top = $('#top'); //TOP 버튼
  var tpos = 500; //스크롤 위치(px)
  var et = 600; //효과시간(ms)
  var at = 1500; //애니메이션 시간(ms)
  console.log($top);
  //TOP 버튼 숨기기
  $top.hide();

  //스크롤시 TOP 버튼 페이딩
  $win.scroll(function () {

    if ($(this).scrollTop() > tpos) {
      $top.fadeIn(et);
    } else {
      $top.fadeOut(et);
    }
  });


  //TOP 버튼 클릭시 scrollTop: 0으로
  $top.click(function () {

    $('html, body').animate({
      scrollTop: 0
    }, at);
    return false;
  });
});