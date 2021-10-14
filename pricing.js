let pricingbtn=false;
const pricingList=document.querySelector('.pricing-nav');
const pricingButton=document.querySelector('.pricing-burger-icon');

pricingButton.addEventListener('click',()=>{
    pricingbtn=!pricingbtn;
    if(pricingbtn){
        pricingButton.classList.add('btnClass');
        pricingList.classList.add('pricingMenu');
    } else{
        pricingButton.classList.remove('btnClass'); 
        pricingList.classList.remove('pricingMenu');
    }
})