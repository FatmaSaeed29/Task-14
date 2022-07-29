// var x=document.getElementById("read");
// var y=document.getElementById("here");


// x.addEventListener('click' , function(){
//     y.classList.toggle("active");
// })

var img1 = document.getElementById("image1");
var img2 = document.getElementById("image2");
var img3 = document.getElementById("image3");
var img4 = document.getElementById("image4");
var thumbnail1 = document.getElementById("thum1")
var thumbnail2 = document.getElementById("thum2")
var thumbnail3 = document.getElementById("thum3")
var thumbnail4 = document.getElementById("thum4")

img2.classList.add("hide");
img3.classList.add("hide");
img4.classList.add("hide");

thumbnail1.addEventListener('click' , function(){
    img1.classList.remove("hide")
    img2.classList.add("hide");
    img3.classList.add("hide");
    img4.classList.add("hide");
})

thumbnail2.addEventListener('click' , function(){
    img1.classList.add("hide")
    img2.classList.remove("hide");
    img3.classList.add("hide");
    img4.classList.add("hide");
})

thumbnail3.addEventListener('click' , function(){
    img1.classList.add("hide")
    img2.classList.add("hide");
    img3.classList.remove("hide");
    img4.classList.add("hide");
})

thumbnail4.addEventListener('click' , function(){
    img1.classList.add("hide")
    img2.classList.add("hide");
    img3.classList.add("hide");
    img4.classList.remove("hide");
})

