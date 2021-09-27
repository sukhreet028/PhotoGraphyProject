const mainGallery = document.querySelector(".main-gallery");
const gallery = document.querySelector(".gallery-images");
let galleryToggle = false;
let currentLargeImage;
let previousImage;
let gallerybtn = false;
let noOfImages = 8;
let arrayImageNo = 8;
let activeClassId = "a-0";
const galleryList = document.querySelector('.gallery-nav');
const galleryButton = document.querySelector('.gallery-burger-icon');
var eventGallery = [
  "../images/e0.jpeg",
  "../images/e0.1.jpeg",
  "../images/e1.jpeg",
  "../images/e2.jpeg",
  "../images/e3.jpeg",
  "../images/e4.jpeg",
  "../images/e5.jpeg",
  "../images/e6.jpeg",
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
  '../images/n4.jpeg',
  '../images/n5.jpeg',
  '../images/p6.jpeg',
  '../images/p3.jpeg',
  '../images/p4.jpeg',
  '../images/p5.jpeg',
  '../images/p6.jpeg',
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
  '../images/img2.jpeg',
  '../images/img3.jpeg',
  '../images/img4.jpeg',
  '../images/img5.jpeg',
  '../images/img6.jpeg',
  '../images/img3.jpeg',
  '../images/img4.jpeg',
  '../images/img5.jpeg',
  '../images/img6.jpeg',
];
var natureGal = [
  "../images/n00.jpeg",
  "../images/n0.1.jpeg",
  "../images/n1.jpeg",
  "../images/n2.jpeg",
  "../images/n3.jpeg",
  "../images/n4.jpeg",
  "../images/n5.jpeg",
  "../images/n6.jpeg",
];
var otherGal = [
  "../images/o0.1.jpeg",
  "../images/o0.jpeg",
  "../images/o1.jpeg",
  "../images/o2.jpeg",
  "../images/o3.jpeg",
  "../images/o4.jpeg",
  "../images/o5.jpeg",
  "../images/o6.jpeg",
];
let imageCurrentArray = normalPics;

window.onload = () => {
  addImagesToGallery();
  if (arrayImageNo === imageCurrentArray.length) {
    document.getElementById('imgButton').style.display = 'none';
  }

  document.getElementById(activeClassId).classList.add('activeClass');
};
const addImagesToGallery = () => {
  imageCurrentArray.map((data, index) => {
    if (index < 2) {
      var img1 = document.getElementById(`event-images${index + 1}`);
      img1.style.backgroundImage = "url('" + data + "')";
    } else if (index < arrayImageNo) {
      const imageComponent = document.createElement('img');
      const imageDiv = document.createElement('div');
      imageComponent.setAttribute('alt', 'image');
      imageComponent.setAttribute('id', index);
      imageComponent.setAttribute('src', data);
      imageDiv.setAttribute('id', 'D' + index);
      setTimeout(() => {
        document
          .getElementById(index)
          .addEventListener("click", () => showFullSIzeImage(data, index));
      }, 1000);
      imageDiv.appendChild(imageComponent);
      gallery.appendChild(imageDiv);
    }
  });
};

const selectList = document.getElementById("gallery");

function showGalleryImg(galleryType,id) {
  var mySecondList = document.getElementById("option-list");
  mySecondList.style.display = null;
  galleryToggle = false;
  document.getElementById('select-button').innerHTML = galleryType;
  document.getElementById(activeClassId).classList.remove('activeClass');
  document.getElementById(id).classList.add('activeClass');
  activeClassId = id;
  if (galleryType === "Nature Gallery") {
    showImages(natureGal);
  } else if (galleryType === "Others") {
    showImages(otherGal);
  } else if (galleryType === "Event Gallery") {
    showImages(eventGallery);
  } else if (galleryType === "Professional Gallery") {
    showImages(professionalGal);
  } else if (galleryType === "Wedding Gallery") {
    showImages(normalPics);
  }
}

const showImages = (galleryType, wholeState) => {
  imageCurrentArray.map((data, index) => {
    if (index > 1 && index < arrayImageNo) {
      const imageDiv = document.getElementById('D' + index);
      gallery.removeChild(imageDiv);
    }
    if (index + 1 === imageCurrentArray.length) {
      if (!wholeState) {
        imageCurrentArray = galleryType;
        arrayImageNo = 8;
        noOfImages = 8;
        if (arrayImageNo !== galleryType.length) {
          document.getElementById('imgButton').style.display = null;
        }
      }
      arrayImageNo = noOfImages;
      addImagesToGallery();
      if (arrayImageNo === imageCurrentArray.length) {
        document.getElementById('imgButton').style.display = 'none';
      }
    }
  });
};

function showMoreImg() {
  arrayImageNo = noOfImages;
  if (imageCurrentArray.length >= noOfImages) {
    noOfImages = noOfImages + 6;
    if (noOfImages <= imageCurrentArray.length) {
      showImages(imageCurrentArray, true);
    } else {
      noOfImages = imageCurrentArray.length;
      showImages(imageCurrentArray, true);
    }
  }
}

galleryButton.addEventListener('click', () => {
  gallerybtn = !gallerybtn;
  if (gallerybtn) {
    galleryButton.classList.add("btnClassGallery");
    galleryList.classList.add("galleryMenu");
  } else {
    galleryButton.classList.remove("btnClassGallery");
    galleryList.classList.remove("galleryMenu");
  }
});

function myList() {
  var mySecondList = document.querySelector('.gallery-dropdown');
  mySecondList.classList.add('myNewList');
}
const showGalleryOptions = () => {
  galleryToggle = !galleryToggle;
  var mySecondList = document.getElementById("option-list");
  if (galleryToggle) {
    mySecondList.style.display = "block";
  } else {
    mySecondList.style.display = null;
  }
};

const showFullSIzeImage = (data, id) => {
  currentLargeImage = id;
  previousImage = id;
  document.getElementById("gallery-container").style.display = "none";
  const largeImg = document.getElementById("main-image");
  const largeImgWrapper = document.getElementById("main-image-wrapper");
  largeImg.setAttribute("src", data);
  largeImgWrapper.style.display = "flex";
};

const showGallery = () => {
  const prevImage = document.getElementById("moveImage");
  prevImage.setAttribute("href", "#D" + previousImage);
  prevImage.click();
  const largeImgWrapper = document.getElementById("main-image-wrapper");
  document.getElementById("gallery-container").style.display = null;
  largeImgWrapper.style.display = null;

  setTimeout(() => {
    largeImgWrapper.style.display = null;
  }, 500);
};

const leftMove = () => {
  const largeImg = document.getElementById("main-image");
  if (currentLargeImage <= 2) {
    largeImg.setAttribute("src", imageCurrentArray[currentLargeImage]);
  } else {
    largeImg.setAttribute("src", imageCurrentArray[currentLargeImage - 1]);
    currentLargeImage = currentLargeImage - 1;
  }
};

const rightMove = () => {
  const largeImg = document.getElementById("main-image");
  if (currentLargeImage + 1 === imageCurrentArray.length) {
    largeImg.setAttribute("src", imageCurrentArray[currentLargeImage]);
  } else {
    largeImg.setAttribute("src", imageCurrentArray[currentLargeImage + 1]);
    currentLargeImage = currentLargeImage + 1;
  }
};
