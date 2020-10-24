$(document).ready(function() {

    // Required Variables
    var timeRemaining = 77;
    var finalScore = 0;
    var currentQuestionNum = 1;
    var timeLeft = $("#timeLeft");
    var questionOneCard = $("#question1");
    var q1Answer = "option2";
    var q2Answer = "option4";
    var q3Answer = "option3";
    var q4Answer = "option1";
    var q5Answer = "option4";

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
        // start the timer
        gameTimer();
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

    function wrongAnswer() {
        var resultText = $("#resultText");

        timeRemaining -= 10;
        resultText.text("Wrong!");
        $("#resultsBox").fadeIn(1200).fadeOut(1200);
        animationHandler();
    }

    function rightAnswer() {
        var resultText = $("#resultText");

        timeRemaining += 3;
        resultText.text("Correct!");
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
      
          if (timeRemaining <= 0) {
            clearInterval(timeInterval);
            gameOver();
          }
      
        }, 1000);
      }

      function gameOver() {
        $("#question" + currentQuestionNum).stop().hide();
        $("#resultsBox").stop().hide();
        $("#scoreBox").hide();
        $("#gameOver").fadeIn(1000);
        $("#finalScore").text(finalScore);
      }

});
