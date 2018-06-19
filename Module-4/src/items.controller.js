(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuItemsController', MenuItemsController);


MenuItemsController.$inject = ['$stateParams', 'MenuDataService'];
function MenuItemsController($stateParams, MenuDataService) {
  var items = this;

  items.getItemsForCategory = function (categoryShortName) {
    var promise = MenuDataService.getItemsForCategory(categoryShortName);

    promise.then(function (response) {
      items.items = response.data;
      console.log(response.data);
    })
    .catch(function () {
      console.log("Something went terribly wrong.");
    });
  }
}

})();
