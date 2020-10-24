// The array of questions for our quiz game.
var questions = [
    { q: "The sky is blue.", o1: "opt 1", o2: "opt 1", o3: "opt 1", o4: "opt 1", a: "t" },
    { q: "The sky is blue.", o1: "opt 1", o2: "opt 1", o3: "opt 1", o4: "opt 1", a: "t" },
    { q: "The sky is blue.", o1: "opt 1", o2: "opt 1", o3: "opt 1", o4: "opt 1", a: "t" },
    { q: "The sky is blue.", o1: "opt 1", o2: "opt 1", o3: "opt 1", o4: "opt 1", a: "t" },
    { q: "The sky is blue.", o1: "opt 1", o2: "opt 1", o3: "opt 1", o4: "opt 1", a: "t" },
  ];

// Event Listeners
$("#startQuiz").click(function() {
    // Hide the intro and show the game screen
    $("#gameIntro").hide(1000);
    $("#gameData").show(1000, gameShow);
});

function gameShow() {
    alert("Let the games begin");

}
