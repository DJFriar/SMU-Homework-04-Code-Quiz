$(document).ready(function() {

    // Required Variables
    var timeLeft = 75;
    var currentQuestionNum = 1;
    var priorQuestionNum = 0;
    var questionCard = $("#question");
    var questionOneCard = $("#question1");
    var questionTwoCard = $("#question2");
    var questionThreeCard = $("#question3");
    var questionFourCard = $("#question4");
    var questionFiveCard = $("#question5");
    var correctAnswer = "option2";

    // The array of questions for our quiz game.
    var questions = [
        { q: "Commonly used data types DO NOT include:", o1: "strings", o2: "alerts", o3: "booleans", o4: "numbers", a: "o2" },
        { q: "Arrays in JavaScript can be used to store:", o1: "numbers and strings", o2: "other arrays", o3: "booleans", o4: "all of the above", a: "o4" },
        { q: "String values must be enclosed within _______ when being assigned to variables?", o1: "commas", o2: "curly brackets", o3: "quotes", o4: "parentheses", a: "o3" },
        { q: "The condition in an id/else statement is enclosed within _______. ", o1: "parentheses", o2: "curly brackets", o3: "square brackets", o4: "quotes", a: "o1" },
        { q: "A very useful tool for printing content to the debugger is:", o1: "JavaScript", o2: "terminal/bash", o3: "for loops", o4: "console.log", a: "o4" },
    ];

    // Event Listeners
    $("#startQuiz").click(function() {
        // Hide the intro and show the game screen
        $("#gameIntro").fadeOut(1000);
        $("#scoreBox").delay(1000).fadeIn(1000);
        questionOneCard.delay(1000).fadeIn(1000);
    });

    $(".answerButton").click(function() {
        switch (this.id) {
            case 'option1':
                console.log("option 1");
                wrongAnswer();
                break;
            case 'option2':
                console.log("option 2");
                rightAnswer();
                break;
            case 'option3':
                console.log("option 3");
                wrongAnswer();
                break;
            case 'option4':
                console.log("option 4");
                wrongAnswer();
                break;
            default:
                console.log("default case");
                break;
        }
    })

    function wrongAnswer() {
        var resultText = $("#resultText");

        resultText.text("Wrong!");
        $("#resultsBox").fadeIn(1200).fadeOut(1200);
        animationHandler();
    }

    function rightAnswer() {
        var resultText = $("#resultText");

        resultText.text("Correct!");
        $("#resultsBox").fadeIn(1200).fadeOut(1200);
        animationHandler();
    }

    function animationHandler() {
        console.log(priorQuestionNum + " / " + currentQuestionNum);

        currentQuestionNum++;
        $("#question" + (currentQuestionNum - 1)).fadeOut(1000);
        $("#question" + currentQuestionNum).delay(1000).fadeIn(1000);

    }

    function gameTimer() {
        if (timeLeft > 0) {

        }
    }

});
