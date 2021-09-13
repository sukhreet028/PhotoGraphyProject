let contactbtn=false;
const contactList=document.querySelector('.contact-nav');
const contactButton=document.querySelector('.contact-burger-icon');
contactButton.addEventListener('click',()=>{
    contactbtn=!contactbtn;
    if(contactbtn){
        contactButton.classList.add('btnClassContact');
        contactList.classList.add('contactMenu');
    } else{
        contactButton.classList.remove('btnClassContact'); 
        contactList.classList.remove('contactMenu');
    }
})