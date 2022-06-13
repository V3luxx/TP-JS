let img = document.querySelectorAll(".carousel__photo");
let next = document.querySelector(".carousel__button--next");
let prev = document.querySelector(".carousel__button--prev")
let point = document.getElementsByClassName("point");

function Next() {
    for (i = 0; i < img.length; i++) {
        if (img[i].classList.contains("initial")) {
            img[i].classList.remove("initial")
            point[i].classList.remove("active")
            if ( i < img.length-1) {
                img[i+1].classList.add("initial")
                point[i+1].classList.add("active");
                break;
            }else
                img[0].classList.add("initial")
                point[0].classList.add("active");
                break;
            }
        }
    }


function Prev() {
    for (i = 0; i < img.length; i++) {
        if (img[i].classList.contains("initial")) {
            img[i].classList.remove("initial")
            point[i].classList.remove("active")
            if (i-1 < 0) {
                img[img.length-1].classList.add("initial")
                point[img.length-1].classList.add("active");
                break;
            }else
                img[i-1].classList.add("initial")
                point[i-1].classList.add("active");
                break;
        }
    }
}

function currentSlide(id) {

    for (i=0; i<img.length; i++){
        if (id == i){
           img[i].classList.add('initial')
           point[i].classList.add('active') 
        }else{
            img[i].classList.remove("initial")
            point[i].classList.remove("active")
        }
    }
  }


next.addEventListener("click", Next)
prev.addEventListener("click", Prev)
