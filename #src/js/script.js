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
  $(".partners__slider").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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

  $(".reviews__slider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".blog__slider").slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    appendArrows: $(".blog__trigger"),
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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

  //======= SPINNUBER
  let countbox = ".contact__column";
  let show = true;
  $(window).on("scroll load resize", function () {
    if (!show) return false;
    let w_top = $(window).scrollTop();
    let e_top = $(countbox).offset().top;
    let w_height = $(window).height();
    let d_height = $(document).height();
    let e_height = $(countbox).outerHeight();

    if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
      $(".contact__text-1 b").spincrement({
        thousandSeparator: "",
        duration: 3000,
      });

      show = false;
    }
  });
  //====== MACH
  let match = [window.matchMedia("(min-width: 993px)"), window.matchMedia("(min-width: 769px)")];
  function movingNav() {
    if (!match[0].matches) {
      $(".header__column-2").prepend($(".nav__group"));
    } else {
      $(".preview__nav").prepend($(".nav__group"));
    }
  }
  match[0].addListener(movingNav);
  movingNav();

  function movingText() {
    if (!match[1].matches) {
      $(".preview__column-2").append($(".preview__text-1"));
    } else {
      $(".preview__column-1").append($(".preview__text-1"));
    }
  }
  match[1].addListener(movingText);
  movingText();

  //====== PARALAX
  let bg = $(".preview__build-bg");
  $(document).on("mousemove", function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg.css({ transform: `translate(${-x - 50}%, ${-y * 30}px)` });
  });
});
