
const adviceText = document.getElementById('advice-text');
const adviceNumber = document.getElementById('advice-number');
const diceButton = document.getElementById('dice-btn');


function getAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      adviceText.textContent = '"' + data.slip.advice + '"';
      adviceNumber.textContent = data.slip.id;
    });
}


diceButton.addEventListener('click', function () {
  getAdvice();
});


getAdvice();
