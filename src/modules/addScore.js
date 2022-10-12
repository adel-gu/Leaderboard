const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/n0tbY0KgPZQ594I4ehx0/scores/';

// Adding User score to the API.
const AddScore = async (user, message) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user: user.name,
      score: user.score,
    }),
  });

  const result = await response.json();
  message.innerHTML += `<strong>Success!</strong> ${result.result}`;
  message.classList.add('show');
};

export default AddScore;
