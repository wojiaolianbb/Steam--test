$(function () {
    let id = location.search.split('=')[1];
    let jsonData = [{
            "img": "../img/detail.jpg"
        },
        {
            "img": "../img/detail2.jpg"
        },
        {
            "img": "../img/detail3.jpg"
        },
        {
            "img": "../img/detail4.jpg"
        },
        {
            "img": "../img/detail5.jpg"
        }
    ]
    let bannerAuto = new autoPlay("banner", 600, 337, jsonData, "slide");


    // 详情页信息获取
    $.ajax({
        type: "GET",
        url: "../lib/getitem.php",
        data: {
            id: id
        },
        dataType: "json",
        success: function (response) {
            let blockbg = $('.blockbg');
            let template1 = '';
            template1 =
                `
            <a href="javascript:;">${response.title} 系列</a>
            &gt;
            <a href="javascript:;"><span itemprop="name">${response.title}</span></a>
            `;
            blockbg.append(template1);

            let gameName = $('.game-name');
            let template2 = '';
            template2 =
                `
            <div class = "g-name" > ${response.title}----换图片是不可能再换的了，看名字</div>
            `;
            gameName.append(template2);

            let mainl = $(".main-l");
            let template3 = '';
            template3 =
                `
            <div class="serious">
                <p>在 Steam 上查看 “${response.title}” 全系列作品</p>
            </div>
            <div class="buy-this">
                <h2>购买 ${response.title}</h2>
                <i>特价促销！6月4日 截止</i>
                <div class="buy-btn clear">
                    <div class="discount"> -${response.discount}%</div>
                    <div class="money">
                        <div class="oldmoney">¥ ${response.price}</div>
                        <div class="nowmoney">¥ ${response.price}</div>
                    </div>
                    <a class="addtoCar">添加至购物车</a>
                </div>
            </div>
            <div class="buy-this">
                <h2>${response.title} </h2>
                <p>${response.details}</p>
                <div class="buy-btn clear">
                    <div class="discount"> -${response.discount}%</div>
                    <div class="money">
                        <div class="oldmoney">¥ ${response.price}</div>
                        <div class="nowmoney">¥ ${response.price}</div>
                    </div>
                    <a class="addtoCar">添加至购物车</a>
                </div>
            </div>
            <div class="buy-this">
                <h2>购买 ${response.title} - Deluxe Upgrade </h2>
                <p>购买该捆绑包即可为所有 12 件物品省 39%！</p>
                <div class="buy-btn clear">
                    <div class="discount"> -${response.discount}%</div>
                    <div class="money">
                        <div class="oldmoney">您的定价：</div>
                        <div class="nowmoney">¥ ${response.price}</div>
                    </div>
                    <a class="addtoCar">添加至购物车</a>
                </div>
            </div>
            `;
            mainl.append(template3)


            //轮播图效果
            // var jpg = response.pic.split(",")
            // let jsonData = [{
            //         "img": "../img/header_292x136 (1)01.jpg"
            //     },
            //     {
            //         "img": "../img/detail2.jpg"
            //     },
            //     {
            //         "img": "../img/detail3.jpg"
            //     },
            //     {
            //         "img": "../img/detail4.jpg"
            //     },
            //     {
            //         "img": "../img/detail5.jpg"
            //     }
            // ]
            // let bannerAuto = new autoPlay("banner", 600, 337, jsonData, "slide");
        }
    });
    $("body").on("click", ".addtoCar", function () {
        let id = location.search.split('=')[1];
        location.href = "../html/productlist.html?id=" + id
    })
})