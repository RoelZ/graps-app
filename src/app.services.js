'use strict';

angular
  .module('app.services', [])

  // .service('dataService', function($http) {
  //   delete $http.defaults.headers.common['X-Requested-With'];
  //   this.getData = function() {
  //       // $http() returns a $promise that we can add handlers with .then()
  //       return $http({
  //           method: 'GET',
  //           url: 'http://www.placethemoment.com/wp-json/wc/v2/orders',
  //           params: 'limit=10, sort_by=created:desc',
  //           headers: {'Authorization': 'Token token=ck_ea7bcb6e77f819f6a96e8b9db2a923f2852fbd0e'}
  //       });
  //   }
  // }) 