'use strict';

// Declare app level module which depends on views, and components
angular.module('NHCApp', [
  'ngRoute',
  'NHCApp.aboutus',
  'NHCApp.home',
  'NHCApp.products',
  'NHCApp.contact'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.

  otherwise({redirectTo: '/'});
}])
.directive('scrollNav',['$window','$timeout', function($window,$timeout){

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
