import {
  cocktails
} from "./data.js";
///////////////bringing one drinks object when clicked///////////////////////
let find = cocktails.find(el => {
  console.log(el, "drinks")
  return el.idDrink === localStorage.getItem("currentCoctailId")
})
////////////////////changing drink htmls innerhtml ////////////////////////////////////////////////////
let drinkRecieps = `
<div class = "img">
<img src = "${find.strDrinkThumb}"/>
</div>
<div class = "drink-info" >
<h3 class = "cocktail-name-drink" > Drink Name: ${ find.strDrink} </h3>
<h3 class = "cocktail-category" > Type Of Drink: ${ find.strCategory} </h3>
<h3 class = "cocktail-instruction" > Instructions: ${ find.strInstructions} </h3>
<h3 class = "h3-last">ingredients: </h3>
<button class="showBtn">SHOW ALL COCKTAILS </button>
</div>`
const drinkWrapper = document.querySelector(".drink-wrapper")
let div = document.createElement('div');
div.setAttribute("class", "cocktails-blocks-drink")
div.innerHTML = drinkRecieps;
drinkWrapper.appendChild(div);
/////////////////////////creating ingredients dynamically/////////////////////////////
let drinkInfo = document.querySelector(".h3-last")
let ul = document.createElement('ul');
for (let el in find) {
  console.log(el)
  if (el.includes("strIngredient")) {
    let li = document.createElement("li")
    li.innerHTML = find[el];
    ul.appendChild(li)
  }
}
drinkInfo.appendChild(ul)
///////////////////////////BUTTON TO GO BACK TO MAIN PAGE/////////////////////////////////
let button = document.querySelector(".showBtn")
button.addEventListener("click", display)

function display() {
  location.href = "index.html"
}