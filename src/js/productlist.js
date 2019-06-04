$(function () {

    var shop = cookie.get("shop")
    var price = [];
    if (shop) {
        shop = JSON.parse(shop);
        var idList = shop.map(elm => elm.id).join();
        console.log(idList)
        $.ajax({
            type: "get",
            url: "../lib/shop.php",
            data: {
                "idList": idList
            },
            dataType: "json",
            success: function (response) {
                console.log(response)
                var prolist = $('.game-detail');
                var template = '';
                response.forEach(function (elm) {
                    template =
                        `
                    <div class = "game1 clear" >
                        <div class = "game-pic" >
                            <img src = "../${(elm.pic).split(",")[5]}" alt = "" >
                        </div>
                        <div class = "game-name" >
                            ${elm.title}
                        </div>
                        <div class = "game-price" > 
                            ¥${elm.price} 
                            <div class = "delete-game">
                            
                            </div>
                        </div>
                    </div>
                    `
                    price.push(elm.price)
                    prolist.append(template);
                })

                var prolist1 = $('.com-price');
                var template1 = '';
                var res = 0;
                for (let i = 0; i < price.length; i++) {
                    res += parseFloat(price[i])
                }
                template1 =
                    `
                    预计总额<sup>${$(".game-pic").length}</sup>
                    <span>
                        ¥${res} 
                    </span>
                `
                prolist1.append(template1);

            }
        });
    }
    // 删除单个物品
    $('.game-detail').on("click", ".delete-game", function () {
        var index = $(this).parents(".game-detail").children(".game1")
        // .attr()
        console.log(index)
        // $.parseJSON(cookie.get('shop')).forEach(function (elm, i) {
        //     if (elm.id == index) {
        //         var shop = $.parseJSON(cookie.get('shop'))
        //         shop.splice(i, 1);
        //         cookie.set('shop', JSON.stringify(shop), 1)
        //         location.reload();
        //     }
        // })
    })
    // 清除所有购物车物品
    $(".del-all").on("click", function () {
        cookie.remove("shop");
        location.reload()
    })
    // 跳转首页继续购买
    $(".continue").on("click", function () {
        location.href = "../html/index.html"
    })
    // 获取用户登录状态
    if (cookie.get("username")) {
        $(".login-1>a").html(cookie.get("username"))
    }
    $(".login-out").on("click", function () {
        location.href = "../html/index.html"
        alert('点击确认退出')
        cookie.remove("username")
    })
    // 结算
    $(".for-self").on("click", function () {
        alert("购买成功~点击开始玩游戏吧~");
        alert("别太小气啦，给朋友也买一份一起玩呗")
        location.href = "../html/index.html"
        cookie.remove("shop");
    })
    $(".for-girt").on("click", function () {
        alert("购买成功.");
        alert("你真是太棒啦")
        location.href = "../html/index.html"
        cookie.remove("shop");
    })
})