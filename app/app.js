'use strict';

// Declare app level module which depends on views, and components
angular.module('NHCApp', [
  'ngRoute',
  'NHCApp.aboutus',
  'NHCApp.home',
  'NHCApp.products'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.
  
  otherwise({redirectTo: '/'});
}])
.controller('MainCtrl',['$scope', function($scope){
$scope.gotToTeam = function(id) {
 $location.path("/aboutus");
 $timeout(function(){
   $location.hash(id);
   $anchorScroll();
 }, delay);
 };
}]);
