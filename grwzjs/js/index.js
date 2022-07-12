window.onload = function() {
	time();
	pmd();
	nav();
	shiju();
};//缃戦〉鍔犺浇鏃惰繍琛屼笂杩板嚱鏁�

// 璁剧疆鐜板湪鐨勬椂闂�
function time() {
	var myDate = new Date();
	var myMonth = myDate.getMonth() + 1; //璁剧疆鏈堟暟
	var myDay = myDate.getDate(); //璁剧疆鏃ユ湡
	var myWeek = myDate.getDay() + 1; //璁剧疆鏄熸湡鍑�
	var myHours = myDate.getHours(); //璁剧疆灏忔椂
	var myMinutes = myDate.getMinutes(); //璁剧疆鍒嗛挓
	var mySeconds = myDate.getSeconds(); //璁剧疆绉掓暟
	var myYear = myDate.getFullYear()//璁剧疆骞翠唤
	if (myHours < 10)
		myHours = "0" + myHours;
	if (myMinutes < 10)
		myMinutes = "0" + myMinutes;
	if (mySeconds < 10)
        mySeconds = "0" + mySeconds;//鍒ゆ柇灏忔椂锛屽垎閽燂紝绉掓暟涓嶈秴杩�10
        
	var sWeek;//鍒ゆ柇鏄熸湡鍑�
	if (myWeek == 1)
		sWeek = "Monday";
	if (myWeek == 2)
		sWeek = "Tuesday";
	if (myWeek == 3)
		sWeek = "Wednesday";
	if (myWeek == 4)
		sWeek = "Thursday";
	if (myWeek == 5)
		sWeek = "Friday";
	if (myWeek == 6)
		sWeek = "Saturday";
	if (myWeek == 7)
		sWeek = "Sunday";
//鍒ゆ柇浠婂ぉ鏄槦鏈熷嚑
	switch (myMonth) {
		case 1:			myMonth = "January";
			break;
		case 2:			myMonth = "February";
			break;
		case 3:			myMonth = "March";
			break;
		case 4:
			myMonth = "April";
			break;
		case 5:			myMonth = "May";
			break;
		case 6:			myMonth = "June";
			break;
		case 7:			myMonth = "July";
			break;
		case 8:			myMonth = "August";
			break;
		case 9:			myMonth = "September";
			break;
		case 10:		myMonth = "October";
			break;
		case 11:		myMonth = "November";
			break;
		case 12:		myMonth = "December";
			break;
	}//鍒ゆ柇鐜板湪鏄嚑鏈�
	var myDiv = document.getElementById("time");
	//鑾峰彇id涓簍ime鐨刬d閫夋嫨鍣�
	myDiv.innerHTML = ("<center>" + myMonth + " " + myDay + "," + myYear + "</center><br>" + "<center>" + sWeek + "</center><br>" + "<center>" + myHours + ":" + myMinutes + ":" + mySeconds + "</center>");
	window.setTimeout("time();", 1000);
};


function pmd(){
	var oPmd = document.getElementsByClassName("pmd")[0];
    var msg="欢迎来到我的个人网站";
    var interval = 300;
	var seq = 0;
	LenScroll();
    function LenScroll(){
        oPmd.innerHTML = msg.substring(seq,msg.length-1)+" "+msg+" "+msg+" "+msg;
        seq++;
        if(seq>=msg.length)
            seq = 0;
        window.setTimeout(LenScroll,interval);
    }
}//璺戦┈鐏�


function shiju(){
	var oShiju_content = document.getElementsByClassName("shiju_content")[0];
	var autoTimer;
	var nowTop = oShiju_content.offsetTop;
	var newTop = nowTop;
	setTop();
	function setTop(){
		
	}

	autoPlay();
	function autoPlay(){
		autoTimer = setInterval(function () {
			newTop = newTop - 4;
			oShiju_content.style.top = newTop + "px";
			if(newTop <= -500){
				newTop = nowTop;
			}
		},100);
	}
}//璁╁彜璇楀線涓婅蛋