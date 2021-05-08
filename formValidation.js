const verification = () => {
  const usernameInput = document.querySelector('#username');
  const passwordInput = document.querySelector('#password');
  const passwordVerificationInput = document.querySelector('#password-verifier');
  const messageDiv = document.querySelector('#message');

  if (usernameInput.value.length > 20) {
    usernameInput.setAttribute('class', 'error')
    messageDiv.textContent = `Your username can't have more then 20 characters`
  } 

  if (usernameInput.value.length < 3) {
    usernameInput.setAttribute('class', 'error')
    messageDiv.textContent = `Your username can't have less then 3 characters`
  } 

  if (usernameInput.value.length > 3 && usernameInput.value.length < 20) {
    usernameInput.removeAttribute('class', 'error')
    usernameInput.setAttribute('class', 'neutral')
    messageDiv.textContent = ""
  }
}

document.addEventListener('click', event => {
  const elementId = event.target.id;

  switch(elementId) {
    case "submit":
      verification();
      break;
  }
})