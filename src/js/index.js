;
$(function () {
    // 轮播调用
    $('.main-home .slider').slider()

    // 轮播下面的小点移动特效------------!有BUG，点击后会进入bug，图片未能显示完全
    $('.tabs>li').on('click', function () {
        var index = $('.tabs>li').index(this);
        $('.slider>div').css('left', '-' + '910' * index + 'px');
        $(this).addClass('active').siblings().removeClass('active');
    });
    // jsonp发送请求页面数据

    $.ajax({
        type: "GET",
        url: "../lib/getdata.php",
        data: "json",
        dataType: "json",
        success: function (response) {
            var prolist = $('.target-li');
            var template = '';
            response.forEach(function (elm, i) {
                template = `
                    <li>
                    <a href="detail.html?id=${elm.id}">
                        <img src="../${elm.pic}" alt="${elm.details}">
                    </a>
                    <div class="dailydeal clear">
                        <div class="dailytime">
                            <span>
                                今日特惠!</br>
                                <div class="timeout"> 31:04:42</div>
                            </span>
                        </div>
                        <div class="priceradio">-${elm.price}%</div>
                    </div>
                   </li>
                `;
                prolist.append(template);   
            });
        }
    });








    // tab切换
    $('.main-home-5>ul>li').on('click', function () {
        var index = $('.main-home-5>ul>li').index(this);
        $(this).addClass('active').siblings().removeClass('active');
        $('.main-home-5>div').eq(index).addClass('show').siblings().removeClass('show');
    })


})