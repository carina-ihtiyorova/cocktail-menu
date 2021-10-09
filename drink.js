import {
  cocktails
} from "./data.js";
const drinkWrapper = document.querySelector(".drink-wrapper")
let find = cocktails.find(el => {
  return el.idDrink === localStorage.getItem("currentCoctailId")
})

let drinkRecieps = `

          <div class = "img">
          <img src = "${find.strDrinkThumb}"/>
          </div>
           <div class = "drink-info" >
          <h3 class = "cocktail-name-drink" > Drink Name: ${ find.strDrink} </h3>
          <h3 class = "cocktail-category" > Type Of Drink: ${ find.strCategory} </h3>
          <h3 class = "cocktail-instruction" > Instructions: ${ find.strInstructions} </h3>
          <h3 >ingredients: </h3>
             <ul class = "ingredients">
               <li > ${find.strIngredient1} </li> <li >${find.strIngredient2} </li> <li > ${find.strIngredient3} </li> <li >${find.strIngredient4} </li></ul>
          <button class="showBtn">SHOW ALL COCKTAILS </button>
          </div>`
let div = document.createElement('div');
div.setAttribute("class", "cocktails-blocks-drink")
div.innerHTML = drinkRecieps;
drinkWrapper.appendChild(div);
///////////////////////////BUTTON/////////////////////////////////
let button = document.querySelector(".showBtn")
button.addEventListener("click", display)

function display() {
  location.href = "index.html"
}