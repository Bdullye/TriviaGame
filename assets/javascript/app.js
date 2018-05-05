// set background. //
// create questions for 2000's trivia game. //
// set container to have questions in the middle of the page along with different answers.
// What year did the original xbox release? 2005, 2008, 2000, 2001? 2001.
// What n 2001, wmovie came out ihich starred Elijah Wood? 
// link correct and incorrect answers.
// have a timer set to 120 seconds.
// have a "done" button.
// create a second screen that shows number of correct/incorrect answers.

$(document).ready(function(){

    var questions = [
        {
            Question: 'What year did the original xbox release?',
            Choices: [2005, 2008, 2000, 2001],
            Answer: 2001
        },
        {
            Question: 'What show did Shia Labeouf star in on the Disney Channel from 2000 to 2003?',
            Choices: ['That\'s so Raven', 'Even Stevens', 'Boy Meet\'s World', 'Recess'],
            Answer: 'Even Stevens'
        },
        {
            Question: 'What movie released in 2001 starred Elijah Wood and was based on a wildly popular book trilogy?',
            Choices: ['Ghostbusters' , 'The Lord of the Rings: Fellowship of the Ring' , 'Jurrasic Park 3' , 'Harry Potter and the Sorcerer\'s Stone'],
            Answer: 'The Lord of the Rings: Fellowship of the Ring'
        },
        {
            Question: 'In Harry Potter and the Order of the Phoenix, which character died?',
            Choices: ['Hagred', 'Professor Snape', 'Harry Potter', 'Sirius Black'],
            Answer: 'Sirius Black'
        },   
    ];

    var right = 0;
    var wrong = 0;

    $(".startBtn").click(function() {
        //$(".question").text(questions[0].Question);
        //$(".question").text(questions[1])
        var counter = 120;
        setInterval(function() {
          counter--;
           if (counter >= 0) {
              span = document.getElementById("timer");
              span.innerHTML = counter;
           }
           if (counter === 0) {
              alert('sorry, out of time');
              clearInterval(counter);
            }
          }, 1000);

        for (var i = 0; i < questions.length; i++){
            var questionDiv = $("<div>");
            var questionText = $("<p>");
            var questionChoices = $("<div>");

            questionText.text(questions[i].Question);
            questionDiv.html(questionText);
            questionChoices.attr('style', 'display:inline-flex');

            for (var j = 0; j < 4; j++) {
                var choiceDiv =$("<div>");
                var choiceText = $("<p>");
                var radioBtn = $('<input>').attr('type', 'radio');
                radioBtn.attr('name','question-'+i);
                radioBtn.attr('data-val', questions[i].Choices[j]);
                choiceText.text(questions[i].Choices[j]);
                choiceDiv.append(radioBtn);
                choiceDiv.append(choiceText);
                choiceDiv.attr('style', 'margin:5px');
                questionChoices.append(choiceDiv);
            }
            questionDiv.append(questionChoices);

            $(".TriviaBox").append(questionDiv);
            
        };
        
        $('.submitBtn').attr('style', 'display:visible');

    });

    $(".submitBtn").click(function() {
         console.log("Yes?");
        for (var i = 0; i < questions.length; i++){
            console.log($('input:checked')[i]);
            var userChoice = $('input:checked').eq(i).attr("data-val");
            console.log(userChoice);
            if (userChoice===questions[i].Answer){
                right++;
            } else {
                wrong++;
            }
        }

        alert('\nRight: ' + right +'\nWrong: ' +wrong);
         $('.TriviaBox').attr('display', 'none')
         location.reload(true);
    });
});