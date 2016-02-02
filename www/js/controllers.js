angular.module('starter.controllers', [])

.controller('GameCtrl', function($scope, $log) {
    $scope.newGame = function () {
      alert("New game");
      $log.info("New game");
    }
})

.controller('ProfileCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
