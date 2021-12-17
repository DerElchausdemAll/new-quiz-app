// select all cards

const cards = document.querySelectorAll(".js-card");

const showAnswer = "answerButton--show";
const bookmarked = "quizCard__bookmarkIcon__checked";
const colorAnswer = "color--Answer";

cards.forEach((card) => {
  // switch bookmark-color

  const toggleBookmark = card.querySelector(".js-bookmark");
  const bookmarkChecked = card.querySelector(".js-bookmarked");

  toggleBookmark.addEventListener("click", () => {
    bookmarkChecked.classList.toggle(bookmarked);
  });

  // show answer and switch button to "hide answer"

  const toggleBotton = card.querySelector(".js-button");
  const showAnswerField = card.querySelector(".js-answer");

  toggleBotton.addEventListener("click", () => {
    showAnswerField.classList.toggle(showAnswer);
    if (toggleBotton.innerHTML === "Show Answer") {
      toggleBotton.innerHTML = "Hide Answer";
    } else {
      toggleBotton.innerHTML = "Show Answer";
    }
  });

  // switch toggle-button-color

  toggleBotton.addEventListener("click", () => {
    toggleBotton.classList.toggle(colorAnswer);
  });
});

// select navbar-elements

const icons = document.querySelectorAll(".js-toggleicon");

const switchIcons = "switch--Icons";

icons.forEach((icon) => {
  icon.addEventListener("click", (ev) => {
    icon.classList.toggle(switchIcons);
  });
});
