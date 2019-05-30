$(function () {
    $('.main-home-5>ul>li').on('click', function () {
        var index = $('.main-home-5>ul>li').index(this);
        $(this).addClass('active').siblings().removeClass('active');
        $('.main-home-5>div').eq(index).addClass('show').siblings().removeClass('show');
    })
    $('.main-home .slider').slider()
    $('.tabs>li').on('click', function () {
        var index = $('.tabs>li').index(this);
        $('.slider>div').css('left', '-' + '910' * index + 'px');
        $(this).addClass('active').siblings().removeClass('active');
    });
    var jsonData = [
        {"img":"../img/轮播1.jpg"},
        {"img":"../img/轮播2.jpg"},
        {"img":"../img/轮播3.jpg"},
        {"img":"../img/轮播4.jpg"},
        {"img":"../img/轮播5.jpg"},
        {"img":"../img/轮播6.jpg"},
        {"img":"../img/轮播7.jpg"},
        {"img":"../img/轮播8.jpg"},
        {"img":"../img/轮播9.jpg"},
        {"img":"../img/轮播10.jpg"}
    ]
var bannerAuto = new autoPlay("banner",599,338,jsonData,"fade");

})