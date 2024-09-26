// List of words with tone pairs (same as before)
const wordSet = [
  { "tones": "1,1", "word": "中心", "pinyin": "zhōng xīn", "pinyin_no_tones": "zhong xin" },
  { "tones": "1,2", "word": "中文", "pinyin": "zhōng wén", "pinyin_no_tones": "zhong wen" },
  { "tones": "1,3", "word": "分享", "pinyin": "fēn xiǎng", "pinyin_no_tones": "fen xiang" },
  { "tones": "1,4", "word": "发现", "pinyin": "fā xiàn", "pinyin_no_tones": "fa xian" },
  { "tones": "1,neutral", "word": "休息", "pinyin": "xiū xi", "pinyin_no_tones": "xiu xi" },
  { "tones": "2,1", "word": "原因", "pinyin": "yuán yīn", "pinyin_no_tones": "yuan yin" },
  { "tones": "2,2", "word": "其实", "pinyin": "qí shí", "pinyin_no_tones": "qi shi" },
  { "tones": "2,3", "word": "如果", "pinyin": "rú guǒ", "pinyin_no_tones": "ru guo" },
  { "tones": "2,4", "word": "图片", "pinyin": "tú piàn", "pinyin_no_tones": "tu pian" },
  { "tones": "2,neutral", "word": "便宜", "pinyin": "pián yí", "pinyin_no_tones": "pian yi" },
  { "tones": "3,1", "word": "取消", "pinyin": "qǔ xiāo", "pinyin_no_tones": "qu xiao" },
  { "tones": "3,2", "word": "友情", "pinyin": "yǒu qíng", "pinyin_no_tones": "you qing" },
  { "tones": "3,3", "word": "你好", "pinyin": "nǐ hǎo", "pinyin_no_tones": "ni hao" },
  { "tones": "3,4", "word": "保证", "pinyin": "bǎo zhèng", "pinyin_no_tones": "bao zheng" },
  { "tones": "3,neutral", "word": "小姐", "pinyin": "xiǎo jiě", "pinyin_no_tones": "xiao jie" },
  { "tones": "4,1", "word": "信箱", "pinyin": "xìn xiāng", "pinyin_no_tones": "xin xiang" },
  { "tones": "4,2", "word": "内容", "pinyin": "nèi róng", "pinyin_no_tones": "nei rong" },
  { "tones": "4,3", "word": "作者", "pinyin": "zuò zhě", "pinyin_no_tones": "zuo zhe" },
  { "tones": "4,4", "word": "但是", "pinyin": "dàn shì", "pinyin_no_tones": "dan shi" },
  { "tones": "4,neutral", "word": "困难", "pinyin": "kùn nán", "pinyin_no_tones": "kun nan" }
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

  // Display the selected word and pinyin (without tones)
  document.getElementById('selected-word').innerText = `Word: ${selectedWord.word}`;
  document.getElementById('selected-pinyin').innerText = `Pinyin: ${selectedWord.pinyin_no_tones}`;
}

// Function to play the audio by generating the path dynamically
function playAudio() {
  const audioPath = `tone_pairs/${selectedWord.word}.mp3`; // Generate the path
  const audio = new Audio(audioPath);
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
  
  if (selectedTone === selectedWord.tones) {
    resultMsg.className = 'alert alert-success';
    resultMsg.innerText = 'Correct! You guessed the right tone pair!';
  } else {
    resultMsg.className = 'alert alert-danger';
    resultMsg.innerText = `Wrong! The correct tone pair was ${selectedWord.tones}. Pinyin: ${selectedWord.pinyin}`;
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

