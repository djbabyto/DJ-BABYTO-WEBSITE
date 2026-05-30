const player = document.querySelector(".player");
const playButton = document.querySelector(".play-button");
const skipButton = document.querySelector(".skip-button");
const trackTitle = document.querySelector("#track-title");
const trackGenre = document.querySelector("#track-genre");
const mixButtons = Array.from(document.querySelectorAll(".mix-list button"));

let currentMix = 0;

function setMix(index) {
  currentMix = index;
  const selected = mixButtons[currentMix];

  mixButtons.forEach((button) => button.classList.remove("active"));
  selected.classList.add("active");
  trackTitle.textContent = selected.dataset.title;
  trackGenre.textContent = selected.dataset.genre;
}

playButton.addEventListener("click", () => {
  const isPlaying = player.classList.toggle("playing");
  playButton.textContent = isPlaying ? "Ⅱ" : "▶";
  playButton.setAttribute("aria-label", isPlaying ? "Pause preview" : "Play preview");
});

skipButton.addEventListener("click", () => {
  setMix((currentMix + 1) % mixButtons.length);
});

mixButtons.forEach((button, index) => {
  button.addEventListener("click", () => setMix(index));
});

document.querySelector(".contact-form").addEventListener("submit", () => {
  sessionStorage.setItem("djBabytoBookingIntent", "requested");
});

const stickyBooking = document.querySelector(".sticky-booking");
const bookingSection = document.querySelector("#book");

if ("IntersectionObserver" in window && stickyBooking && bookingSection) {
  const bookingObserver = new IntersectionObserver(
    ([entry]) => {
      stickyBooking.classList.toggle("is-hidden", entry.isIntersecting);
    },
    { threshold: 0.18 }
  );

  bookingObserver.observe(bookingSection);
}
