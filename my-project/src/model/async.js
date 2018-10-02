async function fn(argument) {
	let f1 = await readFile('data/a.txt');
	console.log(f1.toString());
	let f2 = await readFile('data/b.txt');
	console.log(f2.toString());
	let f3 = await readFile('data/c.txt');
	console.log(f3.toString());
	let f4 = await readFile('data/d.txt');
	console.log(f4.toString());
	// body...
}
js 面试题
string boolean number undefined function object
parseInt parseFloat number
split() join()
push() pop() unshift() shift()
var  ev = ev || window.event
document.documentElement.clientWidth || document.body.clientWidth
scrollWidth>offsetWidth>clientWidth
scrollTop
Object.call(this,obj1,obj2,obj3)
Object.apply(this,arguments)
JSON.parse
利用事件冒泡的原理，让袭击的所触发的事件，让他的父元素代替执行！
阻止冒泡 ev.cancelBubble = true;非IE ev.stopPropagetion()
阻止默认事件 return false;ev.preventDefault()
createElement()
createTextNode()
appendChild()
removeChild()
replaceChild()
insertBefore()

getElementsByTagName()
getElementsByName()
getElementsById()
jsonp原理：
动态创建script标签，回调函数
Ajax是页面无刷新请求数据操作
document.onload 是在结构和样式外部js以及图片加载完才执行js
document.ready是dom树创建
== 会自动转换类型再判断是否相等
box.onclick=function(){}
box.addEventListener(click,function(){},false);
<button onclick= "xxx()"><button>
事件冒泡：事件开始由最具体的元素接受，然后逐级向上传播
js延迟加载：defer async
获取页面中所有的checkbox
var inputs = document.getElementsByTagName("input")
var checkboxArray = []
for (var i = 0; i <= inputs.length; i++) {
	var obj = inputs[i];
	if(obj.type=='checkbox'){
		checkboxArray.push(obj)
	}
}
Math.max(a,b,c);//最大是
Math.min(a,b,c);//最小值
prototype

from中的input可以设置为readonly和diable




