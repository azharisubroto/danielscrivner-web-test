import 'bootstrap/dist/css/bootstrap.min.css'
import 'slick-carousel/slick/slick.scss'
import '../stylesheets/style.scss'

import $ from 'jquery'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/modal'
import { jarallax } from 'jarallax'
import 'slick-carousel'
import '../../components/notes-card'
import Rellax from 'rellax'

/**
 * Hero Prallax
 * @method
 */
jarallax(document.querySelectorAll('.jarallax'), {
  speed: 0.9,
  disableParallax: /iPad|iPhone|iPod|Android/,
})

// jQuery
$(document).ready(function () {
  $('.ds-notes-slide').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          fade: false,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: false,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  })

  // Button Click
  $('button.menu').on('click', function () {
    $('.ds-menu-wrapper').toggleClass('open')
  })

  new Rellax('.rellax', {
    center: true,
  })
})
