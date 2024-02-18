'use strict';

const ratingState = document.getElementById('rating-state');
const thanksState = document.getElementById('thanks-state');
const submitBtn = document.querySelector('.btn');
const numbers = document.querySelectorAll('.number');
let selected = null;
let finalRating = null;

function getRating(e) {
  const number = e.target;
  if (selected !== null) {
    selected.classList.remove('active');
  }
  number.classList.add('active');
  selected = number;
  finalRating = selected.innerText;
}

function displayThanks() {
  if (!finalRating) {
    alert('You must select a rating');
  }

  const rating = document.getElementById('user-rating');
  rating.innerText = finalRating;

  ratingState.classList.add('hidden');
  thanksState.classList.remove('hidden');
}

numbers.forEach((number) => {
  number.addEventListener('click', getRating);
});

submitBtn.addEventListener('click', displayThanks);
