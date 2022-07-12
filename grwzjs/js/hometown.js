window.onload = function(){
    scenery();   
    img_show();
    xh();
    nav();
}


function scenery(){
    var oJlc = document.getElementsByClassName("jlc")[0];
    var oMws = document.getElementsByClassName("mws")[0];
    var oAyh = document.getElementsByClassName("ayh")[0];
    var oBottom1 = document.getElementsByClassName("bottom1")[0];
    //涔濋粠鍩�
    var oBottom2 = document.getElementsByClassName("bottom2")[0];
    //鎽╁洿灞�
    var oBottom3 = document.getElementsByClassName("bottom3")[0];
    //闃夸緷娌�
    oBottom1.onclick= function(){
        oJlc.style.zIndex = "1";
        oMws.style.zIndex = '0';
        oAyh.style.zIndex = '0';
        //璁╁叾鏄剧ず鍦ㄦ渶涓婃柟
        oJlc.style.opacity = '1';
        oMws.style.opacity = '0';
        oAyh.style.opacity = '0';
        //闅愯棌鍙﹀涓や釜鍐呭
    }
    /*oBottom1.onmouseout= function(){
        oJlc.style.zIndex= "0";
    }*/
    oBottom2.onclick= function(){
        oJlc.style.zIndex = "0";
        oMws.style.zIndex = '1';
        oAyh.style.zIndex = '0';
        oJlc.style.opacity = '0';
        oMws.style.opacity = '1';
        oAyh.style.opacity = '0';
    }
   /* oBottom2.onmouseout= function(){
        oMws.style.zIndex= "0";
    }*/
    oBottom3.onclick= function(){
        oJlc.style.zIndex = "0";
        oMws.style.zIndex = '0';
        oAyh.style.zIndex = '1';
        oJlc.style.opacity = '0';
        oMws.style.opacity = '0';
        oAyh.style.opacity = '1';
    }
    /*oBottom3.onmouseout= function(){
        oAyh.style.zIndex = "0";
    }*/
}

function img_show(){
    var oImg = document.querySelectorAll("#ps_lbt .img");
    var oSequare = document.querySelectorAll("#square a");
    var index = 0;
    var autoTimer;

    setImg();
    setSquare();
    autoPlay();

    for(var i=0,len=oSequare.length;i<len;i++){
        oSequare[i].index = i;
        oSequare[i].onclick = function () {
            clearInterval(autoTimer);
            index = this.index;
            setImg();
            setSquare();
            autoPlay();
        }
    }//鐐瑰嚮浜嬩欢锛�

    function setImg(){
        for(var i=0;i<oImg.length;i++){
            oImg[i].style.opacity = "0";
        }
        oImg[index].style.opacity = "1";
    }//褰撳墠杞挱鍥剧墖

    function setSquare(){
        for(var i=0;i<oSequare.length;i++){
            oSequare[i].style.backgroundColor = "#fff";
        }
        oSequare[index].style.backgroundColor = "yellow";
    }//鎸囩ず鐐�


    function autoPlay(){
        autoTimer = setInterval(function(){
            index++;
            if(index>=oImg.length){
                index = 0;
            }
            setImg();
            setSquare();
        },3000);
    }//鑷姩鎾斁
}




function xh(){
    var oImgWrap = document.getElementsByClassName("img_friends");
    var oImg = document.querySelectorAll(".img_friends img");
    var oTxt = document.getElementsByClassName("txt_friends");
    for(var i = 0;i<oImgWrap.length;i++){
        oImgWrap[i].index = i;
        oImgWrap[i].onmouseover= function(){
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
}//榧犳爣绉诲姩鍒板浘鐗囦笂锛屼細鏈夋枃瀛楁樉绀猴紝