$(document).ready(function() {

    $(".mobile-steps-expand-click").click(function() {
      $(".overlay-left-mobile-view").toggleClass("active");
      $("body").toggleClass("active");
    });

    $(".overlay-left-mobile-view").click(function() {
      $("body").removeClass("active");
      window.setTimeout(function() {
          $(".overlay-left-mobile-view").removeClass("active");
      }, 300);
    });

    $(function(){
        $('.selectpicker').selectpicker();
    });

    $('.num-in span').click(function () {
        var $input = $(this).parents('.num-block').find('input.in-num');
      if($(this).hasClass('minus')) {
        var count = parseFloat($input.val()) - 1;
        count = count < 1 ? 1 : count;
        if (count < 2) {
          $(this).addClass('dis');
        }
        else {
          $(this).removeClass('dis');
        }
        $input.val(count);
      }
      else {
        var count = parseFloat($input.val()) + 1
        $input.val(count);
        if (count > 1) {
          $(this).parents('.num-block').find(('.minus')).removeClass('dis');
        }
      }
      
      $input.change();
      return false;
    });

    $('.accessorie-slider').slick({
      centerMode: true,
      centerPadding: '120px',
      slidesToShow: 2,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
    });
  });





  
