(function(){

  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var itemBuyer = this;

    itemBuyer.items = ShoppingListCheckOffService.getToBuyItems();

    itemBuyer.removeItem = function(itemIndex){
      ShoppingListCheckOffService.removeItem(itemIndex);
    };

  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var showList = this;

    showList.item = "";
    showList.items = ShoppingListCheckOffService.getBoughtItems();

    showList.addItem = function() {
      ShoppingListCheckOffService.addItem(showList.item);
    };

  }

  function ShoppingListCheckOffService(){
    var service = this;

    var toBuy = ['10 cookies', 'milk', 'eggs', 'bread', 'cheese'];
    var bought = [];

    service.removeItem = function (itemIndex) {
      var item = toBuy[itemIndex];
      toBuy.splice(itemIndex, 1);
      bought.push(item);
    };

    service.getToBuyItems = function () {
      return toBuy;
    };

    service.getBoughtItems = function () {
      return bought;
    };

  }

})();
