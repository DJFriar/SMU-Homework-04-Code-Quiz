$(document).ready(function() {

    // Required Variables
    var timeLeft = 75;
    var questionNumber = 1;
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
        $("#gameIntro").hide(1000);
        $("#gameData").show(1000, gameShow);

    });

    $(".answerButton").click(function() {
        console.log(this.id);
        //answer value
        //logic test pass fail
        //logic result == score modify if needed
        //increment question var and update dom
        switch(this.id) {
            case '#option1':
                wrongAnswer;
                break;
            case '#option2':
                rightAnswer;
                break;
            default:
                break;
        }
    });

    function gameShow() {
        var questionZone = $("#questionZone");
        var questionGoesHere = $("#questionGoesHere");
        var answerButton = $("<button class='answerButton'>");        
        
        questionGoesHere.text(questions[0].q);

        answerButton.text(questions[0].o1);
        answerButton.attr("id","option1");
        answerButton.clone().appendTo(questionZone);
        answerButton.text(questions[0].o2);
        answerButton.attr("id","option2");
        answerButton.clone().appendTo(questionZone);
        answerButton.text(questions[0].o3);
        answerButton.attr("id","option3");
        answerButton.clone().appendTo(questionZone);
        answerButton.text(questions[0].o4);
        answerButton.attr("id","option4");
        answerButton.clone().appendTo(questionZone);

    }

    function rightAnswer() {
        var resultsBox = $("#resultsBox");
        var resultText = $("#resultText");

        resultText.text("Correct!");
        resultsBox.append(resultText);
    }

    function wrongAnswer() {
        var resultsBox = $("#resultsBox");
        var resultText = $("#resultText");

        resultText.text("Wrong!");
        resultsBox.append(resultText);
    }

    function gameTimer() {
        if (timeLeft > 0) {

        }
    }

});
