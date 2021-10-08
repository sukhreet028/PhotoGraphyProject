let aboutbtn=false;
const aboutList=document.querySelector('.about-nav');
// const contactList=document.querySelector('.contact-nav');
const aboutButton=document.querySelector('.about-burger-icon');
const navUl = document.getElementById('nav-id');


const showNav = ()=>{
    aboutbtn=!aboutbtn;
    if(aboutbtn){
        navUl.classList.add('showList');
        setTimeout(()=> {
         aboutButton.classList.add('btnClassAbout');   
         aboutList.classList.add('aboutMenu');
        },100);
    // contactList.classList.add('contactMenu');
    } else{
        setTimeout(()=> navUl.classList.remove('showList') , 100);
        aboutButton.classList.remove('btnClassAbout'); 
        aboutList.classList.remove('aboutMenu');
    }
}