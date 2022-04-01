import Card from "./Components/Cards/cards.js";
import onbuttonClickToggle from "./Components/Bookmarks/bookmarks.js";

console.log("cardElement", cardElement);

const cardElements = document.querySelectorAll('[data-js="cards"]');
cardElements.forEach((cardElement) =>{
    Card(cardElement);
});











//const toggleBookmark = document.querySelector('[data-js="card-bookmark"]');
/* const button = document.querySelector('[data-js="button-show"]');
const buttonHide = document.querySelector('[data-js="button-hide"]');
const answerText = document.querySelector('[data-js="hidden-text"]');
 */


// Aufgabe 1

//function onbuttonClickToggle(){
   // toggleBookmark.classList.toggle('svg1')
   // };



// Aufgabe 2 + 3
/* function onButtonClickShowAnswer() {
    answerText.classList.toggle('hidden');
    buttonHide.classList.toggle('hidden');
    button.classList.toggle('hidden');
}     */



/* function onButttonClickHideAnswer() {
    answerText.classList.toggle('hidden');
    buttonHide.classList.add('hidden');
    button.classList.remove('hidden');
} */

// Aufgabe 1
//toggleBookmark.addEventListener('click', onbuttonClickToggle);
// Aufgabe 2 + 3
/* button.addEventListener('click', onButtonClickShowAnswer);
buttonHide.addEventListener('click', onButtonClickShowAnswer); //onButtonClickHideAnswer
 */

