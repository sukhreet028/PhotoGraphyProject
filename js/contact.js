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

//date
const daySelect= document.getElementById('day');
const monthSelect= document.getElementById('month');
const yearSelect= document.getElementById('year');
let month=['January','February','March','April','May','June','July','August','September','October','November','December'];

function displayMonths(){
    for(let i=0; i<month.length;i++){
        const option=document.createElement('option');
        option.textContent=month[i];
        monthSelect.appendChild(option);
    }
    monthSelect.value='January';
}
displayMonths();
let previousDay;
function displayDays(month){
    while(daySelect.firstChild){
        daySelect.removeChild(daySelect.firstChild);
    }

let dayNum;
let year=yearSelect.value;
if(month === 'January' ||  month === 'March' || month === 'May'|| month === 'July'|| 
month === 'August'|| month === 'October'|| month === 'December'){
    dayNum=31;
    console.log('31days');
}else if(month === 'April'|| month === 'June' || month === 'September'|| month === 'November')
    {
        dayNum=30;
        console.log('30days');
    }
    else{
        if(new Date(year,1,29).getMonth()===1){
            dayNum=29;
        }else{
            dayNum=28;
        }

    }
 for(let i=1; i<= dayNum; i++){
     const option= document.createElement('option');
     option.textContent=i;
     daySelect.appendChild(option);
 }
 if(previousDay){
     daySelect.value = previousDay;
     if(daySelect.value===""){
         daySelect.value=previousDay - 1;
     }
     if(daySelect.value===""){
        daySelect.value=previousDay - 2;
    }
    if(daySelect.value===""){
        daySelect.value=previousDay - 3;
    }
 }
}
function displayYear(){
    let year= new Date().getFullYear()
    for(let i=0; i<101; i++){
        const option=document.createElement('option');
        option.textContent=year+i;
        yearSelect.appendChild(option);
    }
}
displayDays(monthSelect.value);
displayYear();

yearSelect.onchange=function(){
    displayDays(monthSelect.value);
}
monthSelect.onchange=function(){
    displayDays(monthSelect.value);
}
daySelect.onchange=function(){
    previousDay=daySelect.value;
}