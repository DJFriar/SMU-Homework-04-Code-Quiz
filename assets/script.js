$(document).ready(function() {

    console.log("Doc Ready");
    var lastScore = localStorage.getItem('Last Score');
    console.log(lastScore);
    // Required Variables
    var timeRemaining = 77;
    var finalScore = 0;
    var currentQuestionNum = 1;
    var timeLeft = $("#timeLeft");
    var questionOneCard = $("#question1");
    var playerName = $("#playerName").val();


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
        $("#restartQuizFooter").delay(1000).fadeIn(1000);
        questionOneCard.delay(1000).fadeIn(1000);
        // start the timer
        gameTimer();
    });

    $("#scoreBox").click(function() {
        gameOver();
    })

    $("#saveScoreBtn").click(function() {
        console.log(playerName + " / " + finalScore);
        localStorage.setItem(playerName,finalScore);
    });

    $("#viewHighScores").click(function() {
        $("#highScores").fadeToggle(900);
        $(this).text($(this).text() == 'Hide High Scores' ? 'Show High Scores' : 'Hide High Scores');
        fetchHighScores();
    });

    $("#clearHighScores").click(function () {
        localStorage.clear();
    });
    
    $(".answerButton").click(function() {
        if ($(this).hasClass("correctAnswer")) {
            console.log("Correct answer selected.");
            rightAnswer();
        } else {
            console.log("Incorrect answer.");
            wrongAnswer();
        }
    });

    // Main functions
    function wrongAnswer() {
        timeRemaining -= 10;
        $("#resultText").text("Wrong!");
        $("#resultsCard").css("background-color","lightcoral");
        $("#resultsBox").fadeIn(1200).fadeOut(1200);
        animationHandler();
    }

    function rightAnswer() {
        timeRemaining += 3;
        $("#resultText").text("Correct!");
        $("#resultsCard").css("background-color","lightgreen");
        $("#resultsBox").fadeIn(1200).fadeOut(1200);
        animationHandler();
    }

    function animationHandler() {
        if (currentQuestionNum >= 5) {
            finalScore = timeRemaining;
            gameOver();
        } else {
            currentQuestionNum++;
            console.log(currentQuestionNum);
            $("#question" + (currentQuestionNum - 1)).fadeOut(1000);
            $("#question" + currentQuestionNum).delay(1000).fadeIn(1000);
        }
    }

    function gameTimer() {      
        var timeInterval = setInterval(function() {
            // Subtracting two seconds due to an issue with the time out action triggers two seconds early
            timeLeft.text(timeRemaining - 2);
            timeRemaining--;
        
            // Stop the timer
            if (timeRemaining <= 0) {
                clearInterval(timeInterval);
                gameOver();
            }
        }, 1000);
    }

    function gameOver() {
        // Hide all other windows
        $("#question" + currentQuestionNum).stop().hide();
        $("#resultsBox").stop().hide();
        $("#scoreBox").hide();

        // Display the final score
        $("#gameOver").fadeIn(1000);
        $("#finalScore").attr("value", finalScore);
        
        // Save the score to local storage
        localStorage.setItem('Last Score',finalScore);
    }
    

    function fetchHighScores() {
        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            alert(`${key}: ${localStorage.getItem(key)}`);
        }
    }

});
