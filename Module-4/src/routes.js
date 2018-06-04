(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'templates/categories.template.html',
    controller: 'MenuCategoriesController as catCtrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/items/{categoryShortName}',
    templateUrl: 'templates/items.template.html',
    controller: "MenuItemsController as itemsCtrl",
    resolve: {
      items: ['$stateParams', 'MenuDataService',
        function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
  });

}

})();
