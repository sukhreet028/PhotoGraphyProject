function showMoreImg() {
    console.log('clicked more function');
    if (wholeCurrentArray.length > noOfImages) {
      let moreImagesArray = imageCurrentArray;
      console.log('clicked more function inside if ');
      noOfImages = noOfImages + 6;
      if (noOfImages <= wholeCurrentArray.length) {
        console.log('clicked more function inside if2 ');
        const startIndex = noOfImages - 5;
        const leftImages = wholeCurrentArray.splice(startIndex, noOfImages);
        leftImages.map(data => {
          moreImagesArray.push(data);
        })
        addImagesToGallery();
      } else {
        console.log('clicked more function inside else ');
        const startIndex = noOfImages - 5;
        const leftImages = wholeCurrentArray.splice(startIndex, wholeCurrentArray.length);
        leftImages.map((data,index) => {
          moreImagesArray.push(data);
          if(index === leftImages.length - 1) {
            showImages(moreImagesArray);
          }
        })
        
        // console.log(moreImagesArray);
        // console.log(wholeCurrentArray.splice(7, wholeCurrentArray.length));
        
      }
    }
  }