//step1
$(document).ready(function() {
    //event listener
    $('#start').on('click', function(event) {
        event.preventDefault();
        console.log('Play start!');
        document.getElementById("intro").style.display = "none";
        counter();
        randChangeColor();
    });

    // When the user clicks the start button, randomly select 1 figure, add the class of yellow-circle ( AND start the timer )
    //step2

    const randChangeColor = () => {
        const numberOfBallon = $('main figure').length; // to get a number and be able to use Math.random to pick a ball randomly
        const randNumber = Math.floor(Math.random() * numberOfBallon);
        const randBallon = $(`main figure:nth-child(${randNumber})`);
        randBallon.addClass('yellow-circle');
    };

    // when the user clicks on a figure
    // - IF the figure has a class of yellow-circle, 
    // 1) remove the class of red-circle, replace it with with the class of blue-circle
    //Step 3
    $('figure').on('click', function(event) {
        event.preventDefault();
        const ballon = $(this); //ici this fait référence au ballon qu'on vient de cliquer, c'est ce ballon pas tous les ballon
        const figureHasClass = ballon.hasClass('yellow-circle'); //ici implicitement Ã§a return true
        clickBallon(figureHasClass, ballon);
    });

    // 2) increase the score by 1
    // 3) randomly select 1 figure, remove the class of bleu-circle, replace it with the class of red-circle
    //Step4      
    const clickBallon = (hasClass, ballon) => {
        if (hasClass) {
            ballon.removeClass('yellow-circle');
            userScore = userScore + 1;
            console.log(userScore);
            //put the userScore inside of html to show the score
            userScore = 0;
            document.getElementById('scoreUser').innerHTML = "Score: " + userScore;
            return randChangeColor();
        }
        userScore = userScore - 1;
        document.getElementById('scoreUser').innerHTML = "Score = " + userScore;
        console.log(userScore);
        return;
    };
    let userScore = 0;
    //when the counter is at 0, message to get out or continue the game


    //TIMER//	
    parseInt(userScore);
    //// when the timer runs out
    // find all the figures with a class of  yellow-circle, remove the yellow-circle class and replace with a class of bleu-circle
    // show a "game is over" modal with the score of the user

    const decount = function(i) {
        let temps = i + "s";
        document.getElementById('count').innerHTML = temps;
        if (i === 0) {

            let gameOverMessage = "Game over, your score is " + userScore;
            document.getElementById('end-game').innerHTML = gameOverMessage;
            $('.yellow-circle').removeClass('yellow-circle');
            document.getElementById("scoreUser").style.display = "none";
            // when the user clicks the play again button, repeat randomly select 1 figure, remove the class of bleu-circle, replace it with the class of yellow-circle AND start the timer .
        }
        if ($('#end').on('click', function() { //when user click on stop button, remove class of yellow-circle and hide the scoreUser and the timer
                let gameOverMessage = "Game over, your score is " + userScore;
                document.getElementById('end-game').innerHTML = gameOverMessage;
                $('.yellow-circle').removeClass('yellow-circle');
                document.getElementById("scoreUser").style.display = "none";
                time = 0;
                document.getElementById("count").style.display = "none";


            }));


        if ($('#start').on('click', function() { //to restart without reload the page BUT I had an issue, it is like the timer that I stop continue to decrease and when I press #start button, the both counting play et the same time, I gave up because it's midhight, after a lot of hours to try I can't be focus
                time = 0;
                userScore = 0;
                document.getElementById("count").style.display = "block";
                document.getElementById('end-game').innerHTML = "Stay focus";
                document.getElementById("scoreUser").style.display = "block";


            }));


    }


    let time = 0;
    // for loop to make the timer

    const counter = () => {
        time = 0;
        for (var i = 20; i > -1; i--) { //to make i decrement from 20 to 0
            setTimeout((function(s) {
                return function() {
                    decount(s);
                }
            })(i), time);

            time += 1000;
        }
    }
});