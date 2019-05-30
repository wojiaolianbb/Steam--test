(function () {
	function autoPlay(container, Wimg, Himg, jsonSrc, plan) {
		this.container = container;
		this.Wimg = Wimg;
		this.Himg = Himg;
		this.jasonData = jsonSrc;
		this.plan = plan || "fade";

		this.banner = document.getElementById(container);
		this.bannerChildren = utils.children(this.banner);
		this.bannerInner = this.bannerChildren[0];
		this.oUls = this.bannerChildren[1];
		this.left = this.bannerChildren[2];
		this.right = this.bannerChildren[3];
		this.oLis = this.oUls.getElementsByTagName("li");
		this.imgs = bannerInner.getElementsByTagName("img");
		this.step = 0;
		this.timer = null;
		this.curStep = 0;
		this.nexStep = 1;
		this.flag = 1;
		this.init();
	}
	autoPlay.prototype = {
		constructor: autoPlay,
		//数据绑定
		setData: function () {
			var _this = this;
			var str = "",
				str2 = "",
				str3 = "";
			for (var i = 0; i < _this.jasonData.length; i++) {
				var curImg = _this.jasonData[i];

				i === 0 ? str += "<div class='bg'><img src='" + curImg.img + "' /> </div>" :
					str += "<div><img src='" + curImg.img + "' /> </div>";
				i === 0 ? str2 += "<li class='bg'></li>" : str2 += "<li></li>"
			}
			if (this.plan !== "fade") {
				str += "<div><img src='" + _this.jasonData[0].img + "'  /> </div>";
				str3 += "<div><img src='" + _this.jasonData[this.jasonData.length - 1].img + "' /> </div>"
				str3 += str;
				str = str3;
			}
			this.bannerInner.innerHTML = str;

			this.oUls.innerHTML = str2;
			str = null;
			str2 = null;
			if (this.plan == "fade") {
				utils.sCss(this.bannerInner, {
					"width": this.Wimg,
					"height": this.Himg
				});
				for (i = 0; i < this.imgs.length; i++) {
					utils.sCss(this.imgs[i].parentNode, "position", "absolute");
				}
			} else {
				utils.sCss(this.bannerInner, {
					"width": this.Wimg * this.imgs.length,
					"height": this.Himg
				});
				for (i = 0; i < this.imgs.length; i++) {
					utils.sCss(this.imgs[i].parentNode, "display", "block");
				}
			}
		},
		//图片延迟加载
		delayImg: function () {
			if (this.plan === "slide") {
				utils.sCss(this.bannerInner, "left", -this.Wimg);

			}
			for (var i = 0; i < this.imgs.length; i++) {
				this.imgs[i].index = i;
			}
			// var _this=this;
			// for(var i=0;i<this.imgs.length;i++){
			// 	~function(i){
			// 		var cImg = new Image;
			// 		cImg.src=_this.imgs[i].getAttribute("trueImg");
			// 		cImg.onload=function(){
			// 			_this.imgs[i].src=this.src;
			// 			_this.imgs[i].index=i;
			// 			curImg=null;
			// 			utils.sCss(_this.imgs[i],"display","block");
			// 			utils.move(_this.imgs[i],{"opacity":"1"},1000);
			// 		}

			// 	}(i)
			// }
		},
		//轮播方法
		move: function () {
			if (this.plan == "fade") {
				this.fade();
			} else {
				this.slide();
				this.flag = 0; //通过标记，让动画完成之后再改变标记，来实现连点，以防连点过快；
			}
		},
		//滑动
		slide: function () {
			var _this = this;
			this.curStep = this.nexStep;
			this.nexStep++;
			if (this.curStep >= this.imgs.length - 1) {
				utils.move(this.bannerInner, {
					"left": -(this.curStep) * this.Wimg
				}, 1000, function () {
					utils.sCss(this, "left", -_this.Wimg);
					_this.nexStep = 2;
					_this.flag = 1;
				});
			} else if (this.curStep == 0) {
				utils.move(this.bannerInner, {
					"left": -(this.curStep) * this.Wimg
				}, 1000, function () {
					utils.sCss(this, "left", -_this.Wimg * (_this.imgs.length - 2));
					_this.nexStep = _this.imgs.length - 1;
					_this.flag = 1;

				});
			} else {
				utils.move(this.bannerInner, {
					"left": -this.curStep * this.Wimg
				}, 1000, function () {
					_this.flag = 1;
				});
			}
			//焦点对齐，如果是slide实际长度比显示长度多2；
			for (let k = 0; k < this.oLis.length; k++) {
				this.step = this.imgs[this.curStep].index - 1;
				if (this.step == this.imgs.length - 2) {
					this.step = 0;
				}
				if (this.step < 0) {
					this.step = this.imgs.length - 3;
				}
				k == this.step ? this.oLis[k].className = "bg" : this.oLis[k].className = " ";
			}
		},
		//淡入淡出
		fade: function () {
			this.curStep = this.nexStep;
			this.nexStep++;
			if (this.nexStep >= this.imgs.length) {
				this.nexStep = 0;
			}
			this.imgs[this.curStep].parentNode.style.display = "block";
			var imgAry = utils.siblings(this.imgs[this.curStep].parentNode);
			for (let i = 0; i < imgAry.length; i++) {
				imgAry[i].style.display = "none";

			}
			for (let k = 0; k < this.oLis.length; k++) {
				k == this.curStep ? this.oLis[k].className = "bg" : this.oLis[k].className = " ";
			}
		},
		bind: function () {
			var _this = this;
			this.banner.onmouseenter = () => {
				clearInterval(this.timer);
			};
			this.banner.onmouseleave = () => {

				this.timer = window.setInterval(function () {
					_this.move();
				}, 2000);
			};

			this.right.onclick = () => {
				if (this.flag) {
					this.move();
				}
			};
			this.left.onclick = () => {
				var _this = this;
				if (this.flag) {
					this.nexStep = this.nexStep - 2;
					if (this.nexStep < 0) {
						this.nexStep = this.imgs.length - 1;
					}
					if (this.plan == "fade") {
						this.fade();
						if (this.nexStep == 0) {
							this.nexStep = this.imgs.length;
						}

					} else {
						this.slide();
						this.flag = 0; //通过标记，让动画完成之后再改变标记，来实现连点，以防连点过快；
					}
				}
			};
			//鼠标进入圆点事件；
			var liAry = [].slice.call(this.oLis);
			for (var i = 0; i < liAry.length; i++) {
				liAry[i].index = i;
				liAry[i].onmouseenter = function () {
					_this.nexStep = this.index;
					if (_this.plan == "fade") {
						_this.fade();
					} else {
						_this.nexStep++;
						_this.slide();
					}
				}
			}
		},
		//初始化
		init: function () {
			var _this = this;
			this.setData();
			_this.delayImg();
			this.timer = window.setInterval(function () {
				_this.move();
			}, 2000);
			this.bind();
		}

	}
	window.autoPlay = autoPlay;
})()