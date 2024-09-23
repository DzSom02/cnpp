document.addEventListener('DOMContentLoaded', function () {
  const pairSelect = document.getElementById('pairSelect');
  const playButton = document.getElementById('playButton');
  const optionsDiv = document.getElementById('options');
  const message = document.getElementById('message');
  const statsDiv = document.getElementById('stats');

  // List of word pairs (each pair contains two Pinyin syllables)
  const wordPairs = [
    ["zhong", "cong"],
    ["shi", "si"]
    // Add more pairs as needed
  ];

  const audioFolder = "./audios/";
  let currentPair = null;
  let currentWord = "";  // Stores the word of the currently playing audio
  let currentWordTone = "";  // Stores the word of the currently playing audio

  // Statistics object to track each pair
  const statistics = {};

  // Initialize statistics for each pair
  wordPairs.forEach(pair => {
    statistics[pair.join(' vs ')] = {
      correct: 0,
      incorrect: 0,
      total: 0
    };
  });

  // Populate the pair dropdown
  function populatePairSelect() {
    wordPairs.forEach(pair => {
      let option = document.createElement('option');
      option.value = pair.join(' vs '); // Display format
      option.textContent = pair.join(' vs '); // Display format
      pairSelect.appendChild(option);
    });
  }

  // Generate the word buttons for the selected pair
  function generateOptions(pair) {
    optionsDiv.innerHTML = ""; // Clear previous options

    pair.forEach(word => {
      let button = document.createElement('button');
      button.classList.add('btn', 'btn-secondary', 'm-2');
      button.textContent = word;
      button.addEventListener('click', function () {
        checkAnswer(word);
      });
      optionsDiv.appendChild(button);
    });
  }

  // Play random audio and set the correct word
  playButton.addEventListener('click', function () {
    if (currentPair) {
      const randomWord = currentPair[Math.floor(Math.random() * currentPair.length)];
      const randomTone = Math.floor(Math.random() * 4) + 1; // Random tone 1 to 4
      const randomAudio = `${audioFolder}${randomWord}${randomTone}.mp3`;
      currentWord = randomWord;
      currentWordTone = `${randomWord}${randomTone}`;

      const audio = new Audio(randomAudio);
      audio.play();

      message.textContent = "Listen carefully!";
    } else {
      message.textContent = "Please select a word pair.";
    }
  });

  // Check if the selected word is correct
  function checkAnswer(selectedWord) {
    if (selectedWord === currentWord) {
      message.textContent = "Correct!";
      message.classList.add("text-success");
      message.classList.remove("text-danger");
      statistics[currentPair.join(' vs ')].correct++;
    } else {
      message.textContent = `Incorrect. It was "${currentWordTone}".`;
      message.classList.add("text-danger");
      message.classList.remove("text-success");
      statistics[currentPair.join(' vs ')].incorrect++;
    }
    statistics[currentPair.join(' vs ')].total++;
    updateStatistics();
  }

  // Update statistics display
  function updateStatistics() {
    const pairStats = statistics[currentPair.join(' vs ')];
    const correctPercentage = pairStats.total ? ((pairStats.correct / pairStats.total) * 100).toFixed(2) : 0;
  
    statsDiv.innerHTML = `
      <h5>Statistics for ${currentPair.join(' vs ')}</h5>
      <ul class="list-group">
        <li class="list-group-item">Correct: <strong>${pairStats.correct}</strong></li>
        <li class="list-group-item">Incorrect: <strong>${pairStats.incorrect}</strong></li>
        <li class="list-group-item">Total Attempts: <strong>${pairStats.total}</strong></li>
        <li class="list-group-item">Correct Percentage: <strong>${correctPercentage}%</strong></li>
      </ul>
    `;
  }

  // Enable play button and generate word options when a pair is selected
  pairSelect.addEventListener('change', function () {
    const selectedValue = pairSelect.value.split(' vs ');
    currentPair = selectedValue;
    if (currentPair.length === 2) {
      playButton.disabled = false;
      generateOptions(currentPair);
      message.textContent = "";
      updateStatistics();  // Update stats when the pair changes
    }
  });

  // Initialize the word pair dropdown
  populatePairSelect();
});


