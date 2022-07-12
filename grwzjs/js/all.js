function nav(){
    var oLi = document.getElementsByClassName("li");
    var index = 0;
    li();

    function li(){
        for(var i = 0;i<oLi.length;i++){
            oLi[i].index = i;
            oLi[i].onmouseover = function(){
                oLi[this.index].style.backgroundColor = "#e27559";
                oLi[this.index].style.fontFamily = "闅朵功";
                oLi[this.index].style.borderRadius = "40px";
            }
            oLi[i].onmouseout = function(){
                oLi[this.index].style.backgroundColor = "#acb1f1";
                oLi[this.index].style.fontFamily = "鍗庢枃鏂伴瓘";
                oLi[this.index].style.borderRadius = "10px";
            }
        }
    }
}//鏀瑰彉border-radius 瀵艰埅鏍忛鑹�   瀛椾綋