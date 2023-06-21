let bars = document.getElementById("bars");
let nav = document.querySelector(".navbar");
let user = document.getElementById("user");
let account = document.querySelector(".account");
let accountClose = document.querySelector(".close");
let blur = document.querySelector(".blur");
let cart = document.getElementById("cart");
let orderCart = document.querySelector(".order-cart");

// nav tab using bars
bars.addEventListener("click", () => {
  account.classList.remove("account-active");
  nav.classList.toggle("active");
  window.style.backgroundColor = "black";
});
window.addEventListener("scroll", () => {
  nav.classList.remove("active");
});

// account tab
user.addEventListener("click", () => {
  account.classList.toggle("account-active");
  nav.classList.remove("active");
  blur.classList.remove("active");
  orderCart.classList.remove("act");
});
accountClose.addEventListener("click", () => {
  account.classList.remove("account-active");
  user.style.color = "#ff597b";
});

// icons color set
let icons = document.querySelectorAll(".icons a");
icons.forEach((data) => {
  data.addEventListener("click", (e) => {
    let iconAnchor = document.querySelectorAll(".icons a");
    iconAnchor.forEach((icon) => {
      icon.style.color = "#ff597b";
    });
    e.target.style.color = "dodgerblue";
  });
});

// cart active
cart.addEventListener("click", () => {
  blur.classList.toggle("active");
  orderCart.classList.toggle("act");
  account.classList.remove("account-active");
});
function cartClose() {
  blur.classList.remove("active");
  orderCart.classList.remove("act");
  cart.style.color = "#ff597b";
}
