if (OS_ANDROID){
	$.index.open();
}
else {
	$.nav.open();
};

function doAdd(){
	if (OS_IOS){
		$.nav.openWindow(Alloy.createController('secondWin').getView());
	}else if (OS_ANDROID){
	}
}