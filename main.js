$('.responsive2').slick({
  dots: true,
  infinite: true,
  speed: 300,
  // autoplay:true,
  nextArrow: $('.next-scrool'),
  prevArrow: $('.arrow-link-left1'),
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.center').slick({
  centerMode: true,
  centerPadding: '0px',
  nextArrow: $('.next-btn'),
  prevArrow: $('.prev-btn'),
  slidesToShow: 3,
  responsive: [{
      breakpoint: 780,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: 0,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: 0,
        slidesToShow: 1
      }
    }
  ]
});

$('.person').slick({
  dots: true,
  infinite: true,
  speed: 300,
  // autoplay:true,
  nextArrow: $('.next-scrool-person'),
  prevArrow: $('.arrow-link-left1'),
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

let sidebarLink = document.querySelectorAll('.sidebar-link');

function allclassremove(clickedElement) {
  sidebarLink.forEach(item => {
    if (item.dataset.blockInfo != clickedElement.dataset.blockInfo) {
      item.classList.remove('opened');
    }
  })
}

sidebarLink.forEach((item, index) => {
  item.addEventListener('click', function (e) {
    allclassremove(item);
    if (index == item.dataset.blockInfo) {
      item.classList.toggle('opened');
    }
  })
});

let topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
  if (window.scrollY > 1000) {
    topLink.classList.add('opened');
  } else {
    topLink.classList.remove('opened');
  }
})