;
$(function () {
    // 登陆
    $(".login-in").on("click", function () {
        let src = document.createElement("script")
        src.src = "http://127.0.0.1:8080/program/steam/src/lib/checkname.php?username=" + $("#username").val() + "&password=" + $("#password").val() + "&callback=callback";
        // src.src = "E:/1.培训/JS/program/steam/src/lib/checkname.php?username=" + $("#username").val() + "&password=" + $("#password").val() + "&callback=callback";        document.body.appendChild(src);
        document.body.appendChild(src);

        function callback(data) {
            if (data.has) {
                alert("登陆成功,3秒后跳转")
                setTimeout(() => {
                    location.href = "../html/index.html"
                }, 2000)
            } else {
                alert("登陆失败，点击加入我们注册使用!")
            }

        }
        window.callback = callback;
        cookie.set("username", $("#username").val(), 7)
        $(".login-1>a").html(cookie.get("username"))
    })



    // 注册
    $(".join").on("click", function () {
        location.href = "./join.html";
    })
    var user = $("#username").val();
    var pwd = $("#password").val();
    var cpwd = $("#checkpass").val();
    var reg = {
        'username': /^\w{6,}$/, //输入起码六位的用户名，字母数字下划线；
        'password': /^\w{6,}$/, //输入起码六位 的 密码，字母数字 下划线
        'password-yz': /^\w{6,}$/, //验证密码，字母数字 下划线
    }
    // 除了密码外所有的input内容填写正确
    $("input[id!='checkpass']").on("keyup", function () {
        if (reg[this.id].test(this.value)) {
            this.dataset.pass = "true";
            $(this).next().html('✔');
        } else {
            this.dataset.pass = "false";
            $(this).next().html('errow');
        }
        check()
    })
    // 判断两个密码是否相同
    $("#checkpass").on("keyup", function () {
        if ($(this).val() === $('#password').val()) {
            this.dataset.pass = "true";
            checkpass.innerHTML = "通过";
            $("#checkpass").next().html('✔')
        } else {
            this.dataset.pass = "false";
            checkpass.innerHTML = "未通过";
            $("#checkpass").next().html('errow')
        }
        check()
    })
    // 判断是否所有的input是否都填写，填写了发jsonp请求
    function check() {
        if ($('input[data-pass="true"]').length == 3) {
            $("#joinus").on("click", function () {
                let script = document.createElement("script")
                script.src = "http://127.0.0.1:8080/program/steam/src/lib/login.php?username=" + $("#username").val() + "&password=" + $("#password").val() + "&callback=callback";
                document.body.appendChild(script);

                function callback(data) {
                    if (data.has) {
                        alert("注册成功,点击后跳转登陆")
                        location.href = "../html/login.html"
                    }
                }
                window.callback = callback;
            })
        }
    }
})