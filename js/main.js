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
let table = document.querySelector("#calendar-table");
let tableBody = table.children[1].firstElementChild;



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
  for (const li of childArray) {
    li.classList.remove("square-style");
    li.classList.add("row-style");
    if (li.lastElementChild.classList.contains("edit")) {
      return;
    } else {
      let editBtn = document.createElement("button");
      editBtn.classList.add("edit");
      li.appendChild(editBtn);
    }
  }

  if (day.firstElementChild.classList.contains("onDay")) {
    console.log(day.firstElementChild.classList);
  } else {
    let dayTitle = document.createElement("li");
    dayTitle.classList.add("onDay");
    let dayTitleContent;
    switch (day.id) {
      case "saturday":
        dayTitleContent = "شنبه";
        break;
      case "sunday":
        dayTitleContent = "یکشنبه";
        break;

      case "monday":
        dayTitleContent = "دوشنبه";
        break;
      case "Tuesday":
        dayTitleContent = "سه شنبه";
        break;
      case "wednesday":
        dayTitleContent = "چهارشنبه";
        break;
      case "thursday":
        dayTitleContent = "پنج شنبه";
        break;
    }
    dayTitle.innerHTML = dayTitleContent;
    day.prepend(dayTitle);
  }
  day.childNodes = childArray;
  day.classList.add("typeB");
  mainOfContainer.appendChild(day);
}

function changeTocCalendarStyle() {
  let ul = document.querySelectorAll('ul');
  ul.forEach(element => {
    element.classList.remove('typeB');
    element.firstElementChild.remove();
    let li = element.children
    for (const item of li) {
      item.classList.remove('row-style');
      item.classList.add('square-style');
      item.lastElementChild.remove();
    }
   switch (element.id) {
     case "saturday":
       tableBody.getElementsByTagName('td')[0].appendChild(element);
       break;
   
     case "sunday":
      tableBody.getElementsByTagName('td')[1].appendChild(element)
       break;

       case "monday":
        tableBody.getElementsByTagName('td')[2].appendChild(element)
       break;
       case "Tuesday":
        tableBody.getElementsByTagName('td')[3].appendChild(element)
       break;
       case "wednesday":
        tableBody.getElementsByTagName('td')[4].appendChild(element)
       break;
       case "thursday":
        tableBody.getElementsByTagName('td')[5].appendChild(element)
       break;
   }
  });
}

function compund(j,y) {

  for (let i = 1; i <= y; i++) {
     j +=j*0.25;
    
    
    
  }
console.log(j);
}

compund(100,35);
