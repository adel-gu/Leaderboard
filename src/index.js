import './style.css';
import AddScore from './modules/addScore';
import showScoresList from './modules/showScoresList';

const form = document.forms[0];
const scoreListContainer = document.querySelector('.score-list');
const refreshBtn = document.querySelector('.refresh-btn');
const message = document.querySelector('.alert');

// Clear Success message afte 5 seconds
const clearMsg = () => {
  if (message.classList.contains('show')) {
    message.classList.remove('show');
  }
};

// Add score to API
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = {
    name: form.name.value,
    score: form.score.value,
  };

  AddScore(user, message);
  setTimeout(clearMsg, 2500);
  form.reset();
});

// Get scores from API and show data to the UI
refreshBtn.addEventListener('click', () => {
  showScoresList(scoreListContainer);
});

// Show Data when page is loaded
showScoresList(scoreListContainer);
