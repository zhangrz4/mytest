window.onload=function(){
    img();
    img_lbt();
    nav();
    this.chang_textColor();
}

function img(){
    var oImgWrap = document.getElementsByClassName("img_friends");
    var oImg = document.querySelectorAll(".img_friends img");
    var oTxt = document.getElementsByClassName("txt_friends");
    for(var i = 0;i<oImgWrap.length;i++){
        oImgWrap[i].index = i;
        oImgWrap[i].onmouseover= function(){
            console.log(i);
            console.log(this.index);
            // this.style.transform="1.2";
            oImg[this.index].style.transform = "scale(1.2)";
            oTxt[this.index].style.opacity="0.6";
        }
        oImgWrap[i].onmouseout= function(){
            //this.style.transform="1";
            oImg[this.index].style.transform = "scale(1)";
            oTxt[this.index].style.opacity="0";
        }
    }
}//绉诲姩鍥剧墖锛屽浘鐗囦笂鍑虹幇瀛椾綋锛屽浘鐗囨斁澶�1.2鍊�


function img_lbt(){
    var oImg_lbt = document.querySelectorAll("#lunbotu .img");
    var dot = document.querySelectorAll("#dot a");
    //褰撳墠杞挱鍥句笅鏍�
    var index = 0;
    //瀹氫箟鑷姩鎾斁瀹氭椂鍣�
    var autoTimer;
    setImg();
    setDot();

    //涓烘瘡涓偣娣诲姞鐐瑰嚮浜嬩欢
    for(var i=0,len=dot.length;i<len;i++){
        dot[i].index = i;
        dot[i].onclick = function () {
            clearInterval(autoTimer);
            index = this.index;
            setImg();
            setDot();
            autoPlay();
        }
    }

    //璁剧疆褰撳墠杞挱鍒扮殑鍥剧墖1
    function setImg () {
        for(var i=0,len=oImg_lbt.length;i<len;i++){
            oImg_lbt[i].style.opacity = "0";
        }
        oImg_lbt[index].style.opacity = "1";
    }

    //璁剧疆鎸囩ず鐐�3
    function setDot(){
        for(var i=0,len=dot.length;i<len;i++){
            dot[i].style.backgroundColor = "#a5c1da";
        }
        dot[index].style.backgroundColor = "#000";
    }

    autoPlay();

    //鑷姩鎾斁2
    function autoPlay(){
        autoTimer = setInterval(function () {
            index++;
            if(index >= oImg_lbt.length){
                index = 0;
            }
            setImg();
            setDot();
        }, 3000);
    }
}

    function chang_textColor(){
        auto();
        function changeColor(){
          var color="#ad4949|#9e386f|#8a2b87|#5f3296|#304290|#2c4896|#277295|#187a7e|#187e65|#0f641d|#4a6215|#616d20|#9e8a19|#9e7719|#ba651a|#a83725"; 
         color=color.split("|");
         document.getElementById("blink1").style.color=color[parseInt(Math.random() * color.length)]; 
         document.getElementById("blink2").style.color=color[parseInt(Math.random() * color.length)];       
        }
        function  auto(){
            setInterval(function(){
                changeColor();
            },100);
        }  
       
}//鏀瑰彉瀛椾綋娓愬彉棰滆壊
