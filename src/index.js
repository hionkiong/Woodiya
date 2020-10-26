function sendMessage(event) {
  event.preventDefault();
  window.open("mailto:stellachoi007@gmail.com");
}
let sendButton = document.querySelector("#messageButton");
sendButton.addEventListener("click", sendMessage);
