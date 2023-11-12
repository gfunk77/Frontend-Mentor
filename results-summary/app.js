'use strict';

const data = fetch('./data.json');

function resp(resp) {
  try {
    if (!resp.ok) {
      throw new Error('There was a problem fetching the data!!');
    }
    return resp.json();
  } catch (error) {
    console.error(error);
  }
}

function createEl(element, attr) {
  const el = document.createElement(element);
  setAttributes(el, attr);

  return el;
}

const main = createEl('main', { class: 'main' });
const card = createEl('div', { class: 'card' });
const containerLeft = createEl('div', { class: 'left', id: 'container' });
const scoreResult = createEl('div', { class: 'score-result' });
const scoreResultTitle = createEl('h2', { class: 'score-result__title' });
scoreResultTitle.textContent = 'Your Result';

const scoreResultScore = createEl('div', { class: 'score-result__score' });

document.body.prepend(main);
main.appendChild(card);
card.appendChild(containerLeft);
containerLeft.appendChild(scoreResult);

const info = createEl('div', { class: 'info' });

const infoTitle = createEl('h2', { class: 'info__title' });
infoTitle.textContent = 'Great';

const infoText = createEl('p', { class: 'info__text' });
infoText.textContent = 'You scored higher than 65% of the people who have taken these tests.';

scoreResult.append(scoreResultTitle, scoreResultScore, info);
info.append(infoTitle, infoText);

function setAttributes(el, attr) {
  for (const key in attr) {
    el.setAttribute(key, attr[key]);
  }
}

function calcAverage(data) {
  const total = data.reduce((acc, cur) => acc + cur.score, 0);
  return Math.round(total / data.length);
}

function generateScore(data) {
  const scoreResultFinal = document.createElement('h1');
  setAttributes(scoreResultFinal, { class: 'score-result__final' });
  const scoreResultPossible = document.createElement('p');
  setAttributes(scoreResultPossible, { class: 'score-result__possible' });
  const scoreResultPossibleText = document.createTextNode('of 100');
  scoreResultPossible.appendChild(scoreResultPossibleText);

  scoreResultFinal.textContent = calcAverage(data);

  scoreResultScore.append(scoreResultFinal, scoreResultPossible);
}

function createRightContainer() {
  const container = createEl('div', { id: 'container' });
  const summary = createEl('div', { class: 'summary' });
  const summaryTitle = createEl('h2', { class: 'summary__title' });
  summaryTitle.textContent = 'Summary';

  const summaryResultContainer = createEl('div', { class: 'summary__result-container' });
  const continueBtn = createEl('button', { class: 'btn' });
  continueBtn.textContent = 'Continue';

  summary.append(summaryTitle, summaryResultContainer, continueBtn);
  container.append(summary);
  card.append(container);
}

function generateResults(data) {
  const resultContainer = document.querySelector('.summary__result-container');

  data.forEach((obj) => {
    resultContainer.innerHTML += `
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
}

const render = (data) => {
  generateScore(data);
  createRightContainer();
  generateResults(data);
};

document.addEventListener('DOMContentLoaded', () => {
  data.then(resp).then(render);
});
