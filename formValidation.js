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

  if (usernameInput.value.length >= 3 && usernameInput.value.length <= 20) {
    usernameInput.removeAttribute('class', 'error')
    messageDiv.textContent = ``
  }

  if (passwordVerificationInput.value.length === 0) {
    passwordVerificationInput.setAttribute('class', 'error')
    messageDiv.textContent = "Please retype your password in Password Verifier"
  }

  if (usernameInput.value.length === 0) {
    usernameInput.setAttribute('class', 'error')
    messageDiv.textContent = `You need to provide a username please`
  }

  if (passwordInput.value.length > 20) {
    passwordInput.setAttribute('class', 'error')
    messageDiv.textContent = `Your password can't have more then 20 characters`
  } 

  if (passwordInput.value.length < 5) {
    passwordInput.setAttribute('class', 'error')
    messageDiv.textContent = `Your password can't have less then 5 characters`
  } 

  if (passwordInput.value.length >= 5 && passwordInput.value.length <= 20) {
    passwordInput.removeAttribute('class', 'error')
    messageDiv.textContent = ``
  }

  if (passwordInput.value !== passwordVerificationInput.value) {
    passwordInput.setAttribute('class', 'error')
    passwordVerificationInput.setAttribute('class', 'error')
    messageDiv.textContent = "Your password in Password and Password Verifier don't match"
  }

  if (passwordInput.value === passwordVerificationInput.value) {
    passwordVerificationInput.removeAttribute('class', 'error')
  }

  if (passwordInput.value.length === 0) {
    passwordInput.setAttribute('class', 'error')
    messageDiv.textContent = "You need to provide a password for your account please"

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