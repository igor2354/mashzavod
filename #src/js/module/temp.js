$(document).ready(function () {
  //=====================HRADER SCROLL================================
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

  $(window).on("load", function () {
    if ($(this).scrollTop() > 141) {
      $(".header").addClass("scrolled");
    }
  });

  //=====================IMG TO BACKGROUND CSS================================
  $.each($(".ibg"), function (index, val) {
    if ($(this).find("img").length > 0) {
      $(this).css("background", 'url("' + $(this).find("img").attr("src") + '") no-repeat center / cover');
    }
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
});
