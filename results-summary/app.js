'use strict';

const data = fetch('./data.json');

const resp = (resp) => {
  try {
    if (!resp.ok) {
      throw new Error('There was a problem fetching the data!!');
    }
    return resp.json();
  } catch (error) {
    console.error(error);
  }
};

function calcAverage(data) {
  const total = data.reduce((acc, cur) => acc + cur.score, 0);
  return Math.round(total / data.length);
}

const render = (data) => {
  const scoreContainer = document.querySelector('.score-result__score');
  const container = document.querySelector('.summary__result-container');

  scoreContainer.innerHTML = `
    <h1 class="score-result__final">${calcAverage(data)}</h1>
    <p class="score-result__possible">of 100</p>
  `;
  data.forEach((obj) => {
    container.innerHTML += `
            <div class="summary__result ${obj.category.toLowerCase()}">
                <div class="summary__result-img-text">
                    <img class="img" src="${obj.icon}" alt="${obj.category.toLowerCase()}" />
                    <span>${obj.category}</span>
                </div>
                <div class="summary__result-percent">
                    <span>${obj.score} </span>
                    <span class="hundred">/ 100</span>
                </div>
            </div>
        `;
  });
};

document.addEventListener('DOMContentLoaded', () => {
  data.then(resp).then(render);
});
