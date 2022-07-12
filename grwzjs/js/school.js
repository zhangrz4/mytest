window.onload = function(){
    nav();
    dayingji();

    stull();
}


function dayingji(){
    var oWord1 = document.getElementById('word1');
    var oWord2 = document.getElementById('word2');
    var oShow1= document.getElementById('show1');
    var oShow2 = document.getElementById('show2');
            var i = 0;
            var timer;
            timer=setInterval(function(){
                oShow1.innerHTML=oWord1.innerHTML.substring(0,i);
                i++;
                if(oShow1.innerHTML==oWord1.innerHTML){
                    clearInterval(timer);
                }//璁剧疆鑷姩娣诲姞瀛椾綋
            },20);
            timer=setInterval(function(){
                oShow2.innerHTML=oWord2.innerHTML.substring(0,i);
                i++;
                if(oShow2.innerHTML==oWord2.innerHTML){
                    clearInterval(timer);
                }
            },20);//鍒ゆ柇寰幆瀹屾垚鍚庨€€鍑烘寰幆
}//鎵撳瓧鏈烘晥鏋滐紝




function stull()
{
	var speed = 10;
	var index = document.getElementById("f1-2");
	var index1 = document.getElementById("f1-3");
	var index2 = document.getElementById("f1-4");
	alert(index.offsetLeft);
	index2.innerHTML = index1.innerHTML;
	var myMar = setInterval(function() 
	{
        if(index2.offsetWidth - index.offsetLeft <= 0)
                index.scrollLeft -= index1.offsetWidth;
        else 
                index.scrollLeft++;
	}, speed);
}//绉诲姩鍧楋紝瀹炵幇鍥剧墖宸﹀彸杞挱