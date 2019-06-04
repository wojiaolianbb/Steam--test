;
$(function () {
    // 登陆状态
    if (cookie.get("username")) {
        $(".login-1>a").html(cookie.get("username"))
    }
    $(".login-out").on("click", function () {
        location.href="../html/index.html"
        alert('点击确认退出')
        cookie.remove("username")
    })
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
            mainl.append(template3).find(".addtoCar").on("click", function () {
                addShopCar(response.id, response.price);
                location.href = "../html/productlist.html"
            })
        }
    });

    function addShopCar(id, price) {
        var shop = cookie.get('shop'); //从cookie获取shop
        var product = {
            "id": id,
            "price": price,
        };
        if (shop) {
            shop = JSON.parse(shop); // cookie中如果有数据 这个数据是json字符串 转成对象

            if (shop.some(elm => elm.id == id)) {
                shop.forEach(function (elm, i) {
                    elm.id == id ? elm.num = 1 : null;
                });
            } else {
                shop.push(product);
            }
            cookie.set('shop', JSON.stringify(shop), 1);
        } else {
            shop = [];
            shop.push(product);
            cookie.set('shop', JSON.stringify(shop), 1);
        }
    }
})