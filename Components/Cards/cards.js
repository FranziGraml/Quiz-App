/* const button = document.querySelector('[data-js="button-show"]');
const buttonHide = document.querySelector('[data-js="button-hide"]');
const answerText = document.querySelector('[data-js="hidden-text"]');
 */

export default function Card(cardElement) {
    const button = cardElement.querySelector('[data-js="button-show"]');
    const buttonHide = cardElement.querySelector('[data-js="button-hide"]');
    const answerText = cardElement.querySelector('[data-js="hidden-text"]');
    button.addEventListener('click', () => {
    answerText.classList.toggle('hidden');
    buttonHide.classList.toggle('hidden');
    button.classList.toggle('hidden');
    });
    buttonHide.addEventListener('click', () => {
    answerText.classList.toggle('hidden');
    buttonHide.classList.toggle('hidden');
    button.classList.toggle('hidden');
    });   

}
