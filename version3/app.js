// List of words with tone pairs (same as before)
const wordSet = [
  { "tones": "1,1", "word": "中心", "audio_url": "tone_pairs/中心.mp3" },
  { "tones": "1,2", "word": "中文", "audio_url": "tone_pairs/中文.mp3" },
  { "tones": "1,3", "word": "分享", "audio_url": "tone_pairs/分享.mp3" },
  { "tones": "1,4", "word": "发现", "audio_url": "tone_pairs/发现.mp3" },
  { "tones": "1,neutral", "word": "休息", "audio_url": "tone_pairs/休息.mp3" },
  { "tones": "2,1", "word": "原因", "audio_url": "tone_pairs/原因.mp3" },
  { "tones": "2,2", "word": "其实", "audio_url": "tone_pairs/其实.mp3" },
  { "tones": "2,3", "word": "如果", "audio_url": "tone_pairs/如果.mp3" },
  { "tones": "2,4", "word": "图片", "audio_url": "tone_pairs/图片.mp3" },
  { "tones": "2,neutral", "word": "便宜", "audio_url": "tone_pairs/便宜.mp3" },
  { "tones": "3,1", "word": "取消", "audio_url": "tone_pairs/取消.mp3" },
  { "tones": "3,2", "word": "友情", "audio_url": "tone_pairs/友情.mp3" },
  { "tones": "3,3", "word": "你好", "audio_url": "tone_pairs/你好.mp3" },
  { "tones": "3,4", "word": "保证", "audio_url": "tone_pairs/保证.mp3" },
  { "tones": "3,neutral", "word": "小姐", "audio_url": "tone_pairs/小姐.mp3" },
  { "tones": "4,1", "word": "信箱", "audio_url": "tone_pairs/信箱.mp3" },
  { "tones": "4,2", "word": "内容", "audio_url": "tone_pairs/内容.mp3" },
  { "tones": "4,3", "word": "作者", "audio_url": "tone_pairs/作者.mp3" },
  { "tones": "4,4", "word": "但是", "audio_url": "tone_pairs/但是.mp3" },
  { "tones": "4,neutral", "word": "困难", "audio_url": "tone_pairs/困难.mp3" }
];

// Possible tone pairs for rendering the table
const initialTones = ["1", "2", "3", "4"];
const finalTones = ["1", "2", "3", "4", "neutral"];

// Track statistics
let stats = {};

// Initialize the stats object for each tone pair
function initializeStats() {
  initialTones.forEach(initialTone => {
    finalTones.forEach(finalTone => {
      const tonePair = `${initialTone},${finalTone}`;
      stats[tonePair] = {
        tries: 0,
        successes: 0,
        failures: 0,
      };
    });
  });
}

let selectedWord; // The current word to guess

// Function to randomly select a word
function selectRandomWord() {
  const randomIndex = Math.floor(Math.random() * wordSet.length);
  selectedWord = wordSet[randomIndex];
}

// Function to play the audio
function playAudio() {
  const audio = new Audio(selectedWord.audio_url);
  audio.play();
}

// Function to render tone pair options in a table
function renderToneOptions() {
  const tableBody = document.getElementById('tone-table');
  tableBody.innerHTML = ''; // Clear previous options

  initialTones.forEach(initialTone => {
    const row = document.createElement('tr');
    
    finalTones.forEach(finalTone => {
      const tonePair = `${initialTone},${finalTone}`;
      const cell = document.createElement('td');
      cell.innerText = tonePair;
      cell.classList.add('table-cell');
      cell.onclick = () => checkAnswer(tonePair);
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });
}

// Function to check the user's answer
function checkAnswer(selectedTone) {
  const resultMsg = document.getElementById('result-msg');
  const correctTone = selectedWord.tones;

  // Update stats
  stats[selectedTone].tries++;
  
  if (selectedTone === correctTone) {
    stats[selectedTone].successes++;
    resultMsg.className = 'alert alert-success';
    resultMsg.innerHTML = `Correct! The word was <strong>${selectedWord.word}</strong> with tone pair ${correctTone}.`;
  } else {
    stats[selectedTone].failures++;
    resultMsg.className = 'alert alert-danger';
    resultMsg.innerHTML = `Wrong! The correct tone pair was <strong>${correctTone}</strong>. The word was <strong>${selectedWord.word}</strong>.`;
  }

  resultMsg.classList.remove('d-none');
  updateStatistics();
}

// Function to update statistics display in table form
function updateStatistics() {
  const statsTable = document.getElementById('stats-table-body');
  statsTable.innerHTML = ''; // Clear previous stats

  Object.keys(stats).forEach(tonePair => {
    const { tries, successes, failures } = stats[tonePair];
    const percentage = tries > 0 ? ((successes / tries) * 100).toFixed(2) : 0;
    
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${tonePair}</td>
      <td>${tries}</td>
      <td>${successes}</td>
      <td>${failures}</td>
      <td>${percentage}%</td>
    `;
    
    statsTable.appendChild(row);
  });
}

// Initialize the game
function initGame() {
  initializeStats(); // Initialize stats for all tone pairs
  renderToneOptions();
  const resultMsg = document.getElementById('result-msg');
  resultMsg.classList.add('d-none'); // Hide result message
}

// Set up event listeners
document.getElementById('replay-btn').addEventListener('click', playAudio);
document.getElementById('next-word-btn').addEventListener('click', function() {
  selectRandomWord();
  playAudio();
});

// Initialize game on page load
initGame();

