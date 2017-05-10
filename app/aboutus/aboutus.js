'use strict';

angular.module('NHCApp.aboutus', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/aboutus', {
    templateUrl: 'aboutus/aboutus.html',
    controller: 'AbtusCtrl'
  });
}])

.controller('AbtusCtrl', [function() {

}]);
