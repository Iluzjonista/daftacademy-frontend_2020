function slider() {
  const container = document.querySelector(".slider__slider");
  const leftArr = document.querySelector(".slider__arrow--left");
  const rightArr = document.querySelector(".slider__arrow--right");
  const image = document.querySelectorAll(".img__slider")[0];
  let translate = 55;

  rightArr.onclick = () => {
    let move = 0;
    let slideTimer = setInterval(function () {
      if (move < 100) {
        container.scrollLeft += translate;
        move += 5;
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
        move += 5;
      } else {
        window.clearInterval(slideTimer);
      }
    }, 25);
  };
}

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

function changeYear() {
  const years = document.querySelector(".current__year");
  let year = new Date().getFullYear();
  years.textContent = `${year.toString()}`;
}

function scrollToTop() {
  const btn = document.querySelector(".button__scroll");
  window.addEventListener("scroll", () => {
    if (window.scrollY / window.innerHeight > 0.5)
      // if (window.scrollY / document.body.clientHeight > 0.5) {
      btn.classList.remove("hide");
    else btn.classList.add("hide");
  });
  btn.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    window.scrollTo(0, 0);
  });
}
function hideProducts() {
  let items = document.querySelectorAll(".products__item:nth-of-type(1n+9)");
  window.onload = function () {
    items.forEach(function (el) {
      el.classList.add("hide");
    });
  };
}

// function showAllProducts() {
//   let items = document.querySelectorAll(".products__item")[0];
//   const btn = document.querySelector(".arrivals__button");
//   btn.addEventListener("click", () => {
//     for (let i = 0; i < 4; i++) {
//       const newItem = items.cloneNode(true);
//       btn.before(newItem);
//     };
//     btn.classList.add("hide");
//   });
// }


function showAllProducts() {
  let items = document.querySelectorAll(".products__item:nth-of-type(1n+9)");
  const btn = document.querySelector(".arrivals__button");
  btn.addEventListener("click", () => {
    items.forEach(function (el) {
      el.classList.remove("hide");
    });
    btn.classList.add("hide");
  });
}

export {
  slider,
  changeClass,
  changeYear,
  scrollToTop,
  hideProducts,
  showAllProducts,
};
