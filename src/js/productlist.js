$(function () {
    if (cookie.get("username")) {
        $(".login-1>a").html(cookie.get("username"))
    }
    $(".login-out").on("click", function () {
        location.href="../html/index.html"
        alert('点击确认退出')
        cookie.remove("username")
    })
    var shop = cookie.get("shop");
    var price = [];
    if (shop) {
        shop = JSON.parse(shop);
        var idList = shop.map(elm => elm.id).join();
        $.ajax({
            type: "get",
            url: "../lib/shop.php",
            data: {
                "idList": idList
            },
            dataType: "json",
            success: function (response) {
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
                            移除
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
    $('.game-detail').on("click", ".delete-game", function () {
        var index = $(".delete-game").index(this);
        console.log(idList)
        console.log(index)
        // var aaaa=$.parseJSON(cookie.get("shop")).splice(index,1)
        console.log($.parseJSON(cookie.get("shop")));
        // console.log($(this).parents(".game1 ").index($(this)));
        // shop=shop.splice(index, 1);
        // window.location.reload()
        // location.reload()
    })
    $(".del-all").on("click", function () {
        cookie.remove("shop");
        location.reload()
    })
    $(".continue").on("click", function () {
        location.href = "../html/index.html"
    })
})