
$(document).ready(function(){
	
	var number;
	var guessCount;

	newGame();
	
	$('.new').on('click', function(){
		newGame();
		})

	$('#guessButton').on('click', function(event){
		event.preventDefault();	
		var getInputNum = document.getElementById('userGuess').value;
		getInputNum = +getInputNum;
		if (getInputNum >= (number + 1) && getInputNum <= (number + 9)) {
			document.getElementById('feedback').innerHTML = 'Very Hot';
		} else if ( getInputNum <= (number - 1) && getInputNum >= (number - 9) ) {
			document.getElementById('feedback').innerHTML = 'Very Hot';
		} else if ( getInputNum >= (number + 10) && getInputNum <= (number + 19) ) {
			document.getElementById('feedback').innerHTML = 'Hot';
		} else if ( getInputNum <= (number - 10) && getInputNum >= (number - 19) ) {
			document.getElementById('feedback').innerHTML = 'Hot';
		} else if ( getInputNum >= (number + 20) && getInputNum <= (number + 29) ) {
			document.getElementById('feedback').innerHTML = 'Warm';
		} else if ( getInputNum <= (number - 20) && getInputNum >= (number - 29) ) {
			document.getElementById('feedback').innerHTML = 'Warm';
		} else if ( getInputNum >= (number + 30) && getInputNum <= (number + 49) ) {
			document.getElementById('feedback').innerHTML = 'Cold';	
		} else if ( getInputNum <= (number - 30) && getInputNum >= (number - 49) ) {
			document.getElementById('feedback').innerHTML = 'Cold';	
		} else if (getInputNum >= (number + 50) ||  getInputNum <= (number - 50) ){
			document.getElementById('feedback').innerHTML = 'Ice cold';
		} 

		countGuesses();
		trackGuessList();

	})

	function newGame() {
		setNumber(); //generate a new random number
		document.getElementById('count').innerHTML = '0'; //reset the count
		document.getElementById('feedback').innerHTML = 'Make your Guess'; //change h2#feedback back to Make a Guess
		$('#userGuess').val('');
		$('#guessList').children('li').remove();	//remove <li> elements from #guessList
	};

	function setNumber() {
		var newNumber = Math.floor(Math.random() * 101) + 1;
		number = newNumber;
	};
	
	function countGuesses() {
		//debugger
		var guessCount = $('#count').text();
		guessCount = parseInt(guessCount);
		var newCount = guessCount + 1;
		document.getElementById('count').innerHTML = newCount;
	};

	function trackGuessList() {
		//debugger
		var guess = $('#feedback').text();
		var guessNum = $('#userGuess').val();
		var guessListItem = $('<li>'+guess+" "+guessNum+'<br></li>');
		$('#guessList').append(guessListItem); // append <li> that contains the value of guessListItem
	};




	/*--- Display information modal box ---*/
  	$('.what').click(function(){
    	$('.overlay').fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$('a.close').click(function(){
  		$('.overlay').fadeOut(1000);
  	});

});


