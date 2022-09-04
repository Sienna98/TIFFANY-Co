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

    //스크롤시 TOP 버튼 페이딩
   /*  $win.scroll(function () {

      if ($(this).scrollTop() > hh + asc) {
        $gnb.fadeIn(400);
      } else {
        $gnb.fadeOut(400);
      }
    }); */
});