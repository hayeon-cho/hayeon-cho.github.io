const loginForm = document.querySelector("#loginForm");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector(".greeting");

function handleLogin(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem("username", username);
    paintGreetings(username);
}

const paintGreetings = (username) => {
    loginForm.classList.add("hidden");
    greeting.innerText = `Hi ${username}!`;
    greeting.classList.remove("hidden");
};

loginForm.addEventListener("submit", handleLogin);

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", handleLogin);
} else {
    paintGreetings(savedUsername);
}
