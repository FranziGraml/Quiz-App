const toggleBookmark = document.querySelector('[data-js="card-bookmark"]');
const button = document.querySelector('[data-js="button-show"]');
const buttonHide = document.querySelector('[data-js="button-hide"]');
const answerText = document.querySelector('[data-js="hidden-text"]');




function onbuttonClickToggle(){
    toggleBookmark.classList.toggle('svg1');

}

function onButtonClickShowAnswer() {
    answerText.classList.toggle('hidden');
    buttonHide.classList.toggle('hidden');
    button.classList.toggle('hidden');
    

   // button.innerHTML === 'HIDE ANSWER' ? button.innerHTML = "SHOW ANSWER" : button.innerHTML = "HIDE ANSWER";
}

toggleBookmark.addEventListener('click', onbuttonClickToggle);
button.addEventListener('click', onButtonClickShowAnswer);
buttonHide.addEventListener('click', onButtonClickShowAnswer);


