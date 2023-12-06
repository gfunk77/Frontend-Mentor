'use strict';

const data = fetch('./data.json');

function response(resp) {
  try {
    if (!resp.ok) {
      throw new Error('There was a problem retrieving data');
    }
    return resp.json();
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  data.then(response).then(createCards);
});

function createCards(data) {
  const bottomContainer = document.querySelector('.bottom');
  data.forEach((card) => {
    bottomContainer.innerHTML += `
          <div class="bottom__card card-${card.id}">
            <div class="bottom__card-name-container">
              <div class="avatar-container">
                <img src="${card.image}" alt="${card.name}" />
              </div>
              <div class="bottom__card-heading">
                <h3 class="heading-name">${card.name}</h3>
                <h3 class="heading-verified">Verified Buyer</h3>
              </div>
            </div>
            <div class="bottom__card-quote">
              <p class="bottom__card-quote--text">
               ${card.quote}
              </p>
            </div>
          </div>
          `;
  });
  stars();
}

function stars() {
  const starContainers = document.querySelectorAll('.star-container');

  starContainers.forEach((starContainer) => {
    for (let i = 0; i < 5; i++) {
      starContainer.innerHTML += `
    <img class="top__stars-img" src="./images/icon-star.svg" alt="stars" />
    `;
    }
  });
}
