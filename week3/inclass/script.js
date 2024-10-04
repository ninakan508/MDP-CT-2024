let DOMsection = document.getElementById("DOMoptions")
let newParagraph = document.createElement("p")
let buttonColor = document.getElementById("btnColorChange")
let buttonToggle = document.getElementById("btnImageToggle")
let galleryIMG  = document.getElementById("imageGallery").children[0]

console.log (document.getElementById("imageGallery").children[0])

DOMsection.appendChild(newParagraph)
newParagraph.innerText = "hello world"

let imageToggle = function () {
    console.log("hi")
    //galleryIMG .src = "images/gallery2.jpg"
    console.log(galleryIMG.src)

    if(galleryIMG.src.includes("gallery1")){
        // 这里不再比较而是确认是否包含
        console.log("gallery1")
        galleryIMG.src = "images/gallery2.jpg"
        // do one thing
    }
    else{
        // 如果有第三种情况继续else if来确认是否包含
        console.log("gallery2")
        // do the other thing
        galleryIMG.src = "images/gallery1.jpg"
    }
}
// 给加一个event
buttonToggle.addEventListener("click", imageToggle)
buttonColor.addEventListener("click", function () {
    // 想要被function执行的内容/行为
    // DOMsection.style.backgroundColor = "rgb(" + 255 + ", " + 255 + ", 0)"
    //  用引号把不想被影响的部分quote出去

    let redPortion = Math.random() * 255
    let greenPortion = Math.random() * 255
    let bluePortion = Math.random() * 255

    let randomColor = "rgb(" + redPortion + "," + greenPortion + "," + bluePortion + ")"
    console.log(randomColor)
    DOMsection.style.backgroundColor = randomColor
})

