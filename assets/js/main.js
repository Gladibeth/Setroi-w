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
        centerPadding: '30px',
        slidesToShow: 1
      }
    }
  ]
});