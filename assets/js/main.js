

function webP() { 
  var ua = navigator.userAgent.toLowerCase(); 
  if (ua.indexOf('safari') != -1) { 
    if (ua.indexOf('chrome') > -1) {
      console.log("1") // Chrome
    } else {
      $('img[src$=".webp"]').each(function(index,element) {
        element.src = element.src.replace('.webp','.png');
      });
      $('img[srcset$=".webp"]').each(function(index,element) {
        element.src = element.src.replace('.webp','.png');
      });
    }
  }
}

webP();

// video controls
$('.main-video').hover(function toggleControls() {
  if (this.hasAttribute("controls")) {
      this.removeAttribute("controls")
  } else {
      this.setAttribute("controls", "controls")
  }
})


$('.cta-slider-js').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  centerMode: true,
  centerPadding: '40px',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$('.testimonials-slider-js').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        dots: true,
        arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: true,
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
});



$('.clients-slider-js').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: true,
        arrows: false,
        slidesToShow: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        dots: true,
        arrows: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: true,
        arrows: false,
        slidesToShow: 2
      }
    }
  ]
});


