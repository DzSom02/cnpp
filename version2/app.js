document.addEventListener('DOMContentLoaded', function () {
  const pairSelect = document.getElementById('pairSelect');
  const playButton = document.getElementById('playButton');
  const optionsDiv = document.getElementById('options');
  const message = document.getElementById('message');

  // Example word pairs and corresponding audio files
  const wordPairs = {
    "zhong vs cong": {
      "zhong": ["./audios/zhong1.mp3", "./audios/zhong2.mp3", "./audios/zhong3.mp3", "./audios/zhong4.mp3"],
      "cong": ["./audios/cong1.mp3", "./audios/cong2.mp3", "./audios/cong3.mp3", "./audios/cong4.mp3"]
    },
    "shi vs si": {
      "shi": ["./audios/shi1.mp3", "./audios/shi2.mp3", "./audios/shi3.mp3", "./audios/shi4.mp3"],
      "si": ["./audios/si1.mp3", "./audios/si2.mp3", "./audios/si3.mp3", "./audios/si4.mp3"]
    }
    // Add more pairs as needed
  };

  let currentPair = null;
  let currentWord = "";  // Stores the word of the currently playing audio

  // Populate the pair dropdown
  function populatePairSelect() {
    for (const pair in wordPairs) {
      let option = document.createElement('option');
      option.value = pair;
      option.textContent = pair;
      pairSelect.appendChild(option);
    }
  }

  // Generate the word buttons for the selected pair
  function generateOptions(pair) {
    optionsDiv.innerHTML = ""; // Clear previous options

    const words = Object.keys(wordPairs[pair]);
    words.forEach(word => {
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
      const words = Object.keys(wordPairs[currentPair]);
      const randomWord = words[Math.floor(Math.random() * words.length)];
      const randomAudio = wordPairs[currentPair][randomWord][Math.floor(Math.random() * wordPairs[currentPair][randomWord].length)];
      currentWord = randomWord;

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
    } else {
      message.textContent = `Incorrect. It was "${currentWord}".`;
      message.classList.add("text-danger");
      message.classList.remove("text-success");
    }
  }

  // Enable play button and generate word options when a pair is selected
  pairSelect.addEventListener('change', function () {
    currentPair = pairSelect.value;
    if (currentPair !== "none") {
      playButton.disabled = false;
      generateOptions(currentPair);
      message.textContent = "";
    }
  });

  // Initialize the word pair dropdown
  populatePairSelect();
});

