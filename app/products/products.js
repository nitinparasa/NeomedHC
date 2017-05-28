'use strict';

angular.module('NHCApp.products', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/products', {
    templateUrl: 'products/products.html',
    controller: 'ProdCtrl'
  });
}])

.controller('ProdCtrl', ['$scope',function($scope) {
    $scope.name="nitin";
    $scope.products = {
      brand: [
        {sno:"1",name:"NEOPENEM S",active_ingredient:"Meropenem"},
        {sno:"2",name:"Tazomed 4.5",active_ingredient:"Piperacillin and Tazobactum"},
        {sno:"3",name:"Neopime",active_ingredient:"Cefipime"}
      ]
    };
}]);
