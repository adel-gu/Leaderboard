const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/n0tbY0KgPZQ594I4ehx0/scores/';

// get data from the API
const getScores = async () => {
  const response = await fetch(API_URL);
  const result = await response.json();
  const scoresList = result.result;

  return scoresList;
};

// show data to the UI
const showScoresList = async (container) => {
  container.innerHTML = '';
  const scores = await getScores();
  scores.forEach((scoreItem) => {
    const scoreElement = `
      <tr>
        <td>${scoreItem.user}</td>
        <td>${scoreItem.score}</td>
      </tr>
    `;
    container.innerHTML += scoreElement;
  });
};

export default showScoresList;
