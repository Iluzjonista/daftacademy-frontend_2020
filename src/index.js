import "./styles/style.sass";

import { newData } from "./api";
import {
  slider,
  changeClass,
  changeYear,
  scrollToTop,
  hideProducts,
  showAllProducts,
} from "./functions";

newData();
document.addEventListener("DOMContentLoaded", () => {
  // console.log("DOM fully loaded and parsed");
  hideProducts();
  changeClass();
  slider();
  changeYear();
  scrollToTop();
  showAllProducts();
});

