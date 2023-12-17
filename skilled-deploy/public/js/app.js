// 'use strict';

// const data = fetch('../public/data/data.json');

// function response(resp) {
//   try {
//     if (!resp.ok) {
//       throw new Error('Problem fetching data');
//     }
//     return resp.json();
//   } catch (error) {
//     console.error(error);
//   }
// }

// function renderCards(data) {
//   const cards = document.querySelector('.cards');
//   data.forEach((item) => {
//     const card = document.createElement('div');
//     card.setAttribute('class', 'card');
//     card.innerHTML = `
//             <img class="card-img" src="${item.image}" alt="${item.title}" />
//             <h3 class="card-title">${item.title}</h3>
//             <p class="card-text">
//               ${item.text}
//             </p>
//             <a href="#"><h4 class="card-action">${item.action}</h4></a>
//    `;
//     cards.appendChild(card);
//   });
// }

// document.addEventListener('DOMContentLoaded', () => {
//   data.then(response).then(renderCards);
// });
