  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });



var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });


    var swiper = new Swiper('.swiper-container2', {
      slidesPerView: 4,
      spaceBetween: 30,
          slidesPerGroup: 4,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },


     breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,

        },
      
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
          slidesPerGroup: 1,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
          slidesPerGroup: 1,
        }
      }


      
    });

 var swiper = new Swiper('.swiper-alvaro', {
      slidesPerView: 2, 
      spaceBetween: 4,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
   pagination: {
        el: '.swiper-pagination',
        clickable: false,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
     breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });



// Scroll Top 
// Comprobar si estamos, al menos, 100 px por debajo de la posición top
// para mostrar o esconder el botón
$(window).scroll(function() {

    if ($(this).scrollTop() > 100) {

        $('.scroll-to-top').fadeIn();

    } else {

        $('.scroll-to-top').fadeOut();

    }

});

// al hacer click, animar el scroll hacia arriba
$('.scroll-to-top').click(function(e) {

    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 800);

});


