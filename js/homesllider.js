var i=0;
var imgArray=['../images/img1.jpeg','../images/img2.jpeg','../images/img3.jpeg','../images/img5.jpeg','../images/img6.jpeg'];
   
function slider(){
    document.getElementById('awardImg1').setAttribute('src',imgArray[i]);
    if(i<imgArray.length- 1){
        i++;
    }else{
        i=0;
    }
    setTimeout("slider()",1000);
}
window.onload=slider;