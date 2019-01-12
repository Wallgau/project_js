//step1
$(document).ready(function(){
	let userScore = 0;
	//event listener
	$('button').on('click', function(event){ 
		event.preventDefault();
		console.log('Play start!');
		randChangeColor();

	
	});
	

	// When the user clicks the start button, randomly select 1 figure, remove the class of bleu-circle, replace it with the class of red-circle ( AND start the timer )
	//step2
	const randChangeColor = () => {
		const numberOfBallon = $('main figure').length;
		const randNumber = Math.floor(Math.random() * numberOfBallon);
		const randBallon = $(`main figure:nth-child(${randNumber})`);
		randBallon.addClass('red-circle');	
	};

	// when the user clicks on a figure
    // - IF the figure has a class of red-circle, 
        // 1) remove the class of red-circle, replace it with with the class of blue-circle
    //Step 3
	$('figure').on('click', function(event){
		event.preventDefault();
		const ballon = $(this);//ici this fait référence au ballon qu'on vient de cliquer, c'est ce ballon pas tous les ballon
		const figureHasClass = ballon.hasClass('red-circle');//ici implicitement ça return true
		clickBallon(figureHasClass, ballon);
	});

	// 2) increase the score by 1
        // 3) randomly select 1 figure, remove the class of bleu-circle, replace it with the class of red-circle
  //Step4      
	const clickBallon = (hasClass, ballon) => {
		if(hasClass){
			ballon.removeClass('red-circle');
			userScore = userScore + 1;
			console.log(userScore);
			return randChangeColor();
		}
		userScore = userScore - 1;
		console.log(userScore);
		return;
		
		
	};




	
	


// when the timer runs out
    // find all the figures with a class of red-circle, remove the red-circle class and replace with a class of bleu-circle
    // show a "game is over" modal with the score of the user, and the ability to "Play Again"

// when the user clicks the play again button, repeat randomly select 1 figure, remove the class of bleu-circle, replace it with the class of red-circle AND start the timer AND close the modal
	










});