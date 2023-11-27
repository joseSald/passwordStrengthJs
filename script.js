let password = document.getElementById('password');
let msg = document.getElementById('message');
let strength = document.getElementById('strength');

password.addEventListener('input', () => {
  if (password.value.length > 0) {
    msg.style.display = 'block';
  } else {
    msg.style.display = 'none';
  }
  if (password.value.length < 5) {
    strength.innerHTML = 'weak';
    password.style.borderColor = 'red';
    strength.style.color = 'red';
  } else if (password.value.length >= 5 && password.value.length < 8) {
    password.style.borderColor = 'orange';
    strength.style.color = 'orange';
    strength.innerHTML = 'medium';
  } else if (password.value.length >= 8) {
    password.style.borderColor = 'green';
    strength.style.color = 'green';
    strength.innerHTML = 'strong';
  }
});
