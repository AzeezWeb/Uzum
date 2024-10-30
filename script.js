function openModal() {
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxzmMwAnUOMFgu0rhPSggKLcv344pViWNB7MPyMbYb6NSAisRlJF-eAw7s-_zboczuK/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })