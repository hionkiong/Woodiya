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

function searchProfile(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-profile-input").value;
  window.open(
    `https://www.linkedin.com/search/results/all/?keywords=${searchInput}&origin=GLOBAL_SEARCH_HEADER`
  );
}
let searchForm = document.querySelector("#search-profile");
searchForm.addEventListener("submit", searchProfile);

function liked(event) {
  event.preventDefault();
  likeButton.classList.add("active");
}

let likeButton = document.querySelector("#likeButton");
likeButton.addEventListener("click", liked);
