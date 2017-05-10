'use strict';

// Declare app level module which depends on views, and components
angular.module('NHCApp', [
  'ngRoute',
  'NHCApp.aboutus',
  'NHCApp.home'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/'});
}]);
