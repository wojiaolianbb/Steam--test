var utils = (function(){
	var flag="getComputedStyle" in window;
	//获取所有子元素，或者特定标签的子元素
	function children(curEle, tagName) {
				var ary = [];
				//检测兼容性在ie9以下的话用自定义方法
				if(!flag){
					var nodeList = curEle.childNodes;
					for(var i =0, len = NodeList.length;i<len;i++){
						var curNode = nodeList[i];
						curNode.nodeType === 1 ? ary[ary.length] =curNode : null;
					}
					nodeList = null;
				}else{
					ary = [].slice.call(curEle.children);
				}
				if(typeof tagName === "string"){
					for(var k = 0; k<ary.length;k++){
						var curEleNode = ary[k];
						if(curEleNode.nodeName.toLowerCase() !== tagName.toLowerCase()){
							ary.splice(k,1);
							k--;
						}
					}
				}
				return ary;
			}
	//获取上一个哥哥元素
	function prev(curEle){
		if(flag){
			return curEle.previousElementSibling;
		}
		var pre = curEle.previousSibling;
		while(pre && pre.nodeType !==1){
			pre=pre.previousSibling;
		}
		return pre;
	}
	//获取下一个弟弟元素
	function next(curEle){
		if(flag){
			return curEle.nextElementSibling;
		}
		var nex = curEle.nextSibling;
		while(nex && nex.nodeType !==1){
			nex=nex.nextSibling;
		}
		return nex;
	}
	//获取所有哥哥节点
	function prevAll(curEle){
		var ary=[];
		var pre = this.prev(curEle);
		while(pre){
			ary.unshift(pre);
			pre=this.prev(pre);
		}
		return ary;
	}
	//获取所有弟弟元素
	function nextAll(curEle){
		var ary =[];
		var nex = this.next(curEle);
		while(nex){
			ary.push(nex);
			nex=this.next(nex);
		}
		return ary;
	}
	//获取相邻两个兄弟元素
	function sibling(curEle){
		var ary = [];
		var pre=this.prev(curEle);
		var nex=this.next(curEle);
		pre ? ary.push(pre) : null;
		nex ? ary.push(nex) : null;
		return ary;
	}
	//获取所有兄弟节点
	function siblings(curEle){
		return this.prevAll(curEle).concat(this.nextAll(curEle));
	}
	//获取当前元素下标
	function index(curEle){
		return this.prevAll(curEle).length;
	}
	//获取第一个子元素
	function firstChild(curEle){
		var chs = this.children(curEle);

		return chs.length>0 ? chs[0] :null;
	}
	//获取最后一个子元素
	function lastChild(curEle){
		var chs = this.children(cueEle);
		return chs.length>0 ? chs[chs.length-1] :null;
	}
	//向指定容器末尾追加元素
	function append(newEle,container){
		container.appendChild(newEle);
	}
	//向指定容器开头添加元素
	function prepend(newEle,container){
		var fir = this.firstChild(container);
		if(fir){
			container.insertBefore(newEle,fir);
			return;
		}
		container.appendChild(newEle);
	}
	//把新元素（newEle）追加到指定元素（oldEle）的前面
	function insertBefore(newEle,oldEle){
		oldEle.parentNode.insertBefore(newEle,oldEle);
	}
	//把新元素（newEle）追加到指定元素（oldEle）的后面
	function insertAfter(newEle,oldEle){
		var nex = this.next(oldEle);
		if(nex){
			oldEle.parentNode.insertBefore(newEle,nex);
			return;
		}
		oldEle.parentNode.appendChild(newEle);
	}
	//验证当前元素是否包含className这个样式类名
	function hasClass(curEle,className){
		var reg = new RegExp("(^| +)"+className+"( +|$)");
		return reg.test(curEle.className);
	}
	//给元素增加样式类名
	function addClass(curEle,className){
		var ary = className.split(/ +/g);
		for(var i = 0,len = ary.length;i<len;i++){
			var curName = ary[i];
			if(!this.hasClass(curEle,curName)){
				curEle.className +=" "+curName;
			}
		}
	}
	//给元素移除样式名
	function removeClass(curEle,className){
		var ary = className.replace(/(^ +| +$)/g,"").split(/ +/g);
		for(var i =0,len=ary.length;i<len;i++){
			var curName = ary[i];
			if(hasClass(curEle,curName)){
				var reg = new RegExp("(^| +)"+curName+"( +|$)","g");
				curEle.className = curEle.className.replace(reg," ");
			}
		}
	}
	//根据样式名获取指定上下文样式
	function getElementsByClass(strClass,context){
		context = content || document;
		if(flag){
			return [].slice.call(context.getElementsByClassName(strClass));
		}
		var ary = [];
		var strClassAry = strClass.replace(/(^ +| +$)/g,"").split(/ +/g);
		var nodeList = context.getElementsByTagName("*");
		for(var i=0,len=nodeList.length; i<len;i++){
			var curNode = nodeList[i];
			var isOk=true;
			for(var k=0;k<strClassAry.length;k++){
				var reg = new RegExp("(^| +)"+strClassAry[k]+"( +|$)");
				if(!reg.test(curNode.className)){
					isOk = false;
					break;
				}
			}
			if(isOk){
				ary[ary.length] = curNode;
			}
		}
		return ary;
	}
	//设置当前元素css样式,传一个参数表示获取，两个表示设置
	function sCss(curEle,obj,value){
		if(arguments.length ==2){
				if(typeof obj ==="object"){
				for(var i in obj){
					if(!isNaN(obj[i])){
						obj[i] = obj[i]+"px";
					}
					curEle["style"][i]=obj[i];
				}
			}else{
				if(flag){
					var result = window.getComputedStyle(curEle)[obj];
					if(parseInt(result)){
						return parseInt(result);
					}else{
						if(parseInt(result) ==0){
							return 0;
						}
						return result;
					}
				}else{
					var result = curEle.currentStyle[obj];
					if(parseInt(result)){
						return parseInt(result);
					}else{
						if(parseInt(result) ==0){
							return 0;
						}
						return result;
					}
				}
			}
		}else if(arguments.length ==3){
				if(obj === "opacity"){
					curEle["style"][obj]=value;
					return;
				}else if(!isNaN(value)){
					value = value+"px";
				}
				curEle["style"][obj]=value;	
				
		}
		
	}
	//封装动画效果
	//1、计算当前位置的公式
	var taoGongshi = {
		Linear : function (t,b,c,d){
			//t运动时长，b起始位置，c总长度，d总时长；
			return c/d*t+b;
		}
	};
	//2、写方法
	function move(curEle,target,duration,callback){
		window.clearInterval(curEle.taoTimer);
		var begin ={},change={};
		for(var key in target){
			if(target.hasOwnProperty(key)){
				begin[key]=utils.sCss(curEle,key);
				change[key]=target[key] - begin[key];
			}
		}
		var time = 0;
		curEle.taoTimer = window.setInterval(function(){
			time +=10;
			if(time >= duration){
				utils.sCss(curEle,target);
				window.clearInterval(curEle.taoTimer);
				callback && callback.call(curEle);
				return;
			}
			for(var key in target){
				if(target.hasOwnProperty(key)){
					
					if(key ==="opacity"){
						var curPos = taoGongshi.Linear(time,begin[key],change[key],duration);
						utils.sCss(curEle,key,curPos);
					}else{
						var curPos = taoGongshi.Linear(time,begin[key],change[key],duration);
						utils.sCss(curEle,key,curPos+"px");
					}
					
				}
			}
		},10);
	}
	//绑定事件
	function bind(curEle,eventType,eventFn){
		if(curEle.addEventListener){
			curEle.addEventListener(eventType,eventFn,false);
			return;
		}
		var tempFn = function (){
			eventFn.call(curEle);
		}
		tempFn.photo=eventFn;
		if(!curEle["mybind"+eventType]){
			curEle["mybind"+eventType]=[];
		}
		var ary = curEle["mybind"+eventType];
		for(var i=0;i<ary.length;i++){
			if(eventFn==ary[i].photo){
				return;
			}
		}
		ary.push(tempFn);
		curEle.attachEvent("on"+eventType,tempFn);
		
	}
	//解除绑定
	function unbind(curEle,eventType,eventFn){
		if(curEle.removeEventListener){
			curEle.removeEventListener(eventType,eventFn,false);
			return;
		}
		var ary = curEle["mybind"+eventType];
		console.log(curEle);
		for(var i=0;i<ary.length;i++){
			var cur = ary[i];
			if(eventFn == cur.photo){
				ary.splice(i,1);
				curEle.detachEvent("on"+eventType,cur);
				break;
			}
		}
	}
	//实现新的绑定方法，处理之前绑定方法的顺序问题
	function on(curEle,eventType,eventFn){
		if(!curEle["mybind"+eventType]){
			curEle["mybind"+eventType]=[];
		}
		var ary = curEle["mybind"+eventType];
		for(var i =0; i< ary.length; i++){
			var cur = ary[i];
			if(cur === eventFn){
				return;
			}
		}
		ary.push(eventFn);
		bind(curEle,eventType,run);
	}
	//新的解绑方法
	function off(curEle,eventType,eventFn){
		var ary=curEle["mybind"+eventType];
		if(ary && ary instanceof Array){
			for(var i =0;i<ary.length;i++){
				var cur = ary[i];
				if(cur ===eventFn){
//					ary.splice(i,1);//不能这样，会发生数组塌陷
					ary[i]=null;
					break;
				}
			}
		}
		
	}
	//自己写的一个事件池，实现方法按顺序实现,有这个参数是因为这个run方法要绑定给事件，浏览器会默认传入
	function run(e){
		e=e||window.event;
		var flag = e.target? true : false;//是否为标准浏览器
		if(!flag){//非标准时
			e.target = e.srcElement;
			e.pageX = e.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft);
			e.pageY =  e.clientX+(document.documentElement.scrollTop||document.body.scrollTop);
			e.preventDefault=function(){//阻止默认事件
				e.returnValue = false;
			};
			e.stopPropagation=function(){//阻止冒泡事件
				e.cancelBubble=true;
			}
		}
		var ary = this["mybind"+e.type];
		for(var i=0;i<ary.length;i++){
			var tempFn = ary[i];
			if(typeof tempFn ==="function"){
				tempFn.call(this,e);
			}else{
				ary.splice(i,1);
				i--;
			}

		}
	}
	return {
		children:children,
		prev : prev,
		next : next,
		prevAll:prevAll,
		nextAll : nextAll,
		sibling : sibling,
		siblings : siblings,
		index : index,
		firstChild : firstChild,
		lastChild : lastChild,
		append : append,
		prepend : prepend,
		insertBefore : insertBefore,
		insertAfter : insertAfter,
		hasClass : hasClass,
		addClass : addClass,
		removeClass : removeClass,
		getElementsByClass : getElementsByClass,
		sCss : sCss,
		move : move,
		on : on,
		off : off
	}
})()
