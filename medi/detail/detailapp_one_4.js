// Navigate product images
// product 1
const BigImage = document.getElementById("big-image");
const imgSlider = document.getElementById("img-slider");

imgSlider.addEventListener("click", (event) => {
  if (event.target === product_1) {
    BigImage.setAttribute("src", "images/product1/productSub.PNG");
  } else if (event.target === product_2) {
    BigImage.setAttribute("src", "images/product1/product41.PNG");
  } else if (event.target === product_3) {
    BigImage.setAttribute("src", "");
  } else if (event.target === product_4) {
    BigImage.setAttribute("src", "");
  } else {
    BigImage.setAttribute("src", "");
  }
});

// Navigate information

const chooseInfo = document.getElementById("more-infos");
const choose = document.getElementsByClassName("choose");
const paragraph = document.getElementsByClassName("paragraph");

function styleItem(a, b, c) {
  a.style.cssText = "color:black ; padding-bottom: 6px";
  b.style.cssText = "color:black ; ";
  c.style.cssText = "color:black ; ";
}

function displayPrph(e, f, g) {
  e.style.display = "block";
  f.style.display = "none";
  g.style.display = "none";
}

chooseInfo.addEventListener("click", (event) => {
  if (event.target === choose[0]) {
    styleItem(choose[0], choose[1], choose[2]);
    displayPrph(paragraph[0], paragraph[2], paragraph[1]);
  } else if (event.target === choose[1]) {
    styleItem(choose[1], choose[0], choose[2]);
    displayPrph(paragraph[1], paragraph[0], paragraph[2]);
  } else {
    styleItem(choose[2], choose[0], choose[1]);
    displayPrph(paragraph[2], paragraph[0], paragraph[1]);
  }
});

// add items to the cart

const addToCart = document.getElementById("add-to-cart");
const itemsAdded = document.getElementById("items-added");
const counter = document.getElementById("counter");

addToCart.addEventListener(
  "click",
  (ev) => (itemsAdded.textContent = counter.value)
);
