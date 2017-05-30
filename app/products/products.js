'use strict';

angular.module('NHCApp.products', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/products', {
    templateUrl: 'products/products.html',
    controller: 'ProdCtrl'
  });
}])

.controller('ProdCtrl', ['$scope',function($scope) {
    $scope.products = {
      brand: [
        {sno:"1",name:"NEOPENEM S",form:"injection",active_ingredient:"Meropenem",packof:"1 vial"},
        {sno:"2",name:"Tazomed 4.5",form:"injection",active_ingredient:"Piperacillin + Tazobactum",packof:"1 vial"},
        {sno:"3",name:"Neopime",form:"injection",active_ingredient:"Cefipime",packof:"1 vail"},
        {sno:"4",name:"Neoppi IV",form:"injection",active_ingredient:"Cefipime",packof:"1 vail"},
        {sno:"5",name:"Neoppi 40",form:"tables",active_ingredient:"Cefipime",packof:"10's"}
      ]
    };
}])

.controller('ProdThumbCtrl',['$scope',function($scope){

}]);
