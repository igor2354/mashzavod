$(document).ready(function () {
  //======= HRADER SCROLL
  $(window).on("scroll", function () {
    let scrolled = $(this).scrollTop();
    if (scrolled > 141) {
      $(".header").addClass("scrolled");
      $(".header").next().addClass("scrolled");
    }
    if (scrolled <= 141) {
      $(".header").removeClass("scrolled");
      $(".header").next().removeClass("scrolled");
    }
  });
  //====== BURGER
  $(".header__burger").on("click", function () {
    $(this).toggleClass("active");
    $("body").toggleClass("lock");
    $(".header__column-2").toggleClass("active");
  });
  //====== SELECT
  $(".select__input").on("click", function () {
    $(this).parent().find($(".select__menu")).toggleClass("active");
    $(this).parent().find($(".select__text")).toggleClass("active");
  });

  $(".select__option").on("click", function () {
    if ($(this).parents(".header__select")[0] == $(".header__select")[0]) {
      $(this).parents(".select").find($(".select__text > span")).text($(this).text());
    } else {
      $(this).parents(".select").find($(".select__text")).text($(this).text());
    }
    $(this).parents(".select").find(".select__option").removeClass("select__option_selected");
    $(this).addClass("select__option_selected");
    $(this).parents(".select").find($(".select__menu")).removeClass("active");
    $(this).parents(".select").find($(".select__text")).removeClass("active");
  });

  //====SLIDER

  let mySwiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(".watch__slider").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //=====CATEGORIES
  $(".categories__name").on("click", function () {
    $(this).toggleClass("active");
    $(this).next().slideToggle();
  });
  $(".categories__item").on("click", function () {
    $(".categories__item").removeClass("current");
    $(this).addClass("current");
  });

  //=====CATEGORIES MOBILE
  $(".product__mobli-filter").on("click", function () {
    $(".categories").addClass("open");
    $("body").addClass("lock");
  });

  $(".categories__mobil-name > span").on("click", function () {
    $(".categories").removeClass("open");
    $("body").removeClass("lock");
  });

  //===============ANIMATION SCROLL======================
  const animItems = $(".anim-items");

  if (animItems.length > 0) {
    $(window).on("scroll", animOnScroll);
    function animOnScroll() {
      $.each(animItems, function (index, val) {
        const animItem = animItems.eq(index);
        const animItemHeight = animItem.innerHeight();
        const animItemOffset = animItem.offset().top;
        const animStart = 10;

        let animItemPoint = $(window).height() - animItemHeight / animStart;

        if (animItemHeight > $(window).height()) {
          animItemPoint = $(window).height() - $(window).height() / animStart;
        }

        if ($(window).scrollTop() > animItemOffset - animItemPoint && $(window).scrollTop() < animItemOffset + animItemHeight) {
          animItem.addClass("animate");
        } else {
          if (!animItem.hasClass("anim-no-scrollTop")) {
            animItem.removeClass("animate");
          }
        }
      });
    }
    setTimeout(animOnScroll, 0);
  }
  //====== MACH
  let match = [window.matchMedia("(min-width: 993px)")];
  function movingNav() {
    if (!match[0].matches) {
      $(".header__column-2").prepend($(".nav__group"));
      $(".promo__body").append($(".service__nav"));
      $(".promo__image").append($(".promo__prev"));
      $(".promo__image").append($(".promo__next"));
    } else {
      $(".service__nav").prepend($(".nav__group"));
      $(".service__row-1").append($(".service__nav"));
      $(".promo__arrow").append($(".promo__prev"));
      $(".promo__arrow").append($(".promo__next"));
    }
  }
  match[0].addListener(movingNav);
  movingNav();
});
