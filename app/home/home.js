'use strict';

angular.module('NHCApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  }).
  when('/products/:productType',{
    templateUrl: 'products/prodthumb.html',
    controller: 'ProdThumbCtrl'
  });
}])

.controller('HomeCtrl', [function() {

}]);
