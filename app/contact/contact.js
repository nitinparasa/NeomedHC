'use strict';

angular.module('NHCApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'contact/contact.html',
    controller: 'ConCtrl'
  });
}])

.controller('ConCtrl',[function(){

}]);
