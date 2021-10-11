import {
   cocktails
} from "./data.js"; // this is your data


// <p class="cocktail-instructions">${arr.strInstructions}</p>
///////////////////////////////////////////////////////////////
////////////////// DEVELOPE BELOW THIS LINE ///////////////////
///////////////////////////////////////////////////////////////
// let wrapper = document.querySelector('.wrapper');
let cocktailWrapper = document.querySelector(".cocktail-wrapper");
let searchButton = document.querySelector(".search-button")
let searchInput = document.querySelector(".cocktail-search-name")

cocktails.forEach(arr => {
   let cocktail = `
        <div class="cocktail">
        <img src="${arr.strDrinkThumb}" id="${arr.idDrink}" />
        <p class="cocktail-name" id="${arr.idDrink}">${arr.strDrink}</p> 
        </div>`;
   let div = document.createElement('div');
   div.setAttribute("class", "cocktails-blocks")

   div.innerHTML = cocktail;
   cocktailWrapper.appendChild(div);
});

searchInput.addEventListener("input", searchStrDrink)

function searchStrDrink() {
   let div = document.querySelectorAll(".cocktail")
   div.forEach(el => {
      // el.removeEventListener("click",cocktailIdSearch)
      el.innerHTML = ""

   })
   let filteredCoctailName = cocktails.filter(el => {
      return el.strDrink.toLowerCase().includes(searchInput.value.toLowerCase());
   })
   filteredCoctailName.forEach((el, index) => {
      let filteredCoctails = `
      <div class="cocktail">
      <img src="${el.strDrinkThumb}" id="${el.idDrink}" />
      <p class="cocktail-name" id="${el.idDrink}">${el.strDrink}</p> 
      </div>`;
      div[index].innerHTML = filteredCoctails
      div[index].addEventListener("click", cocktailIdSearch)
   })
}
function cocktailIdSearch(event) {
   let id = event.target.id
   localStorage.setItem("currentCoctailId", id)
}
////////////////////////////////////Link to New HTML /////////////////////////
///////we have a problem:when searched for drinks our click function to another html isnt working because we picked div.cocktail array but inside  searchstrdrink we are looping thru .cocktails-block so i changed line 31 to our line 47 but now when clicked on the searched elements its not showing anything why?/////////////

const block = document.querySelectorAll(".cocktail");
block.forEach(el => {
   el.addEventListener("click", function () {
      location.href = "drink.html";
   })
})
block.forEach(el => {
   el.addEventListener("click", cocktailId)

   function cocktailId(event) {
      let id = event.target.id
      localStorage.setItem("currentCoctailId", id)
   }
})