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

// Stats data structure to store tries and successes
let stats = {};

// Initialize the stats object for each tone pair
function initializeStats() {
  initialTones.forEach(initialTone => {
    finalTones.forEach(finalTone => {
      const tonePair = `${initialTone},${finalTone}`;
      stats[tonePair] = {
        tries: 0,
        success: 0,  // Use "success" to match the rest of the code
        failures: 0
      };
    });
  });
}


// Helper function to calculate the gradient color based on percentage
function calculateGradientColor(percentage) {
  // Set the range for HSL from red (0%) to green (100%)
  const hue = (120 * percentage) / 100; // 0 is red, 120 is green in HSL
  return `hsl(${hue}, 70%, 80%)`; // Light color with 70% saturation and 80% lightness
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

function checkAnswer(selectedTone) {
  const resultMsg = document.getElementById('result-msg');
  
  // Update stats
  const data = stats[selectedWord.tones];
  data.tries += 1;
  if (selectedTone === selectedWord.tones) {
    data.success += 1;  // Increment the success count
    resultMsg.className = 'alert alert-success';
    resultMsg.innerText = 'Correct! You guessed the right tone pair!';
  } else {
    resultMsg.className = 'alert alert-danger';
    resultMsg.innerText = `Wrong! The correct tone pair was ${selectedWord.tones}. Pinyin: ${selectedWord.pinyin}`;
  }

  resultMsg.classList.remove('d-none');

  // Re-render stats table after each guess
  renderStatsTable();
}

// Function to render the stats table with gradient background
// Function to render the stats table with gradient background
function renderStatsTable() {
  const tableBody = document.getElementById('stats-table');
  tableBody.innerHTML = ''; // Clear previous table

  console.log("Rendering stats table..."); // Debug log

  initialTones.forEach(initialTone => {
    console.log(`Processing initial tone: ${initialTone}`); // Debug log for initial tone

    const row = document.createElement('tr');
    const header = document.createElement('th');
    header.innerText = initialTone;
    row.appendChild(header); // Add row header

    finalTones.forEach(finalTone => {
      const tonePair = `${initialTone},${finalTone}`;
      console.log(`Processing tone pair: ${tonePair}`); // Debug log for tone pair

      const cell = document.createElement('td');
      const data = stats[tonePair];

      // Check if there are any tries, and calculate the success percentage
      const percentage = data.tries > 0 ? Math.round((data.success / data.tries) * 100) : 0;
      console.log(`Tone Pair: ${tonePair}, Tries: ${data.tries}, Successes: ${data.success}, Percentage: ${percentage}%`); // Debug log for stats

      // Set the background color based on the percentage
      cell.style.backgroundColor = calculateGradientColor(percentage);
      cell.innerText = `${percentage}%`;

      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  console.log("Stats table rendering completed."); // Debug log when done
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

