//step1
$(document).ready(function() {


    //event listener
    $('.play').on('click', function(event) {
        event.preventDefault();
        console.log('Play start!');
        document.getElementById("intro").style.display = "none";
        counter();
        randChangeColor();



    });
    draw();
    let ballon = $('.ballons')

    function getRandomPosition(ballon) {
        var x = document.body.offsetHeight - ballon.clientHeight;
        var y = document.body.offsetWidth - ballon.clientWidth;
        var randomX = Math.floor(Math.random() * x);
        var randomY = Math.floor(Math.random() * y);
        return [randomX, randomY];
    }


    // When the user clicks the start button, randomly select 1 figure, add the class of red-circle ( AND start the timer )
    //step2
    const randChangeColor = () => {
        const numberOfBallon = $('main figure').length;
        const randNumber = Math.floor(Math.random() * numberOfBallon);
        const randBallon = $(`main figure:nth-child(${randNumber})`);
        randBallon.addClass('yellow-circle');
    };

    // when the user clicks on a figure
    // - IF the figure has a class of red-circle, 
    // 1) remove the class of red-circle, replace it with with the class of blue-circle
    //Step 3
    $('figure').on('click', function(event) {
        event.preventDefault();
        const ballon = $(this); //ici this fait référence au ballon qu'on vient de cliquer, c'est ce ballon pas tous les ballon
        const figureHasClass = ballon.hasClass('yellow-circle'); //ici implicitement ça return true
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
            document.getElementById('scoreUser').innerHTML = "Score = " + userScore;
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
    // find all the figures with a class of red-circle, remove the red-circle class and replace with a class of bleu-circle
    // show a "game is over" modal with the score of the user, and the ability to "Play Again"
    const decount = function(i) {
        let temps = i + "s";
        document.getElementById('count').innerHTML = temps;
        if (i === 0) {

            let gameOverMessage = "Game over, your score is " + userScore;
            document.getElementById('end-game').innerHTML = gameOverMessage;
            $('.red-circle').removeClass('yellow-circle');
            document.getElementById("scoreUser").style.display = "none";
            document.getElementById("play-again").style.display = "block"; // when the user clicks the play again button, repeat randomly select 1 figure, remove the class of bleu-circle, replace it with the class of red-circle AND start the timer AND close the modal : because this 2 buttons have the same class so I used their class to start the game so they do the same thing.
            document.getElementById("start").style.display = "none";
        }
        $('#end').on('click', function() {
            if (i > 0) {
                let gameOverMessage = "Game over, your score is " + userScore;
                document.getElementById('end-game').innerHTML = gameOverMessage;
                $('.red-circle').removeClass('yellow-circle');
                document.getElementById("scoreUser").style.display = "none";
                document.getElementById("count").style.display = "none";





            }
        })
    }


    const counter = () => {
        let time = 0;
        for (var i = 20; i > -1; i--) {
            setTimeout((function(s) {
                return function() {
                    decount(s);
                }
            })(i), time);

            time += 1000;
        }
    }



    //message of end of timer







});