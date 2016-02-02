

function listenForNewGame()  {
	$('#new-game').click(function() {
		newGame();
	});
}

function listenForGiveUp()  {
    $("#give-up").click(function() {
        $('#finalWord').text(movieTitle);
    })
}

function listenForEnterPress()  {
	$("#letter").keyup(function (e) {
        if (e.keyCode == 13) {
        	// if ($('#letter').val() == "") {
        	// 	// alert("Guess a letter");
        	// }
        } 
        else {
        	letterChecker(movieTitle);
            		
        	}
            
        
    }); 
}