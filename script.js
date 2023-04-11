'use strict';
// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }
// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}
// add click event to all modal items
testimonialsItem.forEach(item => {
  item.addEventListener("click", function () {
    const avatar = this.querySelector("[data-testimonials-avatar]");
    modalImg.src = avatar.src;
    modalImg.alt = avatar.alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
});

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);
// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
select.addEventListener("click", function () { elementToggleFunc(select); });
// add event in all select items
selectItems.forEach((item) => {
  item.addEventListener("click", () => {
    let selectedValue = item.innerText.toLowerCase();
    selectValue.innerText = item.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
});

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = (selectedValue) => {
  filterItems.forEach((item) => {
    if (selectedValue === "all" || selectedValue === item.dataset.category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");
const thankYouMsg = document.querySelector("[data-thankyou-msg]");
const returnBtn = document.querySelector("[data-return-btn]");

// add event to all form input fields
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// add event to form submit
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // create an object to store form data
  const formData = {
    fullname: form.fullname.value,
    email: form.email.value,
    message: form.message.value
  };

  // save form data to local storage as a string
  localStorage.setItem("formData", JSON.stringify(formData));

  // hide the form and show thank you message with return button
  form.style.display = "none";
  thankYouMsg.style.display = "block";

  // add event to return button
  returnBtn.addEventListener("click", function () {
    // redirect to homepage
    window.location.href = "http://www.cc.puv.fi/~e1500953";
  });
});





// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
navigationLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    pages.forEach((page, pageIndex) => {
      if (link.innerHTML.toLowerCase() === page.dataset.page) {
        page.classList.add("active");
        link.classList.add("active");
        window.scrollTo(0, 0);
      } else {
        page.classList.remove("active");
        navigationLinks[pageIndex].classList.remove("active");
      }
    });
  });
});