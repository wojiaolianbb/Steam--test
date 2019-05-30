$(function () {
    $('.main-home-5>ul>li').on('click', function () {
        var index = $('.main-home-5>ul>li').index(this);
        $(this).addClass('active').siblings().removeClass('active');
        $('.main-home-5>div').eq(index).addClass('show').siblings().removeClass('show');
    })
    $('.main-home .slider').slider()
    $('.tabs>li').on('click', function () {
        var index = $('.tabs>li').index(this);
// -------------问题？--------------------------------------------------------------------------------------------------
        $('.slider>div').css('left', '-' + '910' * index + 'px');
        $(this).addClass('active').siblings().removeClass('active');
    });
})