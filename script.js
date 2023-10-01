// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

const guessSubmit = document.getElementById('guessSubmit');
const guessField = document.getElementById('guessField');
const message = document.querySelector('.message');

let attempts = 0;

guessSubmit.addEventListener('click', checkGuess);

function checkGuess() {
  const userGuess = parseInt(guessField.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    message.textContent = 'Masukkan angka antara 1 dan 10.';
    guessField.value = '';
    return;
  }

  attempts++;

  if (userGuess === randomNumber) {
    message.textContent = `Selamat! Anda menebak angka (${randomNumber}) dengan benar dalam ${attempts} percobaan.`;
    guessField.disabled = true;
    guessSubmit.disabled = true;
  } else {
    let hint = `Tebakan Anda terlalu ${userGuess < randomNumber ? 'rendah' : 'tinggi'}.`;
    if (attempts === 3) {
      hint += ` (Anda telah mencapai batas maksimal percobaan)`;
      guessField.disabled = true;
      guessSubmit.disabled = true;
    }
    message.textContent = hint;
  }

  guessField.value = '';
  guessField.focus();
}
