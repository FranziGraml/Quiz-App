import Card from "./Components/Cards/cards.js";
import Book from "./Components/Bookmarks/bookmarks.js";
import Footer from "./Components/Footer/footer.js";

const quizCard = [
  {
    id: "Card1",
    question: "Lorem ipsum dolor sit, amet consectetur adipisicing",
    answer: "green",
    tags: ["green", "blue", "red", "pink"],
    isBookmarked: true,
  },
  {
    id: "Card2",
    question: "Lorem ipsum dolor sit, amet consectetur adipisicing",
    answer: "green",
    tags: ["green", "blue", "red", "pink"],
    isBookmarked: true,
  },
  {
    id: "Card3",
    question: "Lorem ipsum dolor sit, amet consectetur adipisicing",
    answer: "green",
    tags: ["green", "blue", "red", "pink"],
    isBookmarked: true,
  },
];

const quizArea = document.querySelector(".Quiz-Container");

const header = document.createElement("header");
header.classList.add("quiz-header");
document.body.append(header);

const headline = document.createElement("h1");
headline.textContent = "QUIZ-APP";
headline.classList.add("headline-quiz-app");
header.append(headline);

quizCard.forEach((card) => {
  const quizContainer = document.createElement("div");
  quizContainer.classList.add("Quiz-Container");
  document.body.append(quizContainer);

  const headlineCard = document.createElement("h2");
  headlineCard.textContent = "Question";
  headlineCard.classList.add("headline-quiz-app");
  quizContainer.append(headlineCard);

  /*  const bookmark = document.createElement("svg");
  bookmark.setAttribute =  */

  const question = document.createElement("p");
  question.textContent = card.question;
  quizContainer.append(question);

  const answerButton = document.createElement("button");
  answerButton.classList.add("button-answer");
  quizContainer.append(answerButton);

  const hiddenButton = document.createElement("button");
  hiddenButton.classList.add("button-answer");
  hiddenButton.classList.add("hidden");
  quizContainer.append(hiddenButton);

  const answer = document.createElement("p");
  answer.textContent = card.answer;
  answer.classList.add("quiz-answer-text");
  answer.classList.add("hidden");
  quizContainer.append(answer);

  const classes = document.createElement("ul");
  classes.classList.add("classes");
  quizContainer.append(classes);

  card.tags.forEach((tag) => {
    const list = document.createElement("li");
    list.textContent = tag;
    list.classList.add("classes", "class-element");
    classes.append(list);
  });
});

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
const footerElement = document.querySelector('[data-js="footer_element"]');

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
