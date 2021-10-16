const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const USER_KEY = "username";
const HIDDEN_CLASS = "hidden";

function printLogin(username) {
  greeting.classList.remove(HIDDEN_CLASS);
  greeting.innerText = `Hello ${username}~!!`;
}

function loginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASS);
  localStorage.setItem(USER_KEY, username);
  printLogin(username);
}

loginForm.addEventListener("submit", loginSubmit);

savedUsername = localStorage.getItem(USER_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  printLogin(savedUsername);
}
