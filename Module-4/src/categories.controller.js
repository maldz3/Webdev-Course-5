(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuCategoriesController', MenuCategoriesController);


MenuCategoriesController.$inject = ['MenuDataService'];
function MenuCategoriesController(MenuDataService) {
  var menu = this;

  var promise = MenuDataService.getAllCategories();

  promise.then(function (response) {
    menu.categories = response.data;
    console.log(menu.categories);
  })
  .catch(function () {
    console.log("Something went terribly wrong.");
  });
}

})();
