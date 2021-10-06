var i = 0;
let deviceWidth = window.innerWidth;
window.onresize = () => {
  deviceWidth = window.innerWidth;
  changeSliderImages();
};

window.onload = () => {
  changeSliderImages();
  bothSlider();
}

console.log('outside func ' + deviceWidth);
var sliderState = true;
var imgArray = [
  '../images/hp10.jpeg',
  '../images/hp2.jpeg',
  '../images/hp11.jpeg',
  '../images/hp9.jpeg',
  '../images/hp7.jpeg',
  '../images/ipadpic4.jpeg',
];
// logic to change the images on mobile and ipad

var j = 0;
var imgArray1 = [
  // "../images/a3.jpeg",
  '../images/a4.jpeg',
  '../images/a5.jpeg',
  '../images/a9.jpeg',
];
const changeSliderImages = () => {
  if (deviceWidth < 576) {
    imgArray = [
      '../images/phnpic1.jpeg',
      '../images/phnpic2.jpeg',
      '../images/phnpic3.jpeg',
      '../images/phnpic4.jpeg',
      '../images/phnpic5.jpeg',
    ];
  } else if (deviceWidth < 900) {
    imgArray = [
      '../images/ipadpic1.jpeg',
      '../images/ipadpic2.jpeg',
      '../images/ipadpic3.jpeg',
      '../images/ipadpic4.jpeg',
    ];
  }
};

function slider() {
  const image1 = document.getElementById('homeImage');
  const image2 = document.getElementById('homeImage2');
  if (i === 0 && sliderState) {
    image1.setAttribute('src', imgArray[i]);
    image2.style.display = 'none';
    console.log('inside first if');
  } else {
    image2.style.display = null;
    sliderState = false;
    if (i % 2 === 0) {
      console.log('inside second if ' + i);
      image1.classList.remove('goOut');
      image2.classList.remove('comeIn');
      image2.classList.add('goOut');
      image1.classList.add('comeIn');
      image1.setAttribute('src', imgArray[i]);
    } else {
      image2.classList.remove('goOut');
      image1.classList.remove('comeIn');
      image1.classList.add('goOut');
      image2.classList.add('comeIn');
      image2.setAttribute('src', imgArray[i]);
      console.log('inside else' + i);
    }
  }

  if (i < imgArray.length - 1) {
    i++;
  } else {
    i = 0;
    console.log(i);
  }
}
// setTimeout("slider()",1500);

function slider1() {
  document.getElementById('awardImg1').setAttribute('src', imgArray1[j]);
  if (j < imgArray1.length - 1) {
    j++;
  } else {
    j = 0;
  }
  setTimeout(function () {
    slider();
    slider1();
  }, 3000);
}

function bothSlider() {
  slider();
  slider1();
}

let burgerIcon = false;
const burgerBtn = document.querySelector('.burger-icon');
const navList = document.querySelector('.home-nav-list');
burgerBtn.addEventListener('click', () => {
  burgerIcon = !burgerIcon;
  if (burgerIcon) {
    burgerBtn.classList.add('open');
    navList.classList.add('menu');
  } else {
    burgerBtn.classList.remove('open');
    navList.classList.remove('menu');
  }
});
