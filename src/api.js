function newData() {
  function apiProducts() {
    let slider = document.querySelectorAll(".slider__element");
    slider.forEach(function (el) {
      el.classList.add("hide");
    });
    document.querySelector(".slider").style.gridTemplateColumns = "1fr";
    let items = document.querySelectorAll(".products");
    items.forEach(function (el) {
      el.classList.add("hide");
    });
    document.querySelectorAll(".arrivals__more")[0].classList.add("hide");
    document.querySelectorAll(".ads__grid")[0].classList.add("hide");
  }
  apiProducts();
  fetch(
    "https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=48&store=US",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "asos2.p.rapidapi.com",
        "x-rapidapi-key": "3091f19a42mshb2ead0ba61df40fp1a2b4cjsna3f54dcfde5d",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let apiSlider = document.querySelectorAll(".slider__img");
      let sl = 10;
      let ind = 0;
      apiSlider.forEach(function (el) {
        document.querySelectorAll(".slider__text .slider__description")[
          ind
        ].textContent = data.products[sl].name;
        document.querySelectorAll(".slider__text .slider__price")[
          ind
        ].textContent = data.products[sl].price.current.text;
        document.querySelectorAll(".img__slider")[ind].src =
          "https://" + data.products[sl].imageUrl;
        sl++;
        ind++;
      });

      let apiProduct = document.querySelectorAll(".products__item");
      let len = 0;
      apiProduct.forEach(function (el) {
        let apiDesc = (document.querySelectorAll(".products__description")[
          len
        ].textContent = data.products[len].name);
        let apiPriceNew = (document.querySelectorAll(
          ".products__price--current"
        )[len].textContent = data.products[len].price.current.text);
        if (data.products[len].price.isMarkedDown) {
          let apiPriceOld = (document.querySelectorAll(".products__price--old")[
            len
          ].textContent = data.products[len].price.previous.text);
        }
        let apiImage = (document.querySelectorAll(".img__product")[len].src =
          "https://" + data.products[len].imageUrl);
        len++;
      });

      document.querySelector(".ads__item--first .img__ads").src =
        "https://" + data.products[31].imageUrl;
      document.querySelector(".ads__item--second .img__ads").src =
        "https://" + data.products[32].imageUrl;
      document.querySelector(".ads__item--third .img__ads").src =
        "https://" + data.products[33].imageUrl;
      document.querySelector(".ads__item--fourth .img__ads").src =
        "https://" + data.products[11].imageUrl;

      let loaders = document.querySelectorAll(".arrivals__gridloader");
      loaders.forEach(function (el) {
        el.classList.add("hide");
      });
      document.querySelector(".slider").style.gridTemplateColumns =
        "1fr 5fr 1fr";
      let slider = document.querySelectorAll(".slider__element");
      slider.forEach(function (el) {
        el.classList.remove("hide");
      });
      let items = document.querySelectorAll(".products");
      items.forEach(function (el) {
        el.classList.remove("hide");
      });
      document.querySelectorAll(".arrivals__more")[0].classList.remove("hide");
      document.querySelectorAll(".ads__grid")[0].classList.remove("hide");
    })
    .catch((err) => {
      console.log(err);
      let loaders = document.querySelectorAll(".arrivals__gridloader");
      loaders.forEach(function (el) {
        el.classList.add("hide");
      });
      let errorMess = document.querySelectorAll(".error__message");
      errorMess.forEach(function (el) {
        el.classList.remove("hide");

        let text = document.createTextNode(" For developers " + err);
        el.appendChild(text);
      });
    });
}

export {
	newData,
  };