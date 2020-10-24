$(document).ready(function() {

    // Required Variables
    var timeRemaining = 8;
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
        currentQuestionNum++;
        $("#question" + (currentQuestionNum - 1)).fadeOut(1000);
        $("#question" + currentQuestionNum).delay(1000).fadeIn(1000);
    }

    function gameTimer() {      
        var timeInterval = setInterval(function() {
          timeLeft.text(timeRemaining - 2);
          timeRemaining--;
      
          if (timeRemaining === 0) {
            timeLeft.text("0").css("color", "red");
            clearInterval(timeInterval);
            gameOver();
          }
      
        }, 1000);
      }

      function gameOver() {
        $("#question" + currentQuestionNum).stop().hide();
        $("#resultsBox").stop().hide();
        $("#gameOver").fadeIn(1000);
      }

});
