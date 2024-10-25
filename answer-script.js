// Sample questions data (from previous page or database)
const questions = [
    { topic: "Algorithms", subquery: "Neural Networks", question: "What is the difference between ANN and CNN?" },
    { topic: "Web Development", subquery: "Frontend", question: "How does flexbox layout work?" },
    { topic: "Data Science", subquery: "Data Analysis", question: "What is the difference between regression and classification?" }
    // More questions can be added here
];

// Function to filter questions based on selected interests
function filterQuestions() {
    const interestSelect = document.getElementById("interest-select");
    const selectedInterests = Array.from(interestSelect.selectedOptions).map(opt => opt.value);
    const filteredQuestionsDiv = document.getElementById("filtered-questions");

    filteredQuestionsDiv.innerHTML = ""; // Clear previous results

    // Display questions that match selected interests
    questions
        .filter(q => selectedInterests.includes(q.topic))
        .forEach(q => {
            const questionBox = document.createElement("div");
            questionBox.classList.add("question-box");
            questionBox.innerHTML = `
                <h3>${q.topic} - ${q.subquery}</h3>
                <p>${q.question}</p>
                <textarea placeholder="Type your answer here..."></textarea>
                <button class="answer-submit">Submit Answer</button>
            `;

            // Submit answer event
            questionBox.querySelector(".answer-submit").addEventListener("click", function() {
                const answer = questionBox.querySelector("textarea").value;
                if (answer.trim() === "") {
                    alert("Please enter an answer before submitting.");
                    return;
                }
                alert("Answer submitted successfully!");
                questionBox.querySelector("textarea").value = ""; // Clear answer field after submission
            });

            filteredQuestionsDiv.appendChild(questionBox);
        });
}

// Apply filter button event
document.getElementById("apply-filter").addEventListener("click", filterQuestions);
