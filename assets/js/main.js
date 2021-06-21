jQuery(function ($) {


  function onScroll(event){
			//add class active when click on navbar item
		var scrollPosition = $(document).scrollTop();
		$('.navbar-collapse .nav-item a[href^="#"').each(function () {
			console.log($(this).attr('href')); 
		  var refElement = $($(this).attr("href"));
		  if (refElement.length&&refElement.position().top <= scrollPosition) {
			$('.navbar-collapse .nav-item ').removeClass("active");
			$(this).parent().addClass("active");
		  }
		  else{
			$(this).removeClass("active");
		  }
  
		});
	  }
    $(document).on("scroll", onScroll);
//animate to section when click
    $('.navbar-collapse ul li a').on('click', function () {
      $('html, body').animate({ scrollTop: $(this.hash).offset().top-5 }, 1000);
      $('.navbar-collapse.collapse.in').removeClass('in');
      $('.navbar-collapse .nav-item ').removeClass("active");
			$(this).parent().addClass("active");
      return false;
    });
        // add fix navbar when scroll down and remove it on top 
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();

    if (scrollTop > $('header').height()) {
      $('header').addClass('scrollNav');

    }

    else {
      $('header').removeClass('scrollNav');
    }

  });

    
  //close mobile navbar when chooe one of items
  $(".navbar .nav-link").click(function(){
    $(".collapse").removeClass("show");
  });
  $(".bookmark").click(function(){
    $('.bookmark').not(this).find(".fa-bookmark").removeClass(' far fa-bookmark').addClass('fas fa-bookmark"');
    $(this).find(".fa-bookmark").toggleClass('far fa-bookmark fas fa-bookmark');
  })

  $('.bookSlider').owlCarousel({
    autoplay: true,
    loop: false,
    rtl:true,
    nav:true,
    dots:true,

    responsive: {
      0: {
        items: 1,
        margin: 0,

      },
      600: {
        items: 2,
        margin: 5,

      },
      1000: {
        items: 2,
        margin: 15,
      },
      1200:{
        items:3,
        margin: 15,

      }

    }
  });
  $('.blogslider').owlCarousel({
    autoplay: true,
    loop: false,
    rtl:true,
    nav:true,
    dots:true,

    responsive: {
      0: {
        items: 1,
        margin:0,

      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
        margin: 15,


      },
      1200:{
        items:3,
        margin: 15,

      }

      

    }
  });
  $('.quotationSlider').owlCarousel({
    autoplay: true,
    loop: false,
    items:1,
    rtl:true,
    nav:false,
    dots:true,
  });
  $('.opinionSlider').owlCarousel({
    autoplay: true,
    loop: true,
    rtl:true,
    nav:false,
    dots:false,
    items:1,

  });
    // declare rating 
    $(".my-rating").starRating({
      starSize: 16,
      rtl: true,
      activeColor: '#FFAE01',
      hoverColor: '#F9D674',
      ratedColor: '##FFAE01',
      emptyColor: '#F3F3F3',
      starShape: 'rounded',
      useGradient: false,
      disableAfterRate: false,
  
      callback: function (currentRating, $el) { }
    });
});

