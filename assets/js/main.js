
$(document).ready(function () {
  'use strict';

  // Sticky Menu
  $(window).on('scroll', function () {
    if ($(this).scrollTop() >= 200) {
      $('.navbar').addClass('fixed-top');
    } else if ($(this).scrollTop() == 0) {
      $('.navbar').removeClass('fixed-top');
    }
  });
  
  // Scroll back to top
  let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#55e6a5 ${scrollValue}%, #171f38 ${scrollValue}%)`;
  };
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;

  // Hamburger Menu Trigger
  const trigger = document.getElementById('js-nav-trigger');
  trigger.addEventListener('click', function (e) {
    e.preventDefault();
    trigger.classList.toggle('is-active');
  }, false);

  // Add smooth scrolling to all links
  $(".navbar-nav .nav-link").click (function () {
    $('html, body').animate({
      scrollTop: $('#' + $(this).data('value')).offset().top - 89
    }, 100);
  });

  // testimonialsSwiper
  const swiper = new Swiper('.testimonialsSwiper', {
    spaceBetween: 100,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    navigation: {
      nextEl: ".fi-rr-arrow-right",
      prevEl: ".fi-rr-arrow-left",
    },
  });

  var interestSwiper = new Swiper(".interestSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: false,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  });

  // mixitup
  var containerEl = document.querySelector('.auction-filter');
  var mixer = mixitup(containerEl);
});

const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let hrPosition = (hr*360/12) + (min*(360/60)/12);
let minPosition = (min*360/60 )+ (sec*(360/60)/60);
let secPosition = sec*360/60;

function runThetime() {
  hrPosition = hrPosition+(3/360);
  minPosition = minPosition+(6/60);
  secPosition = secPosition+(6);

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runThetime, 1000);

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})  