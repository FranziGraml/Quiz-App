import Card from "./Components/Cards/cards.js";
import Book from "./Components/Bookmarks/bookmarks.js";
import Footer from "./Components/Footer/footer.js";

//console.log("cardElement", cardElement);

const cardElements = document.querySelectorAll('[data-js="cards"]');
const bookmarks = document.querySelectorAll('[data-js="card-bookmark"]');
console.log(bookmarks);

cardElements.forEach((cardElement) => {
    Card(cardElement);
});

bookmarks.forEach((bookmark) => {
    Book(bookmark);
});


const siteElement = document.querySelector('[data-js="site_elements"]');
const footerElement =document.querySelector('[data-js="footer_element"]');

Footer(footerElement, siteElement);











// Aufgabe 1
//const toggleBookmark = document.querySelector('[data-js="card-bookmark"]');

//Aufgabe 2 + 3
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

