const toggleBookmark = document.querySelector('[data-js="card-bookmark"]');

export default function onbuttonClickToggle(){
    toggleBookmark.classList.toggle('svg1')
    };

    toggleBookmark.addEventListener('click', onbuttonClickToggle);