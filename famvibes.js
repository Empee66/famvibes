function validatePassword() {
  const passwordInput = document.getElementById('password');
  const feedback = document.getElementById('feedback');
  const password = passwordInput.value;

  // Example validation: Password must be at least 6 characters
  if (password.length >= 6) {
    passwordInput.classList.remove('wrong');
    passwordInput.classList.add('correct');
    feedback.textContent = "✔️";
  } else {
    passwordInput.classList.remove('correct');
    passwordInput.classList.add('wrong');
    feedback.textContent = "😡";
  }
}
