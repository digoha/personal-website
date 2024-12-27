filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  const elements = document.querySelectorAll(".project");

  // Remove a classe "show" de todos os elementos
  elements.forEach((el) => {
    el.classList.remove("show");
    setTimeout(addShow, 100);
  });

  function addShow(){
    elements.forEach((el) => {
      if (c === "all" || el.classList.contains(c)) {
        el.classList.add("show");
      }
    });
  }
  // Adiciona a classe "show" apenas aos elementos que correspondem ao filtro
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


let buttonsBox = document.getElementById('filter-btn-box');
let btns = buttonsBox.getElementsByClassName('filter-button');

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("selected");
      current[0].className = current[0].className.replace(" selected", "");
      this.className += " selected";
    });
}


////////////////////////////////////


