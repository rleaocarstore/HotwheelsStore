// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  navbarNav.focus();
  e.preventDefault();
};

// Toggle class active untuk serach form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const ShoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  ShoppingCart.classList.toggle("active");
  ShoppingCart.focus();
  e.preventDefault();
};

// Klik di luar elemen

const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !ShoppingCart.contains(e.target)) {
    ShoppingCart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");
itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});
const itemDetailS15 = document.querySelector("#item-detail-S15");
const itemDetailButtonss = document.querySelectorAll(".item-detail-buttons");
itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailS15.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};

/*// panel Box
const itemDetailpanel = document.querySelector("#item-detail-panel");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");
itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailpanel.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close panel
document.querySelector(".panel .close-icon").onclick = (e) => {
  itemDetailpanel.style.display = "none";
  e.preventDefault();
};

// klik di luar panel
window.onclick = (e) => {
  if (e.target === itemDetailpanel) {
    itemDetailpanel.style.display = "none";
  }
};*/
