'use strict';

angular.module('NHCApp.products', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/products', {
    templateUrl: 'products/products.html',
    controller: 'ProdCtrl'
  });
}])

.controller('ProdCtrl', [function() {

}]);
