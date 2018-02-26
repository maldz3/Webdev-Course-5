(function(){
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.checkCount = function () {
    if (!$scope.dishes || $scope.dishes.length == 0){
      $scope.dishes = "Please enter data first"
    } else {
    var count = ($scope.dishes.match(/,/g) || []).length
    count += 1
    }

    $scope.message = function (){
      if (count > 3) {
        return "Too much!";
      } else {
        return "Enjoy!";
      }
    };

  };

}

})();
