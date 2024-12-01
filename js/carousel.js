$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      dots: false,
      margin: 20,
      nav: true,
      navText: ["<", ">"],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        900: {
          items: 3,
        },
      },
    });
  });