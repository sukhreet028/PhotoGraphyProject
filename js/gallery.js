const mainGallery = document.querySelector(".main-gallery");
const gallery = document.querySelector(".gallery-images");
let galleryToggle = false;
// var normalWed= ['../images/o2.jpeg'];
// var normalFam =['../images/o3.jpeg']
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
  "../images/img0.jpeg",
  "../images/img0.1.jpeg",
  "../images/img1.jpeg",
  "../images/img2.jpeg",
  "../images/img3.jpeg",
  "../images/img4.jpeg",
  "../images/img5.jpeg",
  "../images/img6.jpeg",
  "../images/n4.jpeg",
  "../images/n5.jpeg",
  "../images/p6.jpeg",
  "../images/w9.jpeg",
  "../images/w10.jpeg",
  "../images/w11.jpeg",
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
  "../images/p00.jpeg",
  "../images/p0.jpeg",
  "../images/p1.jpeg",
  "../images/p2.jpeg",
  "../images/p3.jpeg",
  "../images/p4.jpeg",
  "../images/p5.jpeg",
  "../images/p6.jpeg",
  "../images/p9.jpeg",
  "../images/p10.jpeg",
  "../images/p11.jpeg",
  "../images/p12.jpeg",
  "../images/p13.jpeg",
  "../images/p14.jpeg",
  "../images/p15.jpeg",
  "../images/p16.jpeg",
  "../images/p17.jpeg",
  "../images/p18.jpeg",
  "../images/p19.jpeg",
  "../images/p20.jpeg",
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
  "../images/n7.jpeg",
  "../images/n8.jpeg",
  "../images/n9.jpeg",
  "../images/n10.jpeg",
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
  "../images/o0.1.jpeg",
  "../images/o0.jpeg",
  "../images/o1.jpeg",
  "../images/o2.jpeg",
  "../images/o3.jpeg",
  "../images/o4.jpeg",
  "../images/o5.jpeg",
  "../images/o6.jpeg",
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
  "../images/o19.jpeg",
  "../images/o20.jpeg",
];

let noOfImages = 8;
let wholeCurrentArray;
let arrayImageNo = 8;

let imageCurrentArray = normalPics.slice(0, 8);
wholeCurrentArray = normalPics;
console.log(imageCurrentArray);
// const imageComponent = document.createElement('img');
// imageComponent.setAttribute("alt","image");
window.onload = () => {
  addImagesToGallery();
};
const addImagesToGallery = () => {
  imageCurrentArray.map((data, index) => {
    if (index < 2) {
      var img1 = document.getElementById(`event-images${index + 1}`);
      // console.log(img1);
      img1.style.backgroundImage = "url('" + data + "')";
    } else {
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
      console.log(data);
    }
  });
};

const selectList = document.getElementById("gallery");

function showGalleryImg(galleryType) {
  var mySecondList = document.getElementById("option-list");
  mySecondList.style.display = null;
  galleryToggle = false;

  if (galleryType === "natureGal") {
    showImages(natureGal);
  } else if (galleryType === "otherGal") {
    showImages(otherGal);
  } else if (galleryType === "eventGal") {
    showImages(eventGallery);
  } else if (galleryType === "proGal") {
    showImages(professionalGal);
    //my added data
  } else if (galleryType === "wedGal") {
    showImages(normalPics);
  }
}

const showImages = (galleryType) => {
  console.log(imageCurrentArray);
  imageCurrentArray.map((data, index) => {
    if (index > 1 && index < arrayImageNo) {
      const imageDiv = document.getElementById("D" + index);
      console.log("gallery" + gallery + "  " + index);
      gallery.removeChild(imageDiv);
      if (index + 1 === arrayImageNo) {
        imageCurrentArray = galleryType;
        wholeCurrentArray = galleryType;
        addImagesToGallery();
      }
    }
  });
};

function showMoreImg() {
  arrayImageNo = noOfImages;
  console.log("clicked more function");
  if (wholeCurrentArray.length > noOfImages) {
    let moreImagesArray = imageCurrentArray;
    console.log("clicked more function inside if ");
    noOfImages = noOfImages + 6;
    if (noOfImages <= wholeCurrentArray.length) {
      console.log("clicked more function inside if2 ");
      const startIndex = noOfImages - 5;
      const leftImages = wholeCurrentArray.splice(startIndex, noOfImages);
      leftImages.map((data) => {
        moreImagesArray.push(data);
      });
      // addImagesToGallery();
    } else {
      console.log("clicked more function inside else ");
      const startIndex = noOfImages - 5;
      const leftImages = wholeCurrentArray.splice(
        startIndex,
        wholeCurrentArray.length
      );
      leftImages.map((data, index) => {
        moreImagesArray.push(data);
        if (index === leftImages.length - 1) {
          showImages(moreImagesArray);
          noOfImages = wholeCurrentArray.length;
        }
      });

      // console.log(moreImagesArray);
      // console.log(wholeCurrentArray.splice(7, wholeCurrentArray.length));
    }
  }
}

let gallerybtn = false;
const galleryList = document.querySelector(".gallery-nav");
// const contactList=document.querySelector('.contact-nav');

const galleryButton = document.querySelector(".gallery-burger-icon");

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
  console.log("inside llll");
  var mySecondList = document.querySelector(".gallery-dropdown");
  mySecondList.classList.add("myNewList");
}
const showGalleryOptions = () => {
  console.log("inside");
  galleryToggle = !galleryToggle;
  var mySecondList = document.getElementById("option-list");
  if (galleryToggle) {
    mySecondList.style.display = "block";
  } else {
    mySecondList.style.display = null;
  }
};
let currentLargeImage;
let previousImage;
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

function showList(index) {
  var galleryList1 = document.querySelector(".gallery-dropdown");
  console.log(galleryList1);
  var galleryItems = galleryList1.querySelectorAll("li");
  console.log(galleryItems);
  var item2 = galleryItems.value;
  console.log(item2);
}
showList();
