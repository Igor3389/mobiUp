$(document).ready(function(){
    var ua = window.navigator.userAgent.toLowerCase(),
        is_ie = (/trident/gi).test(ua) || (/msie/gi).test(ua);
    if (is_ie) {
        document.createElement( "picture" );

        $('.slider__text').css('margin-bottom', '120px');
        //$('.cart__weight').css('width', '130px');
        //$('.cart__price').css('width', '70px');
        //
        //var sociaIcons = $('.social__icon');
        //sociaIcons.css({'position': 'relative',
        //                'left': '0.5px'});
        //var sociaLinks = $('.social__link');
        //var isIconDown = false;
        //sociaIcons.on('mousedown', function () {
        //    $(this).css({'fill': 'rgba(255, 255, 255, 0.5)'});
        //    isIconDown = true;
        //});
        //$('html').on('mousemove', function () {
        //    isIconDown = false;
        //});
        //sociaLinks.on('mouseout', function () {
        //    $(this).children().css('fill', 'rgba(255, 255, 255, 0.8)');
        //    isIconDown = false;
        //});
        //sociaIcons.on('mousemove', function () {
        //    if(!isIconDown) {
        //        $(this).css('fill', 'rgba(255, 255, 255, 1)');
        //    }
        //});

        //var authorLink = $('.main-footer__author-link');
        //var authorIcon = $('.main-footer__author-icon');
        //var isAuthorDown = false;
        //authorLink.on('mousedown', function () {
        //    $(this).children().css({fill: '#a9a9a9'});
        //    isAuthorDown = true;
        //});
        //$('html').on('mousemove', function () {
        //    isAuthorDown = false;
        //});
        //authorLink.on('mouseout', function () {
        //    $(this).children().css({fill: '#000000'});
        //    isAuthorDown = false;
        //});
        //authorLink.on('mousemove', function () {
        //    if(!isAuthorDown) {
        //        $(this).children().css({fill: '#81b3d2'});
        //    }
        //});

        //var IsHomeDown = false;
        //var authorIcon = $('.main-footer__author-icon');
        //authorIcon.on('mousedown', function () {
        //    $(this).css({'opacity': 0.1});
        //    IsHomeDown = true;
        //});
        //authorIcon.on('mouseout', function () {
        //        $(this).css('opacity', 1);
        //        IsHomeDown = false;
        //
        //});
        //authorIcon.on('mousemove', function () {
        //    if (!IsHomeDown) {
        //        $(this).css({'opacity': 0.3});
        //    }
        //});
        //
        //var worksLink = $('.categories__link');
        //var isLinkDown = false;
        //worksLink.on('mousedown', function () {
        //    $(this).children('.categories__icon').css('fill', 'rgba(0, 0, 0, 0.1)');
        //    $(this).children('.categories__subtitle').css('opacity', 0.1);
        //});
        //worksLink.on('mouseout', function () {
        //    $(this).children('.categories__icon').css('fill', 'rgba(0, 0, 0, 1)');
        //    $(this).children('.categories__subtitle').css('opacity', 1);
        //});
        //
        //$('.range__field').css('padding', '2px 5px 9px');
    }
});
