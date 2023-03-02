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


// Adding products in cart
function finalResult() {
  let addCart = document.querySelectorAll(".product-add");
  addCart.forEach((check) => {
    check.addEventListener("click", (e) => {
      let findData = e.target.parentElement;
      let getImgLink = findData.children[1].src;
      let getCartName = findData.children[2].children[0].innerText;
      let getCartPrice = findData.children[2].children[1].innerText.substr(0,6);

      
      let orderCartList = document.querySelector(".order-cart-list");
      let element = result(getImgLink, getCartName, getCartPrice);
      orderCartList.append(element);
    });
  });
        
  function result(getImgLink, getCartName, getCartPrice) {
  return `<div class="list">
  <img src="${getImgLink}" class="list-img" />
  <div class="list-content">
    <div class="list-content-left">
      <h3>${getCartName}</h3>
      <div class="list-buttons">
        <button>-</button>
        <input type="text" value="1" />
        <button>+</button>
      </div>
    </div>
    <div class="list-content-right">
      <h3 class="cart-price">${getCartPrice}</h3>
      <button class='trash'><i class="fa fa-trash"></i> Remove</button>
    </div>
  </div>
</div>`
}

  // remove list cart from order list
  const trash = document.querySelectorAll(".trash");
  trash.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const particularBtn =
        event.target.parentElement.parentElement.parentElement;
      console.log(particularBtn);
      particularBtn.remove();
    });
  });
}
finalResult();


