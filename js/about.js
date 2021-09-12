let aboutbtn=false;
const aboutList=document.querySelector('.about-nav');
// const contactList=document.querySelector('.contact-nav');
const aboutButton=document.querySelector('.about-burger-icon');

aboutButton.addEventListener('click',()=>{
    aboutbtn=!aboutbtn;
    if(aboutbtn){
        aboutButton.classList.add('btnClassAbout');
    aboutList.classList.add('aboutMenu');
    // contactList.classList.add('contactMenu');
    } else{
        aboutButton.classList.remove('btnClassAbout'); 
        aboutList.classList.remove('aboutMenu');
    }
})