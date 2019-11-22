"use strict";
let editBtnElem = document.querySelector(".js-btn-edit");
let saveBtnElem = document.querySelector(".js-btn-save");
let cancelBtnElem = document.querySelector(".js-btn-cancel");
let editSectionElem = document.querySelector(".js-section-1");

if (localStorage.getItem("content")) {
  editSectionElem.innerText = localStorage.getItem("content");
}

editBtnElem.addEventListener("click", function() {
  editSectionElem.setAttribute("contenteditable", "true");
  attributeSwitcher();
});

saveBtnElem.addEventListener("click", function() {
  editSectionElem.setAttribute("contenteditable", "false");
  localStorage.setItem("content", editSectionElem.innerText);
  attributeSwitcher();
});

cancelBtnElem.addEventListener("click", function() {
  editSectionElem.setAttribute("contenteditable", "false");
  editSectionElem.innerText = localStorage.getItem("content");
  attributeSwitcher();
});

function attributeSwitcher() {
  editSectionElem.classList.toggle("section-1--editeble");
  editBtnElem.toggleAttribute("disabled");
  saveBtnElem.toggleAttribute("disabled");
  cancelBtnElem.toggleAttribute("disabled");
}
