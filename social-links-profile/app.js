'use strict';

const socialMap = new Map([
  ['GitHub', '<i class="fa-brands fa-github"></i>'],
  ['Frontend Mentor', '<i class="fa-solid fa-code"></i>'],
  ['LinkedIn', '<i class="fa-brands fa-linkedin"></i>'],
  ['Twitter', '<i class="fa-brands fa-twitter"></i>'],
  ['Instagram', '<i class="fa-brands fa-instagram"></i>'],
]);
const social = document.querySelector('.social');

document.addEventListener('DOMContentLoaded', () => {
  createButtons(social);
});

function createButtons(element) {
  for (let key of socialMap.keys()) {
    const button = document.createElement('button');
    button.setAttribute('class', 'btn');
    button.textContent = key;
    element.appendChild(button);
    hover(button);
  }
}

function hover(btn) {
  const original = btn.textContent.trim();

  btn.addEventListener('mouseover', () => {
    const newValue = socialMap.get(original);
    btn.innerHTML = newValue;
    btn.style.backgroundColor = 'hsl(75, 94%, 57%)';
    btn.style.color = '#333';
  });

  btn.addEventListener('mouseout', () => {
    btn.textContent = original;
    btn.style.backgroundColor = '#333';
    btn.style.color = '#fff';
  });
}
