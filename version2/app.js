document.addEventListener('DOMContentLoaded', function () {
  const pairSelect = document.getElementById('pairSelect');
  const playButton = document.getElementById('playButton');
  const optionsDiv = document.getElementById('options');
  const message = document.getElementById('message');
  const allStatsDiv = document.getElementById('allStats');
  const deleteStatsButton = document.getElementById('deleteStatsButton'); // New button

  // List of word pairs (each pair contains two Pinyin syllables)
  const wordPairs = [
    ["zhong", "cong"],
    ["shi", "si"],
    ["zi", "zhi"],
    ["jian", "qian"],
    ["zi", "ji"],
    ["zhi", "ji"],
    ["xi", "si"],
    ["xi", "ji"],
    ["chi", "si"],
    ["chi", "xi"],
    ["chi", "zhi"],
    ["chi", "ji"],
    ["wan", "guan"],
    ["chu", "qu"],
    ["zhu", "qu"],
    ["zhu", "chu"],
    ["zhe", "re"],
    ["zai", "cai"],
    ["kou", "gou"],
    ["qi", "zhi"],
    ["zuo","cuo"]
    // Add more pairs as needed
  ];

  const audioFolder = "./audios/";
  let currentPair = null;
  let currentWord = "";  // Stores the word of the currently playing audio
  let currentWordTone = "";  // Stores the word of the currently playing audio

  // Load statistics from localStorage or initialize
  const statistics = loadStatistics();

  // Populate the pair dropdown
  function populatePairSelect() {
    wordPairs.forEach(pair => {
      let option = document.createElement('option');
      option.value = pair.join(' vs '); // Display format
      option.textContent = pair.join(' vs '); // Display format
      pairSelect.appendChild(option);
    });
  }

  // Initialize statistics for each pair if not already done
  wordPairs.forEach(pair => {
    const pairKey = pair.join(' vs ');
    if (!statistics[pairKey]) {
      statistics[pairKey] = {
        correct: 0,
        incorrect: 0,
        total: 0
      };
    }
  });

  // Load statistics from localStorage
  function loadStatistics() {
    const savedStats = localStorage.getItem('pinyinStatistics');
    return savedStats ? JSON.parse(savedStats) : {};
  }

  // Save statistics to localStorage
  function saveStatistics() {
    localStorage.setItem('pinyinStatistics', JSON.stringify(statistics));
  }

  // Delete all statistics
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

  // Generate the word buttons for the selected pair
  function generateOptions(pair) {
    optionsDiv.innerHTML = ""; // Clear previous options

    pair.forEach(word => {
      let button = document.createElement('button');
      button.classList.add('btn', 'btn-secondary', 'm-2');
      button.textContent = word;
      button.disabled = true; // Disable buttons initially
      button.addEventListener('click', function () {
        checkAnswer(word);
        // Disable buttons after one is clicked
        const buttons = optionsDiv.querySelectorAll('button');
        buttons.forEach(btn => btn.disabled = true);
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

      // Enable the buttons after the audio is played
      const buttons = optionsDiv.querySelectorAll('button');
      buttons.forEach(button => button.disabled = false);
    } else {
      message.textContent = "Please select a word pair.";
    }
  });

  // Check if the selected word is correct
  function checkAnswer(selectedWord) {
    const pairKey = currentPair.join(' vs ');
    if (selectedWord === currentWord) {
      message.textContent = "Correct!";
      message.classList.add("text-success");
      message.classList.remove("text-danger");
      statistics[pairKey].correct++;
    } else {
      message.textContent = `Incorrect. It was "${currentWordTone}".`;
      message.classList.add("text-danger");
      message.classList.remove("text-success");
      statistics[pairKey].incorrect++;
    }
    statistics[pairKey].total++;
    saveStatistics(); // Save updated statistics
    updateAllStatistics();
  }

  function updateAllStatistics() {
    allStatsDiv.innerHTML = "<h5>All Pairs Statistics</h5>";
    const allStatsTable = document.createElement('table');
    allStatsTable.classList.add('table', 'table-bordered', 'table-striped');
    
    // Create table header
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
      <th>Word Pair</th>
      <th>Correct</th>
      <th>Incorrect</th>
      <th>Total Attempts</th>
      <th>Correct Percentage</th>
    `;
    allStatsTable.appendChild(headerRow);
  
    // Loop through the statistics and render the rows
    for (const pair in statistics) {
      const stats = statistics[pair];
      
      // Only show pairs with at least one attempt
      if (stats.total > 0) {
        const correctPercentage = ((stats.correct / stats.total) * 100).toFixed(2);
        
        const row = document.createElement('tr');
  
        // If the current pair matches, add a highlight class or style
        if (pair === currentPair.join(' vs ')) {
          row.style.backgroundColor = '#d9edf7'; // Bootstrap class for highlighting
          // Alternatively, you can use an inline style like:
          // row.style.backgroundColor = '#d9edf7';  // Light blue highlight
        }
  
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

  // Enable play button and generate word options when a pair is selected
  pairSelect.addEventListener('change', function () {
    const selectedValue = pairSelect.value.split(' vs ');
    currentPair = selectedValue;
    if (currentPair.length === 2) {
      playButton.disabled = false;
      generateOptions(currentPair);
      message.textContent = "";
      updateAllStatistics(); // Update all stats when the pair changes
    }
  });

  // Add event listener for delete stats button
  deleteStatsButton.addEventListener('click', deleteStatistics);

  // Initialize the word pair dropdown
  populatePairSelect();
});

