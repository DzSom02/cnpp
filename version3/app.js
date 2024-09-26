// List of words with tone pairs (from the previously provided list)
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

// Possible tone pairs
const tonePairs = [
  "1,1", "1,2", "1,3", "1,4", "1,neutral",
  "2,1", "2,2", "2,3", "2,4", "2,neutral",
  "3,1", "3,2", "3,3", "3,4", "3,neutral",
  "4,1", "4,2", "4,3", "4,4", "4,neutral"
];

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

  tonePairs.forEach(tone => {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.colSpan = 2;
    cell.innerText = tone;
    cell.classList.add('table-cell');
    cell.onclick = () => checkAnswer(tone);
    row.appendChild(cell);
    tableBody.appendChild(row);
  });
}

// Function to check the user's answer
function checkAnswer(selectedTone) {
  const resultMsg = document.getElementById('result-msg');

  if (selectedTone === selectedWord.tones) {
    resultMsg.className = 'alert alert-success';
    resultMsg.innerText = 'Correct! You guessed the right tone pair!';
  } else {
    resultMsg.className = 'alert alert-danger';
    resultMsg.innerText = 'Wrong! Try again.';
  }

  resultMsg.classList.remove('d-none');
}

// Initialize the game
function initGame() {
  selectRandomWord();
  renderToneOptions();
  const resultMsg = document.getElementById('result-msg');
  resultMsg.classList.add('d-none'); // Hide result message
}

// Set up event listeners
document.getElementById('play-btn').addEventListener('click', playAudio);

// Initialize game on page load
initGame();

