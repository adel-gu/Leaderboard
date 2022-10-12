import './style.css';
import AddScore from './modules/addScore';
import showScoresList from './modules/showScoresList';

const form = document.forms[0];
const scoreListContainer = document.querySelector('.score-list');
const refreshBtn = document.querySelector('.refresh-btn');
const message = document.querySelector('.alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = {
    name: form.name.value,
    score: form.score.value,
  };

  AddScore(user, message);
  form.reset();
});

refreshBtn.addEventListener('click', () => {
  showScoresList(scoreListContainer);
});

showScoresList(scoreListContainer);
