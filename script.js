const playButton = document.getElementById("playMusic");
const music = document.getElementById("bgMusic");
const heading = document.querySelector(".hero h1");
const message = document.querySelector(".message");
const message2 = document.querySelector(".message2");
const calender_mess = document.querySelector(".message-container");
const finalText = document.querySelector(".final-text");

playButton.addEventListener("click", () => {
  music.play();
  playButton.style.display = "none";

  fadeInText(heading, 2000);
  fadeInText(message, 5000);
  fadeInText(message2, 8000);
  fadeInText(calender_mess, 10000);

  // setelah beberapa detik, munculkan teks terakhir
  setTimeout(() => {
    fadeInText(finalText, 4000);
  }, 5000);
});

function fadeInText(element, duration) {
  element.style.transition = `opacity ${duration / 1000}s ease-in`;
  element.style.opacity = 1;
}
