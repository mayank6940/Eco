

// JavaScript to toggle the visibility of answers on click
const questions = document.querySelectorAll(".question");

questions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        
        // Close all other answers before opening the clicked one
        questions.forEach(otherQuestion => {
            if (otherQuestion !== question) {
                otherQuestion.classList.remove("expanded");
                otherQuestion.nextElementSibling.classList.remove("visible");
            }
        });

        // Toggle the visibility of the answer for the clicked question
        question.classList.toggle("expanded");
        answer.classList.toggle("visible");

        // Smooth scroll to the opened answer
        if (answer.classList.contains("visible")) {
            answer.scrollIntoView({ behavior: "smooth" });
        }
    });
});
