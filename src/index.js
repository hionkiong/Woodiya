function sendMessage(event) {
  event.preventDefault();
  window.open("mailto:stellachoi007@gmail.com");
}
let sendButton = document.querySelector("#messageButton");
sendButton.addEventListener("click", sendMessage);

function moreCodes(event) {
  event.preventDefault();
  window.open("https://github.com/hionkiong");
}

let moreButton = document.querySelector("#moreButton");
moreButton.addEventListener("click", moreCodes);
