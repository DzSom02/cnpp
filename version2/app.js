document.addEventListener('DOMContentLoaded', function () {
  const soundTable = document.getElementById('soundTable');
  const playButton = document.getElementById('playButton');
  const optionsDiv = document.getElementById('options');
  const message = document.getElementById('message');
  const allStatsDiv = document.getElementById('allStats');
  const deleteStatsButton = document.getElementById('deleteStatsButton');

  const sounds = ["zhong", "cong", "shi", "si", "zi", "zhi", "jian", "qian", "ji", "xi", "chi", "wan", "guan", "chu", "qu", "zhu", "zhe", "re", "zai", "cai", "kou", "gou", "qi", "zuo", "cuo"];
  const audioFolder = "./audios/";
  const numColumns = 10; // Number of columns in the table
  let currentPair = [];
  let currentWord = "";
  let currentWordTone = "";

  const statistics = loadStatistics();

  function populateSoundTable() {
    let row;
    sounds.forEach((sound, index) => {
      if (index % numColumns === 0) {
        row = document.createElement('tr');
        soundTable.appendChild(row);
      }

      const cell = document.createElement('td');
      cell.textContent = sound;
      cell.classList.add('sound-cell', 'p-2');
      cell.addEventListener('click', function () {
        toggleSelection(sound, cell);
      });
      row.appendChild(cell);
    });
  }

  function loadStatistics() {
    const savedStats = localStorage.getItem('pinyinStatistics');
    return savedStats ? JSON.parse(savedStats) : {};
  }

  function saveStatistics() {
    localStorage.setItem('pinyinStatistics', JSON.stringify(statistics));
  }

  function deleteStatistics() {
    if (confirm("Are you sure you want to delete all statistics? This action cannot be undone.")) {
      for (const pair in statistics) {
        statistics[pair] = { correct: 0, incorrect: 0, total: 0 };
      }
      saveStatistics();
      updateAllStatistics();
      message.textContent = "All statistics have been reset.";
    }
  }

  function toggleSelection(sound, cell) {
    if (currentPair.includes(sound)) {
      currentPair = currentPair.filter(s => s !== sound);
      cell.classList.remove('selected');
    } else if (currentPair.length < 2) {
      currentPair.push(sound);
      cell.classList.add('selected');
    }
    updatePlayButton();
  }

  function updatePlayButton() {
    playButton.disabled = currentPair.length !== 2;
    if (currentPair.length === 2) {
      generateOptions(currentPair);
      message.textContent = "";
    }
  }

  function generateOptions(pair) {
    optionsDiv.innerHTML = "";
    pair.forEach(word => {
      const button = document.createElement('button');
      button.classList.add('btn', 'btn-secondary', 'm-2');
      button.textContent = word;
      button.disabled = true;
      button.addEventListener('click', function () {
        checkAnswer(word);
        const buttons = optionsDiv.querySelectorAll('button');
        buttons.forEach(btn => btn.disabled = true);
      });
      optionsDiv.appendChild(button);
    });
  }

  playButton.addEventListener('click', function () {
    const randomWord = currentPair[Math.floor(Math.random() * currentPair.length)];
    const randomTone = Math.floor(Math.random() * 4) + 1;
    const randomAudio = `${audioFolder}${randomWord}${randomTone}.mp3`;
    currentWord = randomWord;
    currentWordTone = `${randomWord}${randomTone}`;

    const audio = new Audio(randomAudio);
    audio.play();

    message.textContent = "Listen carefully!";
    const buttons = optionsDiv.querySelectorAll('button');
    buttons.forEach(button => button.disabled = false);
  });

  function checkAnswer(selectedWord) {
    const pairKey = currentPair.join(' vs ');
    if (selectedWord === currentWord) {
      message.textContent = "Correct!";
      message.classList.add("text-success");
      message.classList.remove("text-danger");
      if (!statistics[pairKey]) statistics[pairKey] = { correct: 0, incorrect: 0, total: 0 };
      statistics[pairKey].correct++;
    } else {
      message.textContent = `Incorrect. It was "${currentWordTone}".`;
      message.classList.add("text-danger");
      message.classList.remove("text-success");
      if (!statistics[pairKey]) statistics[pairKey] = { correct: 0, incorrect: 0, total: 0 };
      statistics[pairKey].incorrect++;
    }
    statistics[pairKey].total++;
    saveStatistics();
    updateAllStatistics();
  }

  function updateAllStatistics() {
    allStatsDiv.innerHTML = "<h5>All Pairs Statistics</h5>";
    const allStatsTable = document.createElement('table');
    allStatsTable.classList.add('table', 'table-bordered', 'table-striped');

    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
      <th>Word Pair</th>
      <th>Correct</th>
      <th>Incorrect</th>
      <th>Total Attempts</th>
      <th>Correct Percentage</th>
    `;
    allStatsTable.appendChild(headerRow);

    for (const pair in statistics) {
      const stats = statistics[pair];
      if (stats.total > 0) {
        const correctPercentage = ((stats.correct / stats.total) * 100).toFixed(2);

        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${pair}</td>
          <td>${stats.correct}</td>
          <td>${stats.incorrect}</td>
          <td>${stats.total}</td>
          <td>${correctPercentage}%</td>
        `;
        allStatsTable.appendChild(row);
      }
    }
    allStatsDiv.appendChild(allStatsTable);
  }

  deleteStatsButton.addEventListener('click', deleteStatistics);
  populateSoundTable();
});
