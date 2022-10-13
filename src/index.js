import './style.css';
import AddScore from './modules/addScore';
import showScoresList from './modules/showScoresList';

const form = document.forms[0];
const scoreListContainer = document.querySelector('.score-list');
const refreshBtn = document.querySelector('.refresh-btn');
const message = document.querySelector('.alert');

// Add score to API
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = {
    name: form.name.value,
    score: form.score.value,
  };

  AddScore(user, message);
  form.reset();
});

// Hide sucess message when user enter new data
[form.name, form.score].forEach((input) => {
  input.addEventListener('focus', () => {
    message.classList.remove('show');
  });
});

// Get scores from API and show data to the UI
refreshBtn.addEventListener('click', () => {
  showScoresList(scoreListContainer);
});

// Show Data when page is loaded
showScoresList(scoreListContainer);
