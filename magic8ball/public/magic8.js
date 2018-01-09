// write ajax code here

const answer = document.getElementById('answer');

document.getElementById('question-form')
  .addEventListener('submit', (event) => {
    event.preventDefault()
    console.log("Submitted")
    fetch('/magic8response')
      .then(response => response.text())
      .then(prediction => {
        answer.innerHTML = prediction;
  })
})
