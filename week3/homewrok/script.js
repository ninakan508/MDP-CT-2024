let thumb1 = document.getElementById("btn1")


function changeImage(imageSrc) {
  document.getElementById('displayedImage').src = imageSrc
}


thumb1.addEventListener("click", changeImage)