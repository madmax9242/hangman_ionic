angular.module('weeli')
    .controller('GameCtrl', ['$scope', '$log', '$http',
        function ($scope, $log, $http) {
            $scope.loading = true;
            var movieArray = ["FARGO", "FROZEN", "WANTED", "SPIDERMAN", "THOR", "VERTIGO", "TWINS", "TAKEN", "MILK", "JUNO", "SIGNS", "HITCH", "ZOMBIELAND", "CRASH", "MULAN", "BIG", "ROCKY", "SUPERBAD", "GHOST", "CAPOTE", "TRON", "GLORY", "GREMLINS", "CLERKS", "SHREK", "PSYCHO", "CARS", "RAY", "ALIENS", "ARGO", "CLUE", "LABYRINTH", "SCREAM", "MISERY", "DAVE"];
			var totalGuesses = 8;
			var hiddenWord = [];

            $scope.newGame = function() {
            	$log.info({msg: "new game", movies: movieArray});


            };

            $scope.getMovieTitle = function () {

            };

            $scope.letterChecker = function () {
            	var letterPress = ($('#letter').val()).toUpperCase();
				var letterIndex = movieTitle.indexOf(letterPress);
				var str = ($('#finalWord').text());
				if (letterIndex != -1) {
					wordDisplayer(letterIndex, letterPress, str);
					lettersGuessed(letterPress);
				}
				else {
					alert("Nope, guess again.");
					lettersGuessed(letterPress);
					totalGuesses -= 1;
					$('.guesses-left').text(String(totalGuesses));
					strikeCounter(totalGuesses);
				}
				$("#letter").val("");
            };




    }]);