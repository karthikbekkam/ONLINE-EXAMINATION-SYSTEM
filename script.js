// Questions data (HTML entities used for tags)
var questions = [
    {
        q: "Which language is used for web development?",
        options: ["Python", "HTML", "C", "Java"],
        answer: "HTML"
    },
    {
        q: "Which tag is used for JavaScript?",
        options: ["&lt;js&gt;", "&lt;javascript&gt;", "&lt;script&gt;", "&lt;code&gt;"],
        answer: "&lt;script&gt;"
    },
    {
        q: "Which is not a programming language?",
        options: ["Python", "HTML", "Java", "C"],
        answer: "HTML"
    }
];

// Variables
var index = 0;
var score = 0;
var time = 60;
var timer;

// Start Exam
function startExam() {
    var name = document.getElementById("studentName").value;

    if (name == "") {
        alert("Enter student name");
        return;
    }

    document.getElementById("startSection").style.display = "none";
    document.getElementById("examSection").style.display = "block";

    showQuestion();
    startTimer();
}

// Show Question
function showQuestion() {
    var currentQuestion = questions[index];
    document.getElementById("question").innerText = currentQuestion.q;

    var optionsHTML = "";

    for (var i = 0; i < currentQuestion.options.length; i++) {
        optionsHTML += "<label>";
        optionsHTML += "<input type='radio' name='option' value='" +
                        currentQuestion.options[i] + "'> ";
        optionsHTML += currentQuestion.options[i];
        optionsHTML += "</label>";
    }

    document.getElementById("options").innerHTML = optionsHTML;
}

// Next Question
function nextQuestion() {
    var selected = document.querySelector("input[name='option']:checked");

    if (selected != null) {
        if (selected.value == questions[index].answer) {
            score = score + 1;
        }
    }

    index = index + 1;

    if (index < questions.length) {
        showQuestion();
    } else {
        endExam();
    }
}

// Timer
function startTimer() {
    timer = setInterval(function () {
        time = time - 1;
        document.getElementById("timer").innerText = "Time Left: " + time;

        if (time == 0) {
            endExam();
        }
    }, 1000);
}

// End Exam
function endExam() {
    clearInterval(timer);

    document.getElementById("examSection").style.display = "none";
    document.getElementById("resultSection").style.display = "block";

    document.getElementById("result").innerText =
        "You scored " + score + " out of " + questions.length;
}
