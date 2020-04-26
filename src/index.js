import "./styles/style.sass";
import {
  slider,
  changeClass,
  changeYear,
  scrollToTop,
  hideProducts,
  showAllProducts,
} from "./functions";

document.addEventListener('DOMContentLoaded', () => {
  // console.log("DOM fully loaded and parsed");
  hideProducts();
  changeClass();
  slider();
  changeYear();
  scrollToTop();
  showAllProducts();
});
