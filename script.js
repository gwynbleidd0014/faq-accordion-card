"strict";

// GET ALL NECESSERY ELEMENTS

const questions = document.querySelectorAll(".question-group-main");

[...questions].forEach((question) => {
  question.addEventListener("click", (e) => {
    // Get all necessery elements
    const questionMain = question;
    const arrow = questionMain.querySelector(".arrow-icon");
    const questionGroup = questionMain.parentElement;
    const answer = questionGroup.lastElementChild;
    //Rotate button
    arrow.classList.toggle("mirror");
    //Toogle question-opened class
    questionMain.classList.toggle("question-opened");
    //Toogle hidden class
    answer.classList.toggle("hidden");
    console.log(questionGroup, question, answer);
  });
});
