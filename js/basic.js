/*让div高度等于屏幕高度*/
function height(div1){
	div1.style.height=document.documentElement.clientHeight+"px";
	return div1;
}
function heightchange(){
	height(about);
	height(support);
	height(store);
	height(header);
	height(product);
}
window.onload = heightchange;
window.onresize = heightchange;
/*over*/