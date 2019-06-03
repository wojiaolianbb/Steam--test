$(function () {
    let id = location.search.split('=')[1];
    $.ajax({
        type: "GET",
        dataType: "json",
        data: {
            id: id
        },
        url: "../lib/getitem.php",
        success: function (response) {
            // console.log(response)
            let prolist = $('.game-detail');
            let template = '';
            template = `
                    <div class="game-pic">
                        <img src="../${(response.pic).split(",")[5]}" alt="">
                    </div>
                    <div class="game-name">
                        ${response.title}
                    </div>
                    <div class="game-price">
                        ¥ ${response.price}
                        <div class="delete-game">移除</div>
                    </div>
                    `;
            prolist.append(template);
            
            let prolist2 = $('.com-price');
            let template2 = '';
            template2 = `
            <span>
            ¥ ${response.price}
            </span>
                    `;
            prolist2.append(template2);

        }
    });

})