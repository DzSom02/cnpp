document.getElementById('generateButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    if (inputText.trim() !== '') {
        const randomNumber1 = Math.floor(Math.random() * 4) + 1;
        const randomNumber2 = Math.floor(Math.random() * 4) + 1;
        const outputText = `${inputText}${randomNumber1} ${inputText}${randomNumber2}`;
        document.getElementById('outputText').textContent = outputText;
    } else {
        document.getElementById('outputText').textContent = 'Please enter some text.';
    }
});

