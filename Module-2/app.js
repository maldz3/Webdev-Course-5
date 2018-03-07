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

    var toBuy = [ {name: "cookies", quantity: 10},
                  {name: "drinks", quantity: 3},
                  {name: "eggs", quantity: 12},
                  {name: "cheese", quantity: 1},
                  {name: "chocolates", quantity: 5} ];
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
