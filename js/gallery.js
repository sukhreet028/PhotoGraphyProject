const mainGallery = document.querySelector('.main-gallery');
const gallery = document.querySelector('.gallery-images');
let galleryToggle = false;
// var normalWed= ['../images/o2.jpeg'];
// var normalFam =['../images/o3.jpeg']
var eventGallery = [
  '../images/e0.jpeg',
  '../images/e0.1.jpeg',
  '../images/e1.jpeg',
  '../images/e2.jpeg',
  '../images/e3.jpeg',
  '../images/e4.jpeg',
  '../images/e5.jpeg',
  '../images/e6.jpeg',
];
var normalPics = [
  '../images/img0.jpeg',
  '../images/img0.1.jpeg',
  '../images/img1.jpeg',
  '../images/img2.jpeg',
  '../images/img3.jpeg',
  '../images/img4.jpeg',
  '../images/img5.jpeg',
  '../images/img6.jpeg',
];
var professionalGal = [
  '../images/p00.jpeg',
  '../images/p0.jpeg',
  '../images/p1.jpeg',
  '../images/p2.jpeg',
  '../images/p3.jpeg',
  '../images/p4.jpeg',
  '../images/p5.jpeg',
  '../images/p6.jpeg',
];
var natureGal = [
  '../images/n00.jpeg',
  '../images/n0.1.jpeg',
  '../images/n1.jpeg',
  '../images/n2.jpeg',
  '../images/n3.jpeg',
  '../images/n4.jpeg',
  '../images/n5.jpeg',
  '../images/n6.jpeg',
];
var otherGal = [
  '../images/o0.1.jpeg',
  '../images/o0.jpeg',
  '../images/o1.jpeg',
  '../images/o2.jpeg',
  '../images/o3.jpeg',
  '../images/o4.jpeg',
  '../images/o5.jpeg',
  '../images/o6.jpeg',
];

let imageCurrentArray = normalPics;
// const imageComponent = document.createElement('img');
// imageComponent.setAttribute("alt","image");
window.onload = () => {
  addImagesToGallery();
};

const addImagesToGallery = () => {
  imageCurrentArray.map((data, index) => {
    if (index < 2) {
      var img1 = document.getElementById(`event-images${index + 1}`);
      console.log(img1);
      img1.style.backgroundImage = "url('" + data + "')";
    } else {
      const imageComponent = document.createElement('img');
      const imageDiv = document.createElement('div');
      imageComponent.setAttribute('alt', 'image');
      imageComponent.setAttribute('id', index);
      imageComponent.setAttribute('src', data);
      imageDiv.setAttribute('id', 'D' + index);
      setTimeout(() => {
        document
          .getElementById(index)
          .addEventListener('click', () => showFullSIzeImage(data, index));
      }, 1000);
      imageDiv.appendChild(imageComponent);
      gallery.appendChild(imageDiv);
      console.log(data);
    }
  });
};
// function changeText(){
//     const msg=document.getElementById('gallery-quote');
//     msg.innerHTML=`"Sometimes, challenges and struggles are exactly what we need in our lives...
//     May you welcome every effort, every struggle,
//     and every challenge...May you open your wings and fly!"`;
// }

// const selectListDiv=document.querySelector('.select-list');
const selectList = document.getElementById('gallery');
//   selectList.addEventListener('change',myEvent);

// function myEvent(){
//     eventGallery.map((data, index) => {
//         console.log(data);
//         var img1=document.getElementById(`event-images${index+1}`);
//         console.log(img1);
//     img1.style.backgroundImage = "url('"+data+"')";
//     const heading=document.getElementById('gallery-heading');
//     msg.innerHTML=`EVENT GALLERY`;
//  })
// }
//  function changeText(){
//     const heading=document.getElementById('gallery-heading');
//     msg.innerHTML=`EVENT GALLERY`
//     const para=document.getElementById('gallery-para');
//     msg.innerHTML=`"Sometimes, challenges and struggles are exactly what we need in our lives...
//     May you welcome every effort, every struggle,
//    and every challenge...May you open your wings and fly!"`;
// }
// changeText();
// }

function showGalleryImg(galleryType) {
  var mySecondList = document.getElementById('option-list');
  mySecondList.style.display = null;
  galleryToggle = false;

  if (galleryType === 'natureGal') {
    showImages(natureGal);
  } else if (galleryType === 'otherGal') {
    showImages(otherGal);
  } else if (galleryType === 'eventGal') {
    showImages(eventGallery);
  } else if (galleryType === 'proGal') {
    showImages(professionalGal);
  }
}

const showImages = (galleryType) => {
  imageCurrentArray.map((data, index) => {
    if (index > 1) {
      const imageDiv = document.getElementById('D' + index);
      gallery.removeChild(imageDiv);
      if (index + 1 === imageCurrentArray.length) {
        imageCurrentArray = galleryType;
        addImagesToGallery();
      }
    }
  });
};
let gallerybtn = false;
const galleryList = document.querySelector('.gallery-nav');
// const contactList=document.querySelector('.contact-nav');

const galleryButton = document.querySelector('.gallery-burger-icon');

galleryButton.addEventListener('click', () => {
  gallerybtn = !gallerybtn;
  if (gallerybtn) {
    galleryButton.classList.add('btnClassGallery');
    galleryList.classList.add('galleryMenu');
  } else {
    galleryButton.classList.remove('btnClassGallery');
    galleryList.classList.remove('galleryMenu');
  }
});

function myList() {
  console.log('inside llll');
  var mySecondList = document.querySelector('.gallery-dropdown');
  mySecondList.classList.add('myNewList');
}
const showGalleryOptions = () => {
  console.log('inside');
  galleryToggle = !galleryToggle;
  var mySecondList = document.getElementById('option-list');
  if (galleryToggle) {
    mySecondList.style.display = 'block';
  } else {
    mySecondList.style.display = null;
  }
};
let currentLargeImage;
let previousImage;
const showFullSIzeImage = (data, id) => {
  currentLargeImage = id;
  previousImage = id;
  document.getElementById('gallery-container').style.display = 'none';
  const largeImg = document.getElementById('main-image');
  const largeImgWrapper = document.getElementById('main-image-wrapper');
  largeImg.setAttribute('src', data);
  largeImgWrapper.style.display = 'flex';
};

const showGallery = () => {
  const prevImage = document.getElementById('moveImage');
  prevImage.setAttribute('href', '#D' + previousImage);
  prevImage.click();
  const largeImgWrapper = document.getElementById('main-image-wrapper');
  document.getElementById('gallery-container').style.display = null;
  largeImgWrapper.style.display = null;

  setTimeout(() => {
    largeImgWrapper.style.display = null;
  }, 500);
};

const leftMove = () => {
  const largeImg = document.getElementById('main-image');
  if (currentLargeImage <= 2) {
    largeImg.setAttribute('src', imageCurrentArray[currentLargeImage]);
  } else {
    largeImg.setAttribute('src', imageCurrentArray[currentLargeImage - 1]);
    currentLargeImage = currentLargeImage - 1;
  }
};

const rightMove = () => {
  const largeImg = document.getElementById('main-image');
  if (currentLargeImage + 1 === imageCurrentArray.length) {
    largeImg.setAttribute('src', imageCurrentArray[currentLargeImage]);
  } else {
    largeImg.setAttribute('src', imageCurrentArray[currentLargeImage + 1]);
    currentLargeImage = currentLargeImage + 1;
  }
};

//  function showList(index){
//     var galleryList1= document.querySelector('.gallery-dropdown');
//     console.log(galleryList1);
//     var galleryItems= galleryList1.querySelectorAll('li');
//     console.log(galleryItems);
//           var item2= galleryItems.value;
//              console.log(item2);
//     }
//  showList();
