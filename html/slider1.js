var i=0;
var imgArray=['../images/home2.jpeg','../images/hp10.jpeg','../images/hp2.jpeg','../images/hp11.jpeg','../images/hp9.jpeg','../images/hp7.jpeg'];
var j=0;
var imgArray1=['../images/a1.jpeg','../images/a3.jpeg','../images/a9.jpeg','../images/a0.png',];
function slider(){
    document.getElementById('homeImage').setAttribute('src',imgArray[i]);
    if(i<imgArray.length- 1){
        i++;
    }else{
        i=0;
            }}
    // setTimeout("slider()",1500);

   
function slider1(){
    document.getElementById('awardImg1').setAttribute('src',imgArray1[j]);
    if(j<imgArray1.length- 1){
        j++;
    }else{
        j=0;
    }
    setTimeout(function(){
        slider();
        slider1();
    },1500);}

function bothSlider(){
    slider();
    slider1();
}
window.onload=bothSlider;


// function myList(){
//     var mainList=document.getElementById('myMainList');
//     mainList.classList.add('main-nav-new');
// }



let burgerIcon=false;
const burgerBtn= document.querySelector('.burger-icon');
const navList=document.querySelector('.home-nav-list');
burgerBtn.addEventListener('click',()=>{
    burgerIcon=!burgerIcon;
    if(burgerIcon){
        burgerBtn.classList.add('open');
        navList.classList.add('menu');
    }else{
        burgerBtn.classList.remove('open');
        navList.classList.remove('menu');
    }
});