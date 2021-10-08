const mainGallery = document.querySelector(".main-gallery");
const gallery = document.querySelector(".gallery-images");
let galleryToggle = false;
let currentLargeImage;
let previousImage;
let gallerybtn = false;
let noOfImages = 8;
let arrayImageNo = 8;
let activeClassId = "a-0";
const galleryList = document.querySelector(".gallery-nav");
const galleryButton = document.querySelector(".gallery-burger-icon");
var eventGallery = [
  "../images/e0.jpeg",
  "../images/e0.1.jpeg",
  "../images/e1.jpeg",
  "../images/e2.jpeg",
  "../images/e3.jpeg",
  "../images/e4.jpeg",
  "../images/e5.jpeg",
  "../images/e6.jpeg",
  "../images/e9.jpeg",
  "../images/e10.jpeg",
  "../images/e11.jpeg",
  "../images/e12.jpeg",
  "../images/e13.jpeg",
  "../images/e14.jpeg",
  "../images/e15.jpeg",
  "../images/e16.jpeg",
  "../images/e17.jpeg",
  "../images/e18.jpeg",
  "../images/e19.jpeg",
  "../images/e20.jpeg",
];
var normalPics = [
  "../images/w0.jpeg",
  "../images/w0.1.jpeg",
  "../images/w1.jpeg",
  "../images/w2.jpeg",
  "../images/w3.jpeg",
  "../images/w4.jpeg",
  "../images/w5.jpeg",
  "../images/w6.jpeg",
  "../images/w7.jpeg",
  "../images/w8.jpeg",
  "../images/w9.jpeg",
  "../images/w10.jpeg",
  "../images/w11.png",
  "../images/w12.jpeg",
  "../images/w13.jpeg",
  "../images/w14.jpeg",
  "../images/w15.jpeg",
  "../images/w16.jpeg",
  "../images/w17.jpeg",
  "../images/w18.jpeg",
  "../images/w19.jpeg",
  "../images/w20.jpeg",
];
var professionalGal = [
  "../images/p1.jpeg",
  "../images/p2.jpeg",
  "../images/p3.jpeg",
  "../images/p4.jpeg",
  "../images/p5.jpeg",
  "../images/p6.jpeg",
  "../images/p07.jpeg",
  "../images/p08.jpeg",
  "../images/p9.jpeg",
  "../images/p10.jpeg",
  "../images/p11.jpeg",
  "../images/p12.jpeg",
  "../images/p13.jpeg",
  "../images/p14.jpeg",
  "../images/p15.jpeg",
  "../images/p16.jpeg",
  "../images/p17.jpeg",
];
var natureGal = [
  "../images/n1.jpeg",
  "../images/n2.jpeg",
  "../images/n3.jpeg",
  "../images/n4.jpeg",
  "../images/n5.jpeg",
  "../images/n6.jpeg",
  "../images/n7.jpeg",
  "../images/n8.jpeg",
  "../images/n9.jpeg",
  "../images/n10.png",
  "../images/n11.jpeg",
  "../images/n12.jpeg",
  "../images/n13.jpeg",
  "../images/n14.jpeg",
  "../images/n15.jpeg",
  "../images/n16.jpeg",
  "../images/n17.jpeg",
  "../images/n18.jpeg",
  "../images/n19.jpeg",
  "../images/n20.jpeg",
];
var otherGal = [
  "../images/o1.jpeg",
  "../images/o2.jpeg",
  "../images/o3.jpeg",
  "../images/o4.jpeg",
  "../images/o5.jpeg",
  "../images/o6.jpeg",
  "../images/o7.jpeg",
  "../images/o8.jpeg",
  "../images/o9.jpeg",
  "../images/o10.jpeg",
  "../images/o11.jpeg",
  "../images/o12.jpeg",
  "../images/o13.jpeg",
  "../images/o14.jpeg",
  "../images/o15.jpeg",
  "../images/o16.jpeg",
  "../images/o17.jpeg",
  "../images/o18.jpeg",
  "../images/o19.jpg",
  "../images/o20.jpeg",
];
let imageCurrentArray = normalPics;

window.onload = () => {
  addImagesToGallery();
  if (arrayImageNo === imageCurrentArray.length) {
    document.getElementById("imgButton").style.display = "none";
  }

  document.getElementById(activeClassId).classList.add("activeClass");
};
const addImagesToGallery = () => {
  imageCurrentArray.map((data, index) => {
    if (index < 2) {
      var img1 = document.getElementById(`event-images${index + 1}`);
      img1.style.backgroundImage = "url('" + data + "')";
    } else if (index < arrayImageNo) {
      const imageComponent = document.createElement("img");
      const imageDiv = document.createElement("div");
      imageComponent.setAttribute("alt", "image");
      imageComponent.setAttribute("id", index);
      imageComponent.setAttribute("src", data);
      imageDiv.setAttribute("id", "D" + index);
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

function showGalleryImg(galleryType, id) {
  var mySecondList = document.getElementById("option-list");
  mySecondList.style.display = null;
  galleryToggle = false;
  document.getElementById("select-button").innerHTML = galleryType;
  document.getElementById(activeClassId).classList.remove("activeClass");
  document.getElementById(id).classList.add("activeClass");
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
      const imageDiv = document.getElementById("D" + index);
      gallery.removeChild(imageDiv);
    }
    if (index + 1 === imageCurrentArray.length) {
      if (!wholeState) {
        imageCurrentArray = galleryType;
        arrayImageNo = 8;
        noOfImages = 8;
        if (arrayImageNo !== galleryType.length) {
          document.getElementById("imgButton").style.display = null;
        }
      }
      arrayImageNo = noOfImages;
      addImagesToGallery();
      if (arrayImageNo === imageCurrentArray.length) {
        document.getElementById("imgButton").style.display = "none";
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

galleryButton.addEventListener("click", () => {
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
  var mySecondList = document.querySelector(".gallery-dropdown");
  mySecondList.classList.add("myNewList");
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
