const gallery=document.querySelector('.gallery-images');
var eventGallery = ['../images/e1.jpeg','../images/e2.jpeg','../images/e3.jpeg','../images/e4.jpeg','../images/e5.jpeg','../images/e6.jpeg'];
var normalPics=['../images/img1.jpeg','../images/img2.jpeg','../images/img3.jpeg','../images/img4.jpeg','../images/img5.jpeg','../images/img6.jpeg'];
var professionalGal= ['../images/p1.jpeg','../images/p2.jpeg','../images/p3.jpeg','../images/p4.jpeg','../images/p5.jpeg','../images/p6.jpeg'];
var natureGal= ['../images/n1.jpeg','../images/n2.jpeg','../images/n3.jpeg','../images/n4.jpeg','../images/n5.jpeg','../images/n6.jpeg'];
var otherGal=['../images/o1.jpeg','../images/o2.jpeg','../images/o3.jpeg','../images/o4.jpeg','../images/o5.jpeg','../images/o6.jpeg'];
window.onload=()=>{
    normalPics.map((data, index) => {
        console.log(data);
        var img1=document.getElementById(`event-images${index+1}`);
        console.log(img1);
    img1.style.backgroundImage = "url('"+data+"')";
    })
}
    
function myEvent(){
    eventGallery.map((data, index) => {
        console.log(data);
        var img1=document.getElementById(`event-images${index+1}`);
        console.log(img1);
    img1.style.backgroundImage = "url('"+data+"')";
 })
}


function professionalImg(){
   professionalGal.map((data,index)=>{
    var img1=document.getElementById(`event-images${index+1}`);
    img1.style.backgroundImage = "url('"+data+"')";
   })
}

function natureImg(){
    natureGal.map((data,index)=>{
     var img1=document.getElementById(`event-images${index+1}`);
     img1.style.backgroundImage = "url('"+data+"')";
    })
 }

 function otherImg(){
    otherGal.map((data,index)=>{
     var img1=document.getElementById(`event-images${index+1}`);
     img1.style.backgroundImage = "url('"+data+"')";
    })
 }
 let gallerybtn=false;
 const galleryList=document.querySelector('.gallery-nav');
 // const contactList=document.querySelector('.contact-nav');
 
 const galleryButton=document.querySelector('.gallery-burger-icon');
 
 galleryButton.addEventListener('click',()=>{
     gallerybtn=!gallerybtn;
     if(gallerybtn){
         galleryButton.classList.add('btnClassGallery');
     galleryList.classList.add('galleryMenu');
     } else{
         galleryButton.classList.remove('btnClassGallery'); 
         galleryList.classList.remove('galleryMenu');
     }
 })




 function myList() {
    var mySecondList = document.querySelector('.gallery-dropdown');
    mySecondList.classList.add('myNewList');
 }


 
//  function showList(index){
//     var galleryList1= document.querySelector('.gallery-dropdown');
//     console.log(galleryList1);
//     var galleryItems= galleryList1.querySelectorAll('li');
//     console.log(galleryItems);
//           var item2= galleryItems.value;
//              console.log(item2);      
//     }
//  showList();
