function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.burger-menu-button', '.burger-menu-lines');
  let links = menu.find('.nav-link');
  let overlay = menu.find('.burger-menu-overlay');
  
  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
  
  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());
  
  function toggleMenu(){
    menu.toggleClass('burger-menu-active');
    
    if (menu.hasClass('burger-menu-active')) {
      $('body').css('overlow', 'hidden');
    } else {
      $('body').css('overlow', 'visible');
    }
  }
}

burgerMenu('.burger-menu');
$(function() {

    var header = $("#header");
    var intro = $("#intro");
    var introH = intro.innerHeight();
    var scrollPos = $(window).scrollTop();
    var nav = $("#nav");
    var navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if( scrollPos >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var elementId = $(this).data('scroll');
        var elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);
    });

    navToggle.on("click", function(event) {
        event.preventDefault();
        nav.toggleClass("show");
    });

});
