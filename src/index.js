import "./styles/style.sass";

function changeClass() {
  let addToCart = document.getElementsByClassName("products__price");

  for (var i = 0; i < addToCart.length; i++) {
    var link = addToCart[i],
      classes = link.getAttribute("class");

    if (classes.indexOf("products__price") > -1) {
      link.onmouseover = function () {
        this.setAttribute("class", classes + " products__price--hover");
      };
      // Remove active class
      link.onmouseout = function () {
        this.setAttribute("class", classes);
      };
    }
  }
}
changeClass();
function slider() {
  const container = document.querySelector(".slider__slider");
  const leftArr = document.querySelector(".slider__arrow--left");
  const rightArr = document.querySelector(".slider__arrow--right");
  // const image = document.querySelectorAll(".img__slider")[0];
  // let translate = image.width;
  let translate = 55;

  rightArr.onclick = () => {
    let move = 0;
    let slideTimer = setInterval(function () {
      if (move < 100) {
        container.scrollLeft += translate;
        move += 20;
      } else {
        window.clearInterval(slideTimer);
      }
    }, 25);
  };

  leftArr.onclick = () => {
    let move = 0;
    let slideTimer = setInterval(function () {
      if (move < 100) {
        container.scrollLeft -= translate;
        move += 20;
      } else {
        window.clearInterval(slideTimer);
      }
    }, 25);
  };
}
slider();
