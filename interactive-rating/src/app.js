'use strict';

const ratingState = document.getElementById('rating-state');
const thanksState = document.getElementById('thanks-state');
const submitBtn = document.querySelector('.btn');
const numbers = document.querySelectorAll('.number');
const ratings = [];
let finalRating = null;

function calcRating(e) {
  const number = e.target;
  const value = +number.innerText;

  const index = ratings.indexOf(value);

  if (index === -1) {
    ratings.push(value);
  } else {
    ratings.splice(index, 1);
  }

  finalRating = ratings.reduce((acc, cur) => acc + cur, 0) / ratings.length;
}

function makeSelection(e) {
  const number = e.target;

  if (number.style.backgroundColor === '' && number.style.color === '') {
    number.style.backgroundColor = '#7c8798';
    number.style.color = '#fff';
  } else {
    number.style.backgroundColor = '';
    number.style.color = '';
  }
}

function displayThanks() {
  const rating = document.getElementById('user-rating');

  if (!finalRating) {
    alert('You must select a rating');
  }

  if (Number.isInteger(finalRating)) {
    rating.innerText = finalRating;
  } else {
    rating.innerText = finalRating.toFixed(1);
  }
  ratingState.classList.add('hidden');
  thanksState.classList.remove('hidden');
}

numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    makeSelection(e);
    calcRating(e);
  });
});

submitBtn.addEventListener('click', displayThanks);
