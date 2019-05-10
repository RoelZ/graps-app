'use strict';

angular
  .module('app.routes', ['ngRoute'])
  .config(config);

function config($routeProvider, $locationProvider){
  $routeProvider
    .when('/home/', {
      templateUrl: 'sections/home/home.tmpl.html',
      controller: 'HomeController'
    })
    .otherwise({
      redirectTo: '/'
    });
    
  $locationProvider.html5Mode(true);
}
