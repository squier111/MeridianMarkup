$(document).ready(function(){
	initPlayerForm();
	initUi();
	initTabs();
  initPopups();
	initFlexImage();
  initMap('map-canvas');
  $(".knob").knob();
  initTabAnimate();
  slider();
  inpFile();

  initSwipe();




  function initSwipe(){
  var deviceAgent = navigator.userAgent.toLowerCase();
  var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/i);
  if (agentID) {
   $('.team-slider').each(function(){
    if (window.innerWidth < 700) {
     var _el = $(this);
     $(this).swipe({
      left:function(){
        // alert('left')
       $('.next',_el).click();
      },
      right:function(){
        // alert('right')
       $('.prev',_el).click();
      }
     });
    }
   })
  }
 }




     $('.flat-variants-holder .btn-zoom').click( function(){
        var bg = $("#popup-flat .bg1")
         bg.show();
        return false;
   });
    $('#popup-flat  .close-popup').click( function(){
        var bg = $("#popup-flat .bg1")
         bg.hide();
         $(this).closest('#popup-flat').hide();
        return false;
   });
    $('#popup-flat .bg1').click( function(){
          $(this).hide();
         $(this).closest('#popup-flat').hide();
        return false;
   });


   $(".apt_available").on( 'click' , function(e){
    $('.apt_available').removeClass('apt_selected');
     var _dataSrc = $(this).data('image');
     $('.flat-variants-holder .flat-info .visual img').attr('src',_dataSrc);
     $(this).addClass('apt_selected');
     return false;
  });


   $("form .form-row .btn-add").click(function(e){
    var _aa = $(this).closest('.holder').find('.row-client').eq(0).clone();
    $(this).after(_aa);
    initPlayerForm();
     return false;
  });



   $(window).load(function(){
    var _foot_h = $('#footer').outerHeight();
    $("#main").css({
        'padding-bottom': _foot_h ,
    })
      $("#footer").css({
        'margin-top': -_foot_h ,
    })
   });

  $(window).resize(function(){
        var _foot_h = $('#footer').outerHeight();
      $("#main").css({
          'padding-bottom': _foot_h ,
      })
      $("#footer").css({
          'margin-top': -_foot_h ,
      })
  });


  $("form .form-row .btn-add").click(function(e){
    var _aa = $(this).closest('.form-row').find('.row-client').eq(0).clone();
    $(this).closest('.form-row').append(_aa);
    initPlayerForm();
     return false;
  });


  $(".object .btn-more").click(function(e){
      $(this).toggleClass('active');
      $(".catalog-flat .toggle-block").fadeToggle(100);
     return false;
  });

$(".flat-variants-list li").on("click", function() {
    $(this).addClass("active");
    $(this).siblings(".active").removeClass('active');
    return false;
});



$(".flat-filter li").on("click", function() {
    $(".apt").removeClass("disabled");
    $(".apt").removeClass("selected");
    var self = $(this);
    $(this).addClass("active");
    $(this).siblings(".active").removeClass('active');
    $(".apt").each( function() {
      if (self.find("a").data('apartment-type') == $(this).data('apartment-type') ) {
        $(this).addClass("selected");
      } else {
         $(this).removeClass("selected");
      }
    });
    $(".apt").not(".selected").addClass("disabled");
    if (self.find("a").data('apartment-type') == "all") {
      $(".apt").removeClass("disabled");
    }
    return false;
});

$(".time-list li label").on("click", function() {
    $(this).closest("li").addClass("act");
    $(this).closest("li").siblings(".act").removeClass('act');
    return false;
});




$(".my_reserve_frame table td").each( function() {
  if (!$(this).find("a").hasClass('tel')) {
    $(this).bind("click", function() {
        $(this).closest("tr").toggleClass('active');
        $(this).closest("tr").next('tr').find('.dropdown').slideToggle();
        return false;
    });
  }

});



$(".time-list li label").on("click", function() {
      $(this).closest("li").addClass("active");
      $(this).closest("li").siblings(".active").removeClass('active');
      return false;
  });


if ('mCustomScrollbar' in $.fn) {
  $(".table").mCustomScrollbar({
    axis:"y",
    documentTouchScroll: true,
    contentTouchScroll:8,
      mouseWheel : {
        enable:true
      },
  });
  // $(".table-holder").mCustomScrollbar({
  //   axis:"x",
  //   contentTouchScroll:8,
  //    documentTouchScroll: true,
  //     mouseWheel : {
  //       enable:true
  //     },
  // });
}




 $(window).load( function(){

      $('.about-frame .about-list .num span').each(function(i,elem) {
        $({n: 0}).animate({n: parseInt($(elem).data('max'))}, {duration:1000,step: function (a) {$(elem).html((a | 0) )}});
      });
      $('.our-objects-catalog .graph .progressGraph').each(function(i,elem) {
          $(this).animate({width: parseInt($(elem).data('max')) + "%"}, {duration:1000});
        $('.our-objects-catalog .graph .num').each(function(i,elem) {
          $({n: 0}).animate({n: parseInt($(elem).data('max'))}, {duration:1000,step: function (a) {$(elem).html((a | 0) + "%")}});
          $(this).animate({left: parseInt($(elem).data('max')-5 +"px") + "%"}, {duration:1000});
        });
      });

      $('.cart-frame .graph .progressGraph').each(function(i,elem) {
          $(this).animate({width: parseInt($(elem).data('max')) + "%"}, {duration:1000});
        $('.cart-frame .graph .num').each(function(i,elem) {
          $({n: 0}).animate({n: parseInt($(elem).data('max'))}, {duration:1000,step: function (a) {$(elem).html((a | 0) + "%")}});
          $(this).animate({left: parseInt($(elem).data('max')-5 +"px") + "%"}, {duration:1000});
        });
      });
});


  function initTabAnimate(){
    var _flag = true;
      $(window).on('scroll touchend',function(){
        if($('.our-objects-list').length > 0) {
            if($('.our-objects-list').offset().top  < $(window).scrollTop()+$(window).height()/2){
              $('.our-objects-list').addClass('active');
              if(_flag == true){
                  $('.graph .progressGraph').each(function(i,elem) {
                      $(this).animate({width: parseInt($(elem).data('max')) + "%"}, {duration:1000});
                    $('.graph .num').each(function(i,elem) {
                      $({n: 0}).animate({n: parseInt($(elem).data('max'))}, {duration:1000,step: function (a) {$(elem).html((a | 0) + "%")}});
                      $(this).animate({left: parseInt($(elem).data('max')-5 +"px") + "%"}, {duration:1000});
                    });
                  });
                _flag = false;
              }
            }
        }
    });
  }






  var carousel;
    function SlickInitForCarousel(){
        carousel.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
          dots:true,
          arrows:false,
        });
  }
if ('waterwheelCarousel' in $.fn) {
    carousel = $(".carousel").waterwheelCarousel({
        flankingItems: 3,
        separation:320,
        sizeMultiplier:0.83,
        forcedImageWidth: 490,
        forcedImageHeight: 340,
        movedFromCenter: function ($item) {
           $item.closest("li").find(".holder").removeClass("active");
          // $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
        },
        clickedCenter: function ($item) {
          $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
        },
        movedToCenter: function($newCenterItem) {
          var imageID = $newCenterItem.attr('id');
          $newCenterItem.closest("li").find(".holder").addClass("active");
        }
      });



     if ($(window).width() < 1750) {
         carousel.reload({
            flankingItems: 3,
            separation:210,
            sizeMultiplier:0.83,
            forcedImageWidth: 490,
            forcedImageHeight: 340,
            movedFromCenter: function ($item) {
            $item.closest("li").find(".holder").removeClass("active");
            // $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
            },
            clickedCenter: function ($item) {
            $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
            },
            movedToCenter: function($newCenterItem) {
            var imageID = $newCenterItem.attr('id');
            $newCenterItem.closest("li").find(".holder").addClass("active");
            }
       });
      };



     if ($(window).width() < 1550) {
         carousel.reload({
            flankingItems: 3,
            separation:190,
            sizeMultiplier:0.83,
            forcedImageWidth: 490,
            forcedImageHeight: 340,
            movedFromCenter: function ($item) {
            $item.closest("li").find(".holder").removeClass("active");
            // $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
            },
            clickedCenter: function ($item) {
            $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
            },
            movedToCenter: function($newCenterItem) {
            var imageID = $newCenterItem.attr('id');
            $newCenterItem.closest("li").find(".holder").addClass("active");
            }
       });
      };


      if ($(window).width() < 1250) {
         carousel.reload({
            flankingItems: 3,
            separation:100,
            sizeMultiplier:0.83,
            forcedImageWidth: 490,
            forcedImageHeight: 340,
            movedFromCenter: function ($item) {
            $item.closest("li").find(".holder").removeClass("active");
            // $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
            },
            clickedCenter: function ($item) {
            $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
            },
            movedToCenter: function($newCenterItem) {
            var imageID = $newCenterItem.attr('id');
            $newCenterItem.closest("li").find(".holder").addClass("active");
            }
       });
      };


       if ($(window).width() < 720) {
         if ('slick' in $.fn) {
              SlickInitForCarousel();
          }

       };


      $('.build-compleated .prev').bind('click', function () {
        carousel.prev();
        return false
      });

      $('.build-compleated .next').bind('click', function () {
        carousel.next();
        return false;
      });
}




	resolutions();
	init_and_resize();
	$(window).resize(function() {
		init_and_resize();
	});




  function resolutions(){
    $('body').append('<div class="resolutions720"></div>');
  }
  function init_and_resize(){
    if($('.resolutions720').is(':visible')){
      $('.header-nav').insertBefore($('.nav-menu'));
      $(window).scroll(function(){
        _heah_h = $('#header').outerHeight();
         if ( $(this).scrollTop() > $("#wrapper").offset().top ) {
              $("#header").addClass("scroll");
              $("#main").css({
                 'padding-top': _heah_h ,
              })
          } else {
               $("#header").removeClass("scroll");
              $("#main").css({
                 'padding-top': 0,
              })
          }
      });
       var _heah_h_all = $('#header.all').outerHeight();
        $("#main").css({
             'padding-top': 0,
        })
    }
    if($('.resolutions720').is(':hidden')){

       $('.header-nav').insertBefore($('#header .tel-holder'));
       if (!$('header').hasClass("all")) {
           $(window).scroll(function(){
            _heah_h = $('#header').outerHeight();
             if ( $(this).scrollTop() > $("#wrapper").offset().top ) {
                  $("#header").addClass("scroll");
                  $("#main").css({
                     'padding-top': 0,
                  })
              } else {
                   $("#header").removeClass("scroll");
                  $("#main").css({
                     'padding-top': 0,
                  })
              }
          });
       } else {


             var _heah_h_all = $('#header.all').outerHeight();
              $("#main").css({
                   'padding-top': _heah_h_all,
                })
            $(window).scroll(function(){
              _heah_h_all = $('#header.all').outerHeight();
               if ( $(this).scrollTop() > $("#wrapper").offset().top ) {
                    $("#header.all").addClass("scroll");
                    $("#main").css({
                       'padding-top': _heah_h_all ,
                    })
                }
                else {
                     $("#header.all").removeClass("scroll");
                    $("#main").css({
                       'padding-top': _heah_h_all ,
                    })
                }
            });
     }
		}
	}


	 $('.close-menu').click(function(event) {
	 	$('.menu-holder').removeClass('open');
	 	$('#wrapper .bg').removeClass('open');
		return false;
	});
	 $('.open-menu').click(function(event) {
	 	$('.menu-holder').addClass('open');
	 	$('#wrapper .bg').addClass('open');
		return false;
	});
	$('#wrapper .bg').click(function(event) {
		$('.menu-holder').removeClass('open');
	 	$(this).removeClass('open');
	return false;
	})




    if (device.mobile() || device.tablet()) {
      $("select.select-dropdown").dropdown({
          native: true
      });
  }else{
    $("select.select-dropdown").dropdown({
    });
  }


	if ('slick' in $.fn) {
		$('.main-slider').slick({
			slidesToShow: 1,
      fade:true,
			slidesToScroll: 1,
			adaptiveHeight: true,
			arrows:true,
      infinite:true,
			autoplay:true,
			autoplaySpeed:3000,
      responsive: [
                     {
                      breakpoint: 500,
                      settings: {
                        dots:true,
                         infinite:true,
                      }
                    },
                 ]
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite:true,
      arrows:true,
      focusOnSelect: true,
       responsive: [
                    {
                      breakpoint: 960,
                      settings: {
                        slidesToShow: 3,
                        arrows:false,
                        dots:true,
                      }
                    },
                    {
                      breakpoint: 650,
                      settings: {
                        slidesToShow: 2,
                        arrows:false,
                        dots:true,
                      }
                    },
                     {
                      breakpoint: 500,
                      settings: {
                        slidesToShow: 1,
                        arrows:false,
                          dots:true,
                      }
                    },
                 ]
    });
     $('.main-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
       $({n: 0}).animate({n:50}, {duration:3000,step: function (a) { $(".knob").val(a).trigger('change')}});
   });

  $('.type-list').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows:false,
      focusOnSelect: true,
       responsive: [
            {
              breakpoint: 1190,
              settings: {
                slidesToShow: 2,
                 arrows:false,
              }
            },
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 2,
                 arrows:false,
                 dots:true,
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                  arrows:false,
                  infinite:true,
                 dots:true,
              }
            },
         ]
    });

  $('.info-box .prev').click(function(){
      $('.type-list').slick('slickPrev');
      return false;
  });

   $('.info-box .next').click(function(){
      $('.type-list').slick('slickNext');
       return false;
  });



    $('.news-list.gallery').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows:false,
      focusOnSelect: true,
       responsive: [
            {
              breakpoint: 1070,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 1,
                arrows:false,
                 infinite:true,
                dots: true,
              }
            },
         ]
    });

      $('.news-frame .prev').click(function(){
          $('.news-list').slick('slickPrev');
          return false;
      });

       $('.news-frame .next').click(function(){
          $('.news-list').slick('slickNext');
           return false;
      });



      $('.parthners-list').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows:false,
      focusOnSelect: true,
       responsive: [
            {
              breakpoint: 1250,
              settings: {
                slidesToShow: 3,
                 dots:true,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                dots:true,
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                dots:true,
              }
            },
         ]
    });



    $('.popup-flat-holder .popup-gallery').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      arrows:true,
      dots: true,
      autoplay:false,
      autoplaySpeed:3000,
      appendDots:$('.nav-popup-gallery'),
       customPaging : function(slider, i) {
          var thumb = $(slider.$slides[i]).data('thumb');
          return '<a href="javascript:void(0);"><span>'+thumb+'</span></a>';
            // return i + 1;
      },
    });



     $('.time-list').slick({
      slidesToShow: 7,
      infinite:false,
      slidesToScroll: 1,
      arrows:true,
      focusOnSelect: true,
       responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 5,
                 arrows:true,
              }
            },
             {
              breakpoint: 1000,
              settings: {
                slidesToShow: 4,
                 arrows:true,
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 3,
                 arrows:false,
                 dots:true
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                 arrows:false,
                 touchMove:true,
                 dots:true
              }
            },
         ]
    });

     $('.cart-gallery').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows:true,
      focusOnSelect: true,
       responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                 arrows:true,
              }
            },
            {
              breakpoint: 720,
              settings: {
                slidesToShow: 1,
                arrows:true,
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                 arrows:false,
                 dots:true,
              }
            },
         ]
    });



   $('.advantages-list').slick({
        arrows:false,
       responsive: [
            {
              breakpoint: 3000,
              settings: "unslick"
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                 slidesToScroll: 1,
                 arrows:false,
                 dots:true
              }
            },
         ]
    });

      $('.about-list').slick({
        arrows:false,
       responsive: [
            {
              breakpoint: 3000,
              settings: "unslick"
            },
            {
              breakpoint: 720,
              settings: {
                slidesToShow: 2,
                 slidesToScroll: 1,
                 arrows:false,
                 dots:true
              }
            },
             {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                 slidesToScroll: 1,
                 arrows:false,
                 dots:true
              }
            },
         ]
    });

}

  function slider(){
    $('.main-slide').each(function(){
      var _this = $(this);
      var sliderWrap = $(this).find('.team-slider');
      _this.find('a.prev').unbind('click');
      _this.find('a.prev').click(function(){
        sliderWrap.find('li.clone').remove();
        if (sliderWrap.find('li').length != 3 ) {
          sliderWrap.prepend(sliderWrap.find('li:last'));
          sliderWrap.find('li').removeClass('prev next');
          sliderWrap.find('li.active').removeClass('active').prev().addClass('active');
          setTimeout(function(){sliderWrap.find('li.active').prev().addClass('prev');},10);
          sliderWrap.find('li.active').next().addClass('next');
        } else {
          if (sliderWrap.find('li.active').index() == 1) {
            sliderWrap.find('li').removeAttr('class');
            sliderWrap.find('li').eq(0).addClass('active');
            sliderWrap.find('li').eq(1).addClass('next');
            sliderWrap.find('li').eq(2).addClass('prev');
          } else if (sliderWrap.find('li.active').index() == 0) {
            sliderWrap.find('li').removeAttr('class');
            sliderWrap.find('li').eq(0).addClass('next');
            sliderWrap.find('li').eq(1).addClass('prev');
            sliderWrap.find('li').eq(2).addClass('active');
          } else if (sliderWrap.find('li.active').index() == 2) {
            sliderWrap.find('li').removeAttr('class');
            sliderWrap.find('li').eq(0).addClass('prev');
            sliderWrap.find('li').eq(1).addClass('active');
            sliderWrap.find('li').eq(2).addClass('next');
          }
        }
        return false;
      });
      _this.find('a.next').unbind('click');
      _this.find('a.next').click(function(){
        sliderWrap.find('li.clone').remove();
        if (sliderWrap.find('li').length != 3) {
          sliderWrap.find('li').removeClass('prev next');
          sliderWrap.find('li.active').removeClass('active').next().addClass('active');
          sliderWrap.prepend(sliderWrap.find('li:first').clone());
          sliderWrap.append(sliderWrap.find('li:first'));
          sliderWrap.find('li.active').prev().addClass('prev');
          sliderWrap.find('li.active').next().addClass('next');
          sliderWrap.find('li:first').addClass('clone');

        } else {
          if (sliderWrap.find('li.active').index() == 1) {
            sliderWrap.find('li').removeAttr('class');
            sliderWrap.find('li').eq(0).addClass('next');
            sliderWrap.find('li').eq(1).addClass('prev');
            sliderWrap.find('li').eq(2).addClass('active');
          } else if (sliderWrap.find('li.active').index() == 0) {
            sliderWrap.find('li').removeAttr('class');
            sliderWrap.find('li').eq(0).addClass('prev');
            sliderWrap.find('li').eq(1).addClass('active');
            sliderWrap.find('li').eq(2).addClass('next');
          } else if (sliderWrap.find('li.active').index() == 2) {
            sliderWrap.find('li').removeAttr('class');
            sliderWrap.find('li').eq(0).addClass('active');
            sliderWrap.find('li').eq(1).addClass('next');
            sliderWrap.find('li').eq(2).addClass('prev');
          }
        }
        return false;
      });
      sliderWrap.find('li').unbind('click');
      sliderWrap.on('click', sliderWrap.find('li'), function(e){
        if ($(e.target).closest('li').hasClass('prev')) {
          // console.log(1)
          _this.find('a.prev').click();
        }
        if ($(e.target).closest('li').hasClass('next')) {
          // console.log(2)
          _this.find('a.next').click()
        }
      });
    })
  }





	 $(document).click(function(event) {
		if ($(event.target).closest('#header .basket-drop').length) return;
		$('#header .basket-drop').fadeOut();
		event.stopPropagation();
	})


	$('.type-list li').matchHeight();

	$('input.check ,input.radio').iCheck({
		checkboxClass: 'check',
		radioClass: 'radio',
		increaseArea: '20%' // optional
	});

	function initTabs(){
	 $('.tabset ul.tab-control li a').click( function(){
		var thisHold = $(this).closest(".tabset");
		var _ind = $(this).closest('li').index();
		thisHold.children('.tab-body').children(".tab").removeClass('active');
		thisHold.children('.tab-body').children("div.tab:eq("+_ind+")").addClass('active');
		$(this).closest("ul").find(".active").removeClass("active");
		$(this).parent().addClass("active");
		return false;
	 });

  $(document).on('click' , '.female-change li a', function(){
    var thisHold = $(this).closest("#header .center ,.row-top");
    var _ind = $(this).closest('li').index();
    $('.nav-product-list-holder').children(".tab").removeClass('active');
    $('.nav-product-list-holder').children("div.tab:eq("+_ind+")").addClass('active');
    $(this).closest("ul").find(".active").removeClass("active");
    $(this).parent().addClass("active");
    return false;
   });

	};

});


function initUi (){
	$( ".slider-range" ).each(function(){
		var _slider = $(this);
		var _values = $('.min_max_currentmin_currentmax',_slider).val().split('/');
		_slider.slider({
			range: true,
			min: parseInt(_values[0]),
			max: parseInt(_values[1]),
			step:1,
			values: [ parseInt(_values[2]), parseInt(_values[3]) ],
			slide: function(event, ui) {
				$( ".from").val( ui.values[0]);
				$( ".to").val(  ui.values[1]);
        // $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );

			},
			change: function(event, ui) {
				// $(ui.handle).html('<span>'+ui.value+  '</span>');
			   $( ".from").val(ui.values[0]);
        $( ".to").val( ui.values[1]);
				function rand (min, max) {
					return Math.floor(Math.random() * (max - min)) + min;
				}
				var rand =  rand(0, 2500);
				$( ".range-box .catalog-box .num").text(rand);
			}
		});
		$( ".ui-slider-handle" ,_slider).eq(0).find('span').text(_slider.slider('values',0));

		$( ".to").val(  $( ".slider-range" ).slider('values',1));
		$( ".from").val($( ".slider-range" ).slider('values',0));
		$( ".ui-slider-handle").eq(0).addClass('first');
	 });



    $( ".slider-flat" ).each(function(){
    var _slider = $(this);
    var _values = $('.min_max_currentmin_currentmax',_slider).val().split('/');
    _slider.slider({
      range: true,
      min: parseInt(_values[0]),
      max: parseInt(_values[1]),
      step:1,
      values: [ parseInt(_values[2]), parseInt(_values[3]) ],
      slide: function(event, ui) {
        $( ".from-flat").val( ui.values[0]);
        $( ".to-flat").val(  ui.values[1]);
        // $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );

      },
      change: function(event, ui) {
        // $(ui.handle).html('<span>'+ui.value+  '</span>');
         $( ".from-flat").val(ui.values[0]);
        $( ".to-flat").val( ui.values[1]);
        function rand (min, max) {
          return Math.floor(Math.random() * (max - min)) + min;
        }
        var rand =  rand(0, 2500);
        $( ".range-box .catalog-box .num.flat").text(rand);
      }
    });
    $( ".ui-slider-handle" ,_slider).eq(0).find('span').text(_slider.slider('values',0));

    $( ".to-flat").val(  $( ".slider-flat" ).slider('values',1));
    $( ".from-flat").val($( ".slider-flat" ).slider('values',0));
    $( ".ui-slider-handle").eq(0).addClass('first');
   });
}




function initFlexImage(){
 $('.flex-image').each(function(){
  $(this).closest('.flex-image-holder').css({
   'background':'url('+$(this).attr('src')+') no-repeat 50% 0%',
   'background-size':'cover'
  })
 });
}






function initPopups(){
	$('body')
    .popup({
      "opener":"table .btn-more , .flat-variants-holder .btn-zoom",
      "popup_holder":"#popup-flat",
      "popup":".popup",
      "close_btn":""
    })
    .popup({
      "opener":"form.booking_flat-form .head .btn",
      "popup_holder":"#popup-choose-flat",
      "popup":".popup",
      "close_btn":".close-popup"
    })
    .popup({
      "opener":"#header .calback-btn , .bottom-nav-holder .calback-btn",
      "popup_holder":"#popup-phone",
      "popup":".popup",
      "close_btn":".close-popup"
    })
}
$.fn.popup = function(o){
 var o = $.extend({
    "opener":".call-back a",
    "popup_holder":"#call-popup",
    "popup":".popup",
    "close_btn":".btn-close",
    "close":function(){
    	 $('.popup-holder .bg').hide();
    },
    "beforeOpen": function(popup) {
     $(popup).css({
      'left': 0,
      'top': 0
     }).hide();
    }
   },o);
 return this.each(function(){
  var container=$(this),
   opener=$(o.opener,container),
   popup_holder=$(o.popup_holder,container),
   popup=$(o.popup,popup_holder),
   close=$(o.close_btn,popup),
   bg=$('.bg',popup_holder);
   popup.css('margin',0);
   opener.click(function(e){
    o.beforeOpen.apply(this,[popup_holder]);
    popup_holder.show();
    alignPopup();
    bgResize();
    bg.show();
    e.preventDefault();
   });
  function alignPopup(){
   var deviceAgent = navigator.userAgent.toLowerCase();
   var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/i);
   if(agentID){
    if(popup.outerHeight()>window.innerHeight){
     popup.css({'top':$(window).scrollTop(),'left': ((window.innerWidth - popup.outerWidth())/2) + $(window).scrollLeft()});
     return false;
    }
    popup.css({
     'top': ((window.innerHeight-popup.outerHeight())/2) + $(window).scrollTop(),
     'left': ((window.innerWidth - popup.outerWidth())/2) + $(window).scrollLeft()
    });
   }else{
    if(popup.outerHeight()>$(window).outerHeight()){
     popup.css({'top':$(window).scrollTop(),'left': (($(window).width() - popup.outerWidth())/2) + $(window).scrollLeft()});
     return false;
    }
    popup.css({
     'top': (($(window).height()-popup.outerHeight())/2) + $(window).scrollTop(),
     'left': (($(window).width() - popup.outerWidth())/2) + $(window).scrollLeft()
    });
   }
  }
  function bgResize(){
   var _w=$(window).width(),
    _h=$(document).height();
   bg.css({"height":_h,"width":_w+$(window).scrollLeft()});
  }
  $(window).resize(function(){
   if(popup_holder.is(":visible")){
    bgResize();
    alignPopup();
   }
  });
  if(popup_holder.is(":visible")){
    bgResize();
    alignPopup();
  }
  close.add(bg).click(function(e){
   var closeEl=this;
   popup_holder.fadeOut(400,function(){
    o.close.apply(closeEl,[popup_holder]);
   });
   e.preventDefault();
  });
  $('body').keydown(function(e){
   if(e.keyCode=='27'){
    popup_holder.fadeOut(400);
   }
  })
 });
};


function initPlayerForm(){
  if("mask" in $.fn){
    $('.phone').mask("+7 (999) 999-99-99");
  }
  $('form').each(function(){
      var form=$(this),
      input=form.find('input:text'),
      select=form.find('select.select-dropdown');


          form.find('select.select-dropdown').change(function(){
                var val=$(this).val();
                if(val != ""){
                    $(this).parent().removeClass('error');
                }
                else{
                    $(this).parent().addClass('error');
                    $(this).val('');
                }
            });


  		form.find('.required').blur(function(){
            var val=$(this).val();
            if((/^[a-zA-Zа-яА-ЯіІєЄїЇ\s-]{1,40}$/ig).test(val)){
                $(this).removeClass('error');
                $(this).closest('.holder-error').removeClass('active');
            }
            else{
                $(this).addClass('error');
                $(this).closest('.holder-error').addClass('active');
				$(this).val('');
            }
        });
        form.on('keyup keydown', '.required.error', function(){
            var val=$(this).val();
            if((/^[a-zA-Z0-9а-яА-ЯіІєЄїЇ\s-\(\)\+]{1,40}$/ig).test(val)){
                $(this).removeClass('error');
                $(this).closest('.holder-error').removeClass('active');
            }
            else{
                $(this).addClass('error active');
                $(this).closest('.holder-error').addClass('active');
            }
        });
		 form.find('.phone').blur(function(){
            var val=$(this).val();
             if((/^[0-9\s-\(\)\+]{18}$/ig).test(val)){
                $(this).removeClass('error');
                $(this).closest('.holder-error').removeClass('active');
            }
            else{
                $(this).addClass('error');
                $(this).closest('.holder-error').addClass('active');
				        $(this).val('');
            }
        });
        form.on('keyup keydown', '.phone.error', function(){
            var val=$(this).val();
            if((/^[0-9\s-\(\)\+]{18}$/ig).test(val)){
                $(this).removeClass('error');
                $(this).closest('.holder-error').removeClass('active');
            }
            else{
                $(this).addClass('error');
                $(this).closest('.holder-error').addClass('active');
            }
        });
      form.find('.email').blur(function(){
          var val=$(this).val();
          if((/^[-\._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/ig).test(val) && val.length<=30){
              $(this).removeClass('error ');
              $(this).closest('.holder-error').removeClass('active');
          }
          else{
              $(this).addClass('error active');
              $(this).closest('.holder-error').addClass('active');
			  $(this).val('');
          }
      });
      form.on('keyup keydown', '.email.error', function(){
          var val=$(this).val();
          if((/^[-\._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/ig).test(val) && val.length<=30){
              $(this).removeClass('error');
              $(this).closest('.holder-error').removeClass('active');
          }
          else{
              $(this).addClass('error');
              $(this).closest('.holder-error').addClass('active');
          }
      });
      form.submit(function(e){
          input.trigger('blur');
          select.trigger('change');
          if(form.find('.error').size()){
			/*alert('error');*/
			return false;
		} else {
			// $.post("feedback.php", $(this).serialize());
			values = $(this).serialize();
			console.log();
			$.ajax({
				url: "feedback.php",
				type: "post",
				data: values,
				success: function(){
					// успех
					$('#popup-call .popup-info').addClass('active');
					$('#popup-ask .popup-info').addClass('active');
				},
				error:function(){
					// ошибка
				}
			});
			return false;
		}
      });
  });
};




 function inpFile() {
     var wrapper = $( ".file_upload" ),
        inp = wrapper.find( "input" ),
        btn = wrapper.find( "button" ),
        lbl = wrapper.find( "div" );
    btn.focus(function(){
        inp.focus()
    });
    // Crutches for the :focus style:
    inp.focus(function(){
        wrapper.addClass( "focus" );
    }).blur(function(){
        wrapper.removeClass( "focus" );
    });



        // Yep, it works!
    btn.add( lbl ).click(function(){
        inp.click();
    });


        // Crutches for the :focus style:
    btn.focus(function(){
        wrapper.addClass( "focus" );
    }).blur(function(){
        wrapper.removeClass( "focus" );
    });


    var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

    inp.change(function(){
        var file_name;
        if( file_api && inp[ 0 ].files[ 0 ] )
            file_name = inp[ 0 ].files[ 0 ].name;
        else
            file_name = inp.val().replace( "C:\\fakepath\\", '' );

        if( ! file_name.length )
            return;

        if( lbl.is( ":visible" ) ){
            lbl.text( file_name );
            btn.text( "Прикрепить скан" );
        }else
            btn.text( file_name );
    }).change();
 };





/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function ($) {

  // Detect touch support
  $.support.touch = 'ontouchend' in document;

  // Ignore browsers without touch support
  if (!$.support.touch) {
    return;
  }

  var mouseProto = $.ui.mouse.prototype,
      _mouseInit = mouseProto._mouseInit,
      _mouseDestroy = mouseProto._mouseDestroy,
      touchHandled;

  /**
   * Simulate a mouse event based on a corresponding touch event
   * @param {Object} event A touch event
   * @param {String} simulatedType The corresponding mouse event
   */
  function simulateMouseEvent (event, simulatedType) {

    // Ignore multi-touch events
    if (event.originalEvent.touches.length > 1) {
      return;
    }

    event.preventDefault();

    var touch = event.originalEvent.changedTouches[0],
        simulatedEvent = document.createEvent('MouseEvents');
    
    // Initialize the simulated mouse event using the touch event's coordinates
    simulatedEvent.initMouseEvent(
      simulatedType,    // type
      true,             // bubbles                    
      true,             // cancelable                 
      window,           // view                       
      1,                // detail                     
      touch.screenX,    // screenX                    
      touch.screenY,    // screenY                    
      touch.clientX,    // clientX                    
      touch.clientY,    // clientY                    
      false,            // ctrlKey                    
      false,            // altKey                     
      false,            // shiftKey                   
      false,            // metaKey                    
      0,                // button                     
      null              // relatedTarget              
    );

    // Dispatch the simulated event to the target element
    event.target.dispatchEvent(simulatedEvent);
  }

  /**
   * Handle the jQuery UI widget's touchstart events
   * @param {Object} event The widget element's touchstart event
   */
  mouseProto._touchStart = function (event) {

    var self = this;

    // Ignore the event if another widget is already being handled
    if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
      return;
    }

    // Set the flag to prevent other widgets from inheriting the touch event
    touchHandled = true;

    // Track movement to determine if interaction was a click
    self._touchMoved = false;

    // Simulate the mouseover event
    simulateMouseEvent(event, 'mouseover');

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');

    // Simulate the mousedown event
    simulateMouseEvent(event, 'mousedown');
  };

  /**
   * Handle the jQuery UI widget's touchmove events
   * @param {Object} event The document's touchmove event
   */
  mouseProto._touchMove = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Interaction was not a click
    this._touchMoved = true;

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');
  };

  /**
   * Handle the jQuery UI widget's touchend events
   * @param {Object} event The document's touchend event
   */
  mouseProto._touchEnd = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Simulate the mouseup event
    simulateMouseEvent(event, 'mouseup');

    // Simulate the mouseout event
    simulateMouseEvent(event, 'mouseout');

    // If the touch interaction did not move, it should trigger a click
    if (!this._touchMoved) {

      // Simulate the click event
      simulateMouseEvent(event, 'click');
    }

    // Unset the flag to allow other widgets to inherit the touch event
    touchHandled = false;
  };

  /**
   * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
   * This method extends the widget with bound touch event handlers that
   * translate touch events to mouse events and pass them to the widget's
   * original mouse event handling methods.
   */
  mouseProto._mouseInit = function () {
    
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.bind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse init method
    _mouseInit.call(self);
  };

  /**
   * Remove the touch event handlers
   */
  mouseProto._mouseDestroy = function () {
    
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.unbind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse destroy method
    _mouseDestroy.call(self);
  };

})(jQuery);




jQuery.fn.swipe=function(o){
  return this.each(function(){
   var swipeEl=$(this);
    swipeEl.unbind('mousedown').unbind('touchstart');
    swipeEl.bind('mousedown touchstart',function(e){
    if(e.originalEvent.changedTouches || e.originalEvent.touches) var e=e.originalEvent.changedTouches[0] || e.originalEvent.touches[0];
     var startPx=e.pageX;
    $('body').bind('mousemove touchmove',function(e){
     if(e.originalEvent.changedTouches || e.originalEvent.touches) var e=e.originalEvent.changedTouches[0] || e.originalEvent.touches[0];
     var x=e.pageX;
    });
    $('body').bind('mouseup touchend',function(e){
     if(e.originalEvent.changedTouches || e.originalEvent.touches) var e=e.originalEvent.changedTouches[0] || e.originalEvent.touches[0];
     $(this).unbind('mouseup touchend').unbind('mousemove touchmove');
     var endPx=e.pageX;
     if(Math.abs(endPx-startPx)>=50){
      if(startPx>endPx){
      //next
        if('left' in o) o.left();
      }else{
      //prev
        if('right' in o) o.right();
      }
     }
     
    });
    
   });
  });
 }

function initMap (mapId){
    if (!$('#map-canvas').length) return;
    // map
    function initialize() {
      var MY_MAPTYPE_ID = 'MapStyle';
      var stylez =  [];

      var markers = [
        {
          name: "name1",
          lat: 53.721152,
          lng: 91.442387,
          title: 'marker',
          image: 'images/marker1.png',
          tel1: "+7 383 789 06 22",
        },
         {
          name: "name1",
          lat: 58.721152,
          lng: 99.442387,
          title: 'marker',
          image: 'images/marker1.png',
          tel1: "+7 383 789 06 22",
        },
        {
          name: "name2",
          lat: 56.721152,
          lng: 96.442387,
          title: 'marker',
          image: 'images/marker2.png',
          tel1: "+7 383 789 06 22",
        },
        {
        name: "name2",
          lat: 50.721152,
          lng: 90.442387,
          title: 'marker',
          image: 'images/marker2.png',
          tel1: "+7 383 789 06 22",
        },
        {
          name: "name3",
          lat: 54.721152,
          lng: 92.442387,
          title: 'marker',
          image: 'images/marker1.png',
          tel1: "+7 383 789 06 22",
        },
        {
          name: "name3",
          lat: 57.721152,
          lng: 93.442387,
          title: 'marker',
          image: 'images/marker1.png',
          tel1: "+7 383 789 06 22",
        },
        {
          name: "name4",
          lat: 56.721152,
          lng: 90.442387,
          title: 'marker',
          image: 'images/marker1.png',
          tel1: "+7 383 789 06 22",
        },
        {
          name: "name4",
          lat: 53.721152,
          lng: 95.442387,
          title: 'marker',
          image: 'images/marker1.png',
          tel1: "+7 383 789 06 22",
        },
      ];

      var geocoder = new google.maps.Geocoder;

      var mapOptions = {
        zoom: 5,
        scrollwheel: false,
        navigationControl: true,
        mapTypeControl: false,
        scaleControl: true,
        draggable: true,
        center: new google.maps.LatLng(53.721152, 91.442387),
        mapTypeId: MY_MAPTYPE_ID
      }

      var map = new google.maps.Map(document.getElementById(mapId), mapOptions);




        var arrmar = [];
      var initMarkers = function() {
        for (var x = 0; x < markers.length; x++) {
          var currentMarker = markers[x];
          var position = new google.maps.LatLng(currentMarker.lat,currentMarker.lng);
          var marker = new google.maps.Marker({
            name: currentMarker.name,
            position: position,
            map: map,
            icon: currentMarker.image,
            title: currentMarker.title,
            tel1: currentMarker.tel1,
            tel2: currentMarker.tel2,
            mail: currentMarker.mail
          });
          arrmar.push(marker);

          arrmar.forEach(function(marker, index) {
            marker.setVisible(true);
          });
          // var infoWindow;

          // google.maps.event.addListener(marker, 'click', function() {
          //   var currMarker = this;
          //   geocoder.geocode({'location': {lat: currMarker.position.lat(), lng: currMarker.position.lng()}}, function(results, status) {
          //     if (typeof infoWindow != 'undefined') {
          //       infoWindow.close();
          //     }

          //     infoWindow = new google.maps.InfoWindow({
          //       content: '<div class="address_list">' + '<span class="address">' + results[0].formatted_address  + '</span>'  +  '</div>'
          //     });
          //     infoWindow.open(map, currMarker);
          //   });
          // });
        }
        return marker;
      };
          initMarkers();



        $(".marker-filter li").on("click", function() {
            $(this).addClass("active");
            $(this).siblings(".active").removeClass('active');
            var catToToggle = $(this).data('name');
            var image = $(this).data('image');
            for (var key in arrmar) {
                if ($(this).data('name') == arrmar[key].name ) {
                     arrmar[key].setVisible(true);
                } else{
                  arrmar[key].setVisible(false);
                }
              }
            return false;
        });




        var styledMapOptions = {name: "MyStyle"};
      var jayzMapType = new google.maps.StyledMapType(stylez, styledMapOptions);
      map.mapTypes.set(MY_MAPTYPE_ID, jayzMapType);




    }
    google.maps.event.addDomListener(window, 'load', initialize);


  }





/*! device.js 0.1.58 */
(function(){var a,b,c,d,e,f,g,h,i,j;a=window.device,window.device={},c=window.document.documentElement,j=window.navigator.userAgent.toLowerCase(),device.ios=function(){return device.iphone()||device.ipod()||device.ipad()},device.iphone=function(){return d("iphone")},device.ipod=function(){return d("ipod")},device.ipad=function(){return d("ipad")},device.android=function(){return d("android")},device.androidPhone=function(){return device.android()&&d("mobile")},device.androidTablet=function(){return device.android()&&!d("mobile")},device.blackberry=function(){return d("blackberry")||d("bb10")||d("rim")},device.blackberryPhone=function(){return device.blackberry()&&!d("tablet")},device.blackberryTablet=function(){return device.blackberry()&&d("tablet")},device.windows=function(){return d("windows")},device.windowsPhone=function(){return device.windows()&&d("phone")},device.windowsTablet=function(){return device.windows()&&d("touch")},device.fxos=function(){return d("(mobile; rv:")||d("(tablet; rv:")},device.fxosPhone=function(){return device.fxos()&&d("mobile")},device.fxosTablet=function(){return device.fxos()&&d("tablet")},device.mobile=function(){return device.androidPhone()||device.iphone()||device.ipod()||device.windowsPhone()||device.blackberryPhone()||device.fxosPhone()},device.tablet=function(){return device.ipad()||device.androidTablet()||device.blackberryTablet()||device.windowsTablet()||device.fxosTablet()},device.portrait=function(){return 90!==Math.abs(window.orientation)},device.landscape=function(){return 90===Math.abs(window.orientation)},device.noConflict=function(){return window.device=a,this},d=function(a){return-1!==j.indexOf(a)},f=function(a){var b;return b=new RegExp(a,"i"),c.className.match(b)},b=function(a){return f(a)?void 0:c.className+=" "+a},h=function(a){return f(a)?c.className=c.className.replace(a,""):void 0},device.ios()?device.ipad()?b("ios ipad tablet"):device.iphone()?b("ios iphone mobile"):device.ipod()&&b("ios ipod mobile"):device.android()?device.androidTablet()?b("android tablet"):b("android mobile"):device.blackberry()?device.blackberryTablet()?b("blackberry tablet"):b("blackberry mobile"):device.windows()?device.windowsTablet()?b("windows tablet"):device.windowsPhone()?b("windows mobile"):b("desktop"):device.fxos()?device.fxosTablet()?b("fxos tablet"):b("fxos mobile"):b("desktop"),e=function(){return device.landscape()?(h("portrait"),b("landscape")):(h("landscape"),b("portrait"))},i="onorientationchange"in window,g=i?"orientationchange":"resize",window.addEventListener?window.addEventListener(g,e,!1):window.attachEvent?window.attachEvent(g,e):window[g]=e,e()}).call(this);