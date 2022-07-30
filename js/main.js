// variables //
let container = document.querySelector("#container");
let mainOfContainer = document.querySelector(".main-of-container");
let showCalendarBtn = document.querySelector("#shows-calendar");
let showListBtn = document.querySelector("#shows-list");
let removeBtns = document.querySelectorAll(".remove-btn");
let saturDayInfo = document.querySelector("#saturday");
let sunDayInfo = document.querySelector("#sunday");
let monDayInfo = document.querySelector("#monday");
let tuesDayInfo = document.querySelector("#Tuesday");
let wednesDayInfo = document.querySelector("#wednesday");
let thursDayInfo = document.querySelector("#thursday");

// event listeners
// document.addEventListener("DOMContentLoaded", () => {
  //   container.classList.add("calendar");
  // });
  showListBtn.addEventListener("click", () => {
    if (container.classList.contains("calendar")) {
      container.classList.remove("calendar");
      container.classList.add("list");
      changeToListStyle(saturDayInfo);
      changeToListStyle(sunDayInfo);
      changeToListStyle(monDayInfo);
      changeToListStyle(tuesDayInfo);
      changeToListStyle(wednesDayInfo);
      changeToListStyle(thursDayInfo);
    }
  });
  
  showCalendarBtn.addEventListener("click", () => {
    if (container.classList.contains("list")) {
      container.classList.remove("list");
      container.classList.add("calendar");
      changeTocCalendarStyle();
  }
});

removeBtns.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });
});

// functions
function changeToListStyle(day) {
  let childArray = day.children;
  for (let i = 1; i <= childArray.length; i++) { 
    childArray[i].classList.remove("square-style");
    childArray[i].classList.add("row-style");
  }
  day.childNodes = childArray;
  day.classList.add("typeB");
}

function changeTocCalendarStyle() {
  let ul = document.querySelectorAll('ul');
  ul.forEach(element => {
    element.classList.remove('typeB');
    let li = element.children
    for (let i = 1; i <= li.length; i++) {
      li[i].classList.remove('row-style');
      li[i].classList.add('square-style');
    }
  });
  
}
