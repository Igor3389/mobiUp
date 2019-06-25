$(document).ready(function(){
    function checkWindowScroll(onload) {
        if (onload && this.scrollTop() > 120) {
            $buttonUp.css('display', 'block');
        } else if(this.scrollTop() > 120) {
            $buttonUp.fadeIn(500);
        } else {
            $buttonUp.fadeOut(500);
        }
    }

    // Создаём кросбраузерный picture элемент
    document.createElement( "picture" );
    $('body').removeClass('no-js');

    var $buttonUp = $('.arrow');
    var $html = $('html, body');
    var $window = $(window);

    checkWindowScroll.call($window, true);

    // Отслеживаем появление стрелки "наверх" + паралакс эфект
    $window.on('scroll', function () {
        checkWindowScroll.call($(this));
        $('body').css('background-position', 'right ' + ($(this).scrollTop()/2 - 465) + 'px top ' + ($(this).scrollTop()/2 - 333) + 'px, left ' + ($(this).scrollTop()/2 - 465) + 'px bottom ' + ($(this).scrollTop()/2 - 333) + 'px');
    });

    $buttonUp.on('click', function () {
        $html.animate({
            scrollTop: 0
        }, 400);
    });

    // Аккордион
    $('.navigation__toggle').on('click', function () {
        $('.navigation__list').toggleClass('active');
    });

    var priceHeader = $('.price__header');
    priceHeader.on('click', function () {
        $('.price__block:visible').not($(this).next()).slideUp(300);
        $(this).next().slideToggle(300, function () {
            $(this).prev().children('.price__arrow, .price__arrow--green').toggleClass('price__arrow--rotate');
        });
    });

    priceHeader.hover(function () {
        $(this).children('.price__arrow').animate({'opacity': 0}, 300);
        $(this).children('.price__arrow--green').animate({'opacity': 1}, 300);
    },
    function () {
        $(this).children('.price__arrow').animate({'opacity': 1}, 300);
        $(this).children('.price__arrow--green').animate({'opacity': 0}, 300);

    });

    //Анимация эффектов наведения
    $('.navigation__link').hover(function () {
            $(this).animate({'color': '#0092c2'}, 300);
        },
        function () {
            $(this).animate({'color': '#00b7f4'}, 300);
        }
    );

    $('.navigation__button').hover(function () {
            $(this).animate({'background-color': '#008bb9'}, 300);
        },
        function () {
            $(this).animate({'background-color': '#00b3ef'}, 300);
        }
    );

    $('.help').hover(function () {
            $(this).animate({'background-color': '#00b7f4', 'color': '#ffffff'}, 300);
        },
        function () {
            $(this).animate({'background-color': '#ffffff', 'color': '#5b5b5b'}, 300);
        }
    );

    $('.phone').hover(function () {
            $(this).animate({'color': '#00aee8'}, 300);
        },
        function () {
            $(this).animate({'color': '#1f1f1f'}, 300);
        }
    );

    $('.social').hover(function () {
            $(this).animate({'background-color': 'rgba(255, 255, 255, 0.5)'}, 300);
        },
        function () {
            $(this).animate({'background-color': 'transparent'}, 300);
        }
    );
});