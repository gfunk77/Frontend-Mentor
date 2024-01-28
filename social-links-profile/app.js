'use strict';

const socialMap = new Map([
  ['GitHub', '<i class="fa-brands fa-github"></i>'],
  ['Frontend Mentor', '<i class="fa-solid fa-code"></i>'],
  ['LinkedIn', '<i class="fa-brands fa-linkedin"></i>'],
  ['Twitter', '<i class="fa-brands fa-twitter"></i>'],
  ['Instagram', '<i class="fa-brands fa-instagram"></i>'],
]);
const btn = document.querySelectorAll('.btn');
btn.forEach((btn) => {
  const original = btn.textContent.trim();
  btn.addEventListener('mouseover', () => {
    const current = btn.textContent.trim();
    const newValue = socialMap.get(current);
    btn.innerHTML = newValue;
  });
  btn.addEventListener('mouseout', () => {
    btn.textContent = original;
  });
});
